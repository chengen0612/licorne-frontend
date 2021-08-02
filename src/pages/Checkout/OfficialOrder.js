import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

function OfficialOrder({ setOfficialTotal }) {
  const [officialItems, setOfficialItems] = useState([])
  const [quantities, setQuantities] = useState([])
  const [symbolsArr] = useState(['e', 'E', '+', '-', '.'])

  async function getOfficialInfoFromServer() {
    const url = 'http://localhost:6005/checkout/official'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // console.log('official info', data)
    setOfficialItems(data)

    const quantities = data.map((item) => {
      return item.quantity
    })

    console.log('official quantities', quantities)
    setQuantities(quantities)
  }

  useEffect(() => {
    getOfficialInfoFromServer()
  }, [])

  const subtotals = officialItems.map((item, i) => {
    return +item.price * quantities[i]
  })

  const officialTotal = subtotals.reduce(function (a, b) {
    return a + b
  }, 0)
  setOfficialTotal(officialTotal)

  const handleDelete = (id) => {
    const newOfficialItems = officialItems.filter((v, i) => {
      return v.id !== id
    })
    console.log('current officialItems', newOfficialItems)
    setOfficialItems(newOfficialItems)
  }

  return (
    <>
      <div className="checkout__official-box-top pl-4 pt-3 pb-2">
        <label className="checkout__official-box-title">
          官方商品 <span>({officialItems.length})</span>
        </label>
      </div>
      {officialItems.length === 0 && (
        <div className="checkout__box-none d-flex flex-column align-items-center pt-4 pb-4">
          <span>購物籃中沒有任何商品</span>
          <Link to="/official">前往頁面繼續購物</Link>
        </div>
      )}
      {/* send to db: 官方商品細節 */}
      {officialItems.map((officialItem, i) => {
        return (
          <React.Fragment key={officialItem.id}>
            <div className="checkout__official-box-list p-4">
              {/* TODO: add corresponding link to product */}
              <Link to="/" className="checkout__official-box-img-wrapper">
                <img
                  className="checkout__official-box-img"
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
                className="checkout__box-quantity"
                type="number"
                name="quantity"
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
                  console.log('set official quantities', newQuantities)
                  console.log('current official quantities', quantities)
                }}
                onKeyDown={(e) =>
                  symbolsArr.includes(e.key) && e.preventDefault()
                }
              />
              <span className="checkout__official-box-product-subtotal">
                {/* NT $6000 */}
                NT$ {''}
                {/* 官方小計 */}
                {subtotals[i]}
              </span>
              <FiX
                className="feather-s"
                role="button"
                onClick={() => {
                  handleDelete(officialItem.id)
                }}
              />
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default OfficialOrder
