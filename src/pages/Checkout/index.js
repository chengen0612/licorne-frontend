import React, { useState, useEffect } from 'react'
import './style.scss'
import { imgPath } from '../../config'
import { FiX } from 'react-icons/fi'
import BoxTop from './components/BoxTop'
// import OfficialOrder from './OfficialOrder'
import CustomOrder from './CustomOrder'
import CourseOrder from './CourseOrder'
import OrderDetail from './OrderDetail'

// const officialItem = [
//   [
//     {
//       id: 1,
//       series_id: 1,
//       name_zh: '金萱烏龍茶',
//       name_en: 'Jin Xuan Oolong Tea',
//       volume: '50ml',
//       price: 2500,
//     },
//   ],
//   [
//     {
//       id: 12,
//       name_zh: '鹿',
//       name_en: 'Deer',
//       volume: '100ml',
//       price: 10000,
//     },
//   ],
// ]

function Checkout() {
  const [officialItems, setOfficialItems] = useState([])
  const [officialQuantities, setOfficialQuantities] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  async function getProductItemFromServer() {
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
    // console.log(data.product)
    // console.log(data.productQuantity)
    const officialProduct = data.product
    const officialQuantity = data.productQuantity.split(',')
    console.log(officialProduct)
    console.log(officialQuantity)
    // 設定資料
    setOfficialItems(officialProduct)
    setOfficialQuantities(officialQuantity)
  }

  useEffect(() => {
    getProductItemFromServer()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    console.log(data.get(''))
  }
  return (
    <>
      {/* {console.log(officialQuantities)} */}
      <div className="pageWrapper">
        <div className="checkout">
          <div className="checkout__text">
            <span className="checkout__text-title">購物籃</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="checkout__boxes d-flex justify-content-between">
              <div className="checkout__product-boxes">
                <div className="checkout__official-box">
                  <BoxTop />
                  <div className="checkout__official-box-list p-4">
                    <input
                      className="checkout__official-box-checkbox"
                      type="checkbox"
                    />
                    <div className="checkout__official-box-img-wrapper">
                      <img
                        className="checkout__official-box-img"
                        src={imgPath + '/images/official/animal_100ml.png'}
                        alt=""
                      />
                    </div>
                    {officialItems.map((value) => {
                      const officialItem = value[0]
                      return (
                        <>
                          <div
                            className="checkout__official-box-details w-25 pl-4"
                            key={officialItem.id}
                          >
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
                              {officialItem.series_id}
                            </span>
                            <span className="checkout__official-box-product-volume">
                              {/* 100ML */}
                              {officialItem.volume}
                            </span>
                          </div>
                          <span className="checkout__official-box-product-price">
                            {/* NT $2000 */}
                            {officialItem.price}
                          </span>
                        </>
                      )
                    })}
                    {officialQuantities.map((value) => {
                      console.log(value)
                      return (
                        <input
                          className="box-quantity"
                          type="number"
                          min="1"
                          value={value}
                        />
                      )
                    })}
                    <span className="checkout__official-box-product-subtotal">
                      NT $6000
                    </span>
                    {/* TODO: delete product detail */}
                    <FiX className="feather-s" role="button" />
                  </div>
                  {/* <OfficialOrder /> */}
                </div>
                <div className="checkout__custom-box">
                  <CustomOrder />
                </div>
                <div className="checkout__course-box">
                  <CourseOrder />
                </div>
              </div>
              <div className="checkout__order-box">
                <OrderDetail />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Checkout
