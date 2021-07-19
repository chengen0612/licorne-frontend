import React, { useState, useEffect } from 'react'
// import { imgPath } from '../../config'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

function CustomOrder() {
  const [customItems, setCustomItems] = useState([])
  const [customQuantities, setCustomQuantities] = useState([])

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
    const customQuantity = data.customQuantity.split(',')
    console.log(customProduct)
    console.log(customQuantity)
    // 設定資料
    setCustomItems(customProduct)
    setCustomQuantities(customQuantity)
  }

  useEffect(() => {
    getCustomInfoFromServer()
  }, [])

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
      {customItems.map((v, i) => {
        const customItem = v[0]
        return (
          <>
            <div className="checkout__custom-box-list p-4" key={customItem.id}>
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
                  薄荷、薰衣草、檸檬
                </span>
                <span className="checkout__custom-box-product-fragrance">
                  花香調
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
                className="box-quantity"
                type="number"
                min="1"
                defaultValue={customQuantities[i]}
              />
              <span className="checkout__custom-box-product-subtotal">
                NT $6000
              </span>
              {/* TODO: delete product detail */}
              <FiX className="feather-s" role="button" />
            </div>
          </>
        )
      })}
    </>
  )
}

export default CustomOrder
