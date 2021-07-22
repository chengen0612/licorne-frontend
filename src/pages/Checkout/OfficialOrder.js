import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

function OfficialOrder(props) {
  const [officialItems, setOfficialItems] = useState([])
  const [quantity, setQuantity] = useState([])
  const [subtotal, setSubtotal] = useState([])
  const [symbolsArr] = useState(['e', 'E', '+', '-', '.'])

  async function getOfficialInfoFromServer() {
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
    const officialProduct = data.official
    console.log(officialProduct)
    setOfficialItems(officialProduct)

    const officialQuantity = officialProduct.map((item) => {
      return item.quantity
    })
    const officialSubtotal = officialProduct.map((item, i) => {
      return +item.price * officialQuantity[i]
    })

    console.log('officialQuantity', officialQuantity)
    console.log('officialSubtotal', officialSubtotal)
    setQuantity(officialQuantity)
    setSubtotal(officialSubtotal)
  }

  useEffect(() => {
    getOfficialInfoFromServer()
  }, [])

  const handleDelete = (id) => {
    const newOfficialItems = officialItems.filter((v, i) => {
      return v.id !== id
    })
    console.log('current officialItems', newOfficialItems)
    setOfficialItems(newOfficialItems)
  }

  return (
    <>
      <div></div>
      <div className="checkout__official-box-top pl-4 pt-3 pb-2">
        <label className="checkout__official-box-title">
          <input
            className="checkout__official-box-checkbox-all"
            type="checkbox"
          />
          官方商品 <span>({officialItems.length})</span>
        </label>
      </div>
      {officialItems.map((officialItem, i) => {
        return (
          <>
            <div className="checkout__official-box-list p-4">
              <input
                className="checkout__official-box-checkbox"
                type="checkbox"
              />
              <Link to="/" className="checkout__official-box-img-wrapper">
                <img
                  className="checkout__official-box-img"
                  // src={
                  //   imgPath + '/images/official/animal_100ml.png'
                  // }
                  src={officialItem.img_id}
                  alt=""
                />
              </Link>
              <Link to="/" className="checkout__official-box-details w-25 pl-4">
                <span className="checkout__official-box-name-zh">
                  {/* 夜鶯 */}
                  {officialItem.name_zh}
                </span>
                <span className="checkout__official-box-product-name-en">
                  {/* Nightingale */}
                  {officialItem.name_en}
                </span>
                <span className="checkout__official-box-product-series">
                  {/* 動物香氛系列 */}
                  {officialItem.series_name}
                </span>
                <span className="checkout__official-box-product-volume">
                  {/* 100ML */}
                  {officialItem.volume}
                </span>
              </Link>
              <span className="checkout__official-box-product-price">
                {/* NT $2000 */}
                NT$ {officialItem.price}
              </span>
              <input
                className="box-quantity"
                type="number"
                min="1"
                name="quantity"
                defaultValue={officialItem.quantity}
                // value={quantity[i]}
                // onInput={(e) => setQuantity(e.target.value)}
                onChange={setQuantity}
                onKeyDown={(e) =>
                  symbolsArr.includes(e.key) && e.preventDefault()
                }
              />
              {/* TODO: recalculate subtotal when quantity changes */}
              <span
                className="checkout__official-box-product-subtotal"
                // setSubtotal={setSubtotal}
              >
                {/* NT $6000 */}
                NT$ {subtotal[i]}
                {/* {parseInt(officialItem.price) * parseInt(officialItem.quantity)} */}
              </span>
              <FiX
                className="feather-s"
                role="button"
                onClick={() => {
                  handleDelete(officialItem.id)
                }}
              />
            </div>
          </>
        )
      })}
    </>
  )
}

export default OfficialOrder
