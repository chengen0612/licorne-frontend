import React, { useState, useEffect } from 'react'
// import { imgPath } from '../../config'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

function CustomOrder({ customTotal, setCustomTotal }) {
  const [customItems, setCustomItems] = useState([])
  const [quantities, setQuantities] = useState([])
  const [symbolsArr] = useState(['e', 'E', '+', '-', '.'])

  async function getCustomInfoFromServer() {
    const url = 'http://localhost:6005/checkout/custom'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('customProduct', data)
    setCustomItems(data)

    const quantities = data.map((item) => {
      return item.quantity
    })

    console.log('customQuantities', quantities)
    setQuantities(quantities)
  }

  useEffect(() => {
    getCustomInfoFromServer()
  }, [])

  const subtotals = customItems.map((item, i) => {
    return +item.price * quantities[i]
  })

  const handleDelete = (id) => {
    const newCustomItems = customItems.filter((v, i) => {
      return v.id !== id
    })
    console.log('current customItems', newCustomItems)
    setCustomItems(newCustomItems)
  }
  const cusTotal = subtotals.reduce(function (a, b) {
    return a + b
  }, 0)
  setCustomTotal(cusTotal)

  return (
    <>
      <div className="checkout__custom-box-top pl-4 pt-3 pb-2">
        <label className="checkout__custom-box-title">
          <input
            className="checkout__custom-box-checkbox-all"
            type="checkbox"
          />
          客製商品 <span>({customItems.length})</span>
        </label>
      </div>
      {customItems.length === 0 && (
        <p className="checkout__box-none d-flex justify-content-center pt-4 pb-4">
          購物籃中沒有任何商品
        </p>
      )}
      {customItems.map((customItem, i) => {
        return (
          <React.Fragment key={customItem.id}>
            <div className="checkout__custom-box-list p-4">
              <input
                className="checkout__custom-box-checkbox"
                type="checkbox"
              />
              <Link to="/" className="checkout__custom-box-img-wrapper">
                <img
                  className="checkout__custom-box-img"
                  // src={imgPath + '/images/custom/fragrance_flower.png'}
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
                  100ML
                </span>
              </Link>
              <span className="checkout__custom-box-product-price">
                {/* NT $2000 */}
                NT$ {customItem.price}
              </span>
              <input
                className="checkout__box-quantity"
                type="number"
                min="1"
                defaultValue={quantities[i]}
                onInput={(e) => {
                  const newQuantities = quantities.map((quantity, index) => {
                    if (i === index) {
                      return +e.target.value
                    }
                    return quantity
                  })
                  // quantities[i] = +e.target.value
                  setQuantities(newQuantities)
                  console.log('current customQuantities', quantities)
                }}
                onKeyDown={(e) =>
                  symbolsArr.includes(e.key) && e.preventDefault()
                }
              />
              <span className="checkout__custom-box-product-subtotal">
                {/* NT $6000 */}
                NT$ {subtotals[i]}
              </span>
              <FiX
                className="feather-s"
                role="button"
                onClick={() => {
                  handleDelete(customItem.id)
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
