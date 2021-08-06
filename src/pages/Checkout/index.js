import React, { useState } from 'react'
import './style.scss'
import axios from 'axios'
// import { imgPath } from '../../config'
import OfficialOrder from './OfficialOrder'
import CustomOrder from './CustomOrder'
import CourseOrder from './CourseOrder'
import OrderDetail from './OrderDetail'

function Checkout() {
  const [officialTotal, setOfficialTotal] = useState(0)
  const [customTotal, setCustomTotal] = useState(0)
  const [courseTotal, setCourseTotal] = useState(0)
  //商品訂單
  const [officialOrder, setOfficialOrder] = useState({})
  // console.log('這是商品訂單')
  //客製化訂單
  const [customOrder, setCustomOrder] = useState({})
  // console.log('這是客製化訂單', customOrder)
  //課程訂單
  const [courseOrder, setCourseOrder] = useState({})
  // console.log('這是課程訂單', courseOrder)
  //訂單地址
  const [address, setAddress] = useState('')
  // console.log('這是訂單地址', address)

  async function postOfficial() {
    const officialOrderData = {}
    let indexLength = officialOrder.id
    let number = []
    for (let id of indexLength) {
      number.push(id.id)
    }

    officialOrderData.number = number
    officialOrderData.qty = officialOrder.qty
    officialOrderData.total = officialOrder.total
    officialOrderData.address = address
    let url = `http://localhost:6005/officialorder`
    let params = officialOrderData
    const response = await axios.post(url, params)
  }

  async function postCustom() {
    const CustomOrderData = {}
    let indexLength = customOrder.id
    let number = []
    for (let id of indexLength) {
      number.push(id.id)
    }
    CustomOrderData.number = number
    CustomOrderData.qty = customOrder.qty
    CustomOrderData.total = customOrder.total
    CustomOrderData.address = address
    let url = `http://localhost:6005/customorder`
    let params = CustomOrderData
    const response = await axios.post(url, params)
  }

  async function postCourse() {
    let url = `http://localhost:6005/courseorder`
    let params = courseOrder
    const response = await axios.post(url, params)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(courseOrder)
    postCourse()
    // postOfficial()
    // postCustom()
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
                  <OfficialOrder
                    setOfficialTotal={setOfficialTotal}
                    setOfficialOrder={setOfficialOrder}
                  />
                </div>
                <div className="checkout__custom-box">
                  <CustomOrder
                    setCustomTotal={setCustomTotal}
                    setCustomOrder={setCustomOrder}
                  />
                </div>
                <div className="checkout__course-box">
                  <CourseOrder
                    setCourseTotal={setCourseTotal}
                    setCourseOrder={setCourseOrder}
                  />
                </div>
              </div>
              <div className="checkout__order-box">
                <OrderDetail
                  officialTotal={officialTotal}
                  customTotal={customTotal}
                  courseTotal={courseTotal}
                  setAddress={setAddress}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Checkout
