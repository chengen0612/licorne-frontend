import React, { useState, useEffect } from 'react'
import './style.scss'
// import { imgPath } from '../../config'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import OfficialOrder from './OfficialOrder'
import CustomOrder from './CustomOrder'
import CourseOrder from './CourseOrder'
import OrderDetail from './OrderDetail'

function Checkout() {
  // const [officialItems, setOfficialItems] = useState([])
  // const [officialQuantities, setOfficialQuantities] = useState([])
  // const [customItems, setCustomItems] = useState([])
  // const [customQuantities, setCustomQuantities] = useState([])
  // const [value, setValue] = useState('')
  // // const [dataLoading, setDataLoading] = useState(false)

  // async function getProductItemFromServer() {
  //   // 連接的伺服器資料網址
  //   const url = 'http://localhost:6005/checkout'

  //   // 注意header資料格式要設定，伺服器才知道是json格式
  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const data = await response.json()
  //   const officialProduct = data.official
  //   const officialQuantity = data.officialQuantity.split(',')
  //   const customProduct = data.custom
  //   const customQuantity = data.customQuantity.split(',')
  //   console.log(officialProduct)
  //   console.log(officialQuantity)
  //   console.log(customProduct)
  //   console.log(customQuantity)
  //   // 設定資料
  //   setOfficialItems(officialProduct)
  //   setOfficialQuantities(officialQuantity)
  //   setCustomItems(customProduct)
  //   setCustomQuantities(customQuantity)
  // }

  // useEffect(() => {
  //   getProductItemFromServer()
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    console.log(data.get(''))
  }
  return (
    <>
      <div className="pageWrapper">
        <div className="checkout">
          <div className="checkout__text">
            <span className="checkout__text-title">購物籃</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="checkout__boxes d-flex justify-content-between">
              <div className="checkout__product-boxes">
                <div className="checkout__official-box">
                  <OfficialOrder />
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
