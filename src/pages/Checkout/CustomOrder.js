import React, { useState, useEffect } from 'react'
// import { imgPath } from '../../config'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import myswal from '../../utils/sweetalert'

function CustomOrder(props) {
  const { setCustomTotal, setCustomOrder } = props
  const [customItems, setCustomItems] = useState([])
  const [quantities, setQuantities] = useState([])
  const [symbolsArr] = useState(['e', 'E', '+', '-', '.'])

  function getCustomOrder() {
    // console.log('這是customItems', customItems)
    const customOrder = { id: '', qty: '', total: 0 }
    // const customorderitem = customItems
    // const customorderquantities = quantities

    customOrder.id = customItems
    customOrder.qty = quantities
    customOrder.total = customTotal
    setCustomOrder(customOrder)
  }

  async function getCustomInfoFromServer() {
    const token = localStorage.getItem('jwt')
    const url = 'http://localhost:6005/checkout/custom'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // console.log('custom info', data)
    setCustomItems(data)

    const quantities = data.map((item) => {
      return item.quantity
    })

    // console.log('custom quantities', quantities)
    setQuantities(quantities)
  }

  useEffect(() => {
    getCustomInfoFromServer()
    getCustomOrder()
  }, [])

  const subtotals = customItems.map((item, i) => {
    return +item.price * quantities[i]
  })

  const customTotal = subtotals.reduce(function (a, b) {
    return a + b
  }, 0)
  setCustomTotal(customTotal)

  const volume = '100ML'

  useEffect(() => {
    let newQuantities = quantities
    setQuantities(newQuantities)
    getCustomOrder()
  }, [customItems, quantities])

  const handleDelete = (id) => {
    const newCustomItems = customItems.filter((v, i) => {
      return v.id !== id
    })
    let newQuantities = quantities
    customItems.forEach((v, i) => {
      // console.log('this is v', v)
      if (v.id === id) {
        newQuantities.splice(i, 1)
        return
      }
    })
    // console.log('current quantity', newQuantities)
    setCustomItems(newCustomItems)
    setQuantities(newQuantities)
    getCustomOrder()
  }

  return (
    <>
      <div className="checkout__custom-box-top pl-4 pt-3 pb-2">
        <label className="checkout__custom-box-title">
          客製商品 <span>({customItems.length})</span>
        </label>
      </div>
      {customItems.length === 0 && (
        <div className="checkout__box-none d-flex flex-column align-items-center pt-4 pb-4">
          <span>購物籃中沒有任何商品</span>
          <Link to="/custom">前往頁面製作商品</Link>
        </div>
      )}
      {/* send to db: 客製化商品細節 */}
      {customItems.map((customItem, i) => {
        return (
          <React.Fragment key={customItem.id}>
            <div className="checkout__custom-box-list p-4">
              {/* TODO: add corresponding link to product */}
              <Link to="/" className="checkout__custom-box-img-wrapper">
                <img
                  className="checkout__custom-box-img"
                  src={customItem.bottle_img}
                  alt=""
                />
              </Link>
              <Link to="/" className="checkout__custom-box-details w-25 pl-4">
                <span className="checkout__custom-box-name-zh">
                  {/* MTLALM */}
                  {customItem.cust_id}
                </span>
                <span className="checkout__custom-box-product-ingredient">
                  {/* 薄荷、薰衣草、檸檬 */}
                  {customItem.custom_ingredient}
                </span>
                <span className="checkout__custom-box-product-fragrance">
                  {/* 花香調 */}
                  {customItem.fragrance_name}
                </span>
                <span className="checkout__custom-box-product-volume">
                  {/* 100ML */}
                  {volume}
                </span>
              </Link>
              <span className="checkout__custom-box-product-price">
                {/* NT $2000 */}
                NT$ {customItem.price}
              </span>
              <input
                className="checkout__box-quantity"
                type="number"
                value={quantities[i]}
                onInput={(e) => {
                  const newQuantities = quantities.map((quantity, index) => {
                    if (i === index) {
                      if (+e.target.value < 1) {
                        return ''
                      } else if (
                        +e.target.value.length > 2 ||
                        +e.target.value > 20
                      ) {
                        return 20
                      } else {
                        return +e.target.value
                      }
                    }
                    return quantity
                  })
                  setQuantities(newQuantities)
                  // console.log('set custom quantities', newQuantities)
                  // console.log('current custom quantities', quantities)
                }}
                onKeyDown={(e) =>
                  symbolsArr.includes(e.key) && e.preventDefault()
                }
              />
              <span className="checkout__custom-box-product-subtotal">
                {/* NT $6000 */}
                {/* 客製化小計 */}
                NT$ {subtotals[i]}
              </span>
              <FiX
                className="feather-s"
                role="button"
                onClick={() => {
                  // handleDelete(customItem.id)
                  myswal.confirmDelete(handleDelete, customItem.id)
                }}
              />
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default CustomOrder
