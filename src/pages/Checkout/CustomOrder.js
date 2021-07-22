import React, { useState, useEffect } from 'react'
// import { imgPath } from '../../config'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

function CustomOrder() {
  const [customItems, setCustomItems] = useState([])
  const [quantity, setQuantity] = useState([])
  const [subtotal, setSubtotal] = useState([])
  const [symbolsArr] = useState(['e', 'E', '+', '-', '.'])

  async function getCustomInfoFromServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/checkout'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    const customProduct = data.custom
    console.log(customProduct)
    // 設定資料
    setCustomItems(customProduct)

    const customQuantity = customProduct.map((item) => {
      return item.quantity
    })
    const customSubtotal = customProduct.map((item, i) => {
      return +item.price * customQuantity[i]
    })

    console.log('customQuantity', customQuantity)
    console.log('customSubtotal', customSubtotal)
    setQuantity(customQuantity)
    setSubtotal(customSubtotal)
  }

  useEffect(() => {
    getCustomInfoFromServer()
  }, [])

  const handleDelete = (id) => {
    const newCustomItems = customItems.filter((v, i) => {
      return v.id !== id
    })
    console.log('current customItems', newCustomItems)
    setCustomItems(newCustomItems)
  }

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
      {customItems.map((customItem, i) => {
        return (
          <>
            <div className="checkout__custom-box-list p-4">
              <input
                className="checkout__custom-box-checkbox"
                type="checkbox"
              />
              <Link to="/" className="checkout__custom-box-img-wrapper">
                <img
                  className="checkout__custom-box-img"
                  // src={imgPath + '/images/custom/fragrance_flower.png'}
                  key={customItem.id}
                  src={customItem.bottle_img}
                  alt=""
                />
              </Link>
              <Link to="/" className="checkout__custom-box-details w-25 pl-4">
                <span
                  className="checkout__custom-box-name-zh"
                  key={customItem.id}
                >
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
              <span
                className="checkout__custom-box-product-price"
                key={customItem.id}
              >
                {/* NT $2000 */}
                NT$ {customItem.price}
              </span>
              <input
                className="box-quantity"
                type="number"
                min="1"
                defaultValue={customItem.quantity}
                // value={quantity[i]}
                onChange={setQuantity}
                onKeyDown={(e) =>
                  symbolsArr.includes(e.key) && e.preventDefault()
                }
              />
              {/* TODO: recalculate subtotal when quantity changes */}
              <span className="checkout__custom-box-product-subtotal">
                {/* NT $6000 */}
                NT$ {subtotal[i]}
              </span>
              <FiX
                className="feather-s"
                role="button"
                onClick={() => {
                  handleDelete(customItem.id)
                }}
              />
            </div>
          </>
        )
      })}
    </>
  )
}

export default CustomOrder
