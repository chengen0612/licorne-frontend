import React, { useState } from 'react'
import './style.scss'
import axios from 'axios'
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
  //客製化訂單
  const [customOrder, setCustomOrder] = useState({})
  //課程訂單
  const [courseOrder, setCourseOrder] = useState({})
  //訂單地址
  const [address, setAddress] = useState('')

  async function postOfficial(token) {
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
    params.headers = { Authorization: 'Bearer ' + token }
    const response = await axios.post(url, params)
  }

  async function postCustom(token) {
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
    params.headers = { Authorization: 'Bearer ' + token }
    const response = await axios.post(url, params)
  }

  async function postCourse(token) {
    let url = `http://localhost:6005/courseorder`
    let params = courseOrder
    params.headers = { Authorization: 'Bearer ' + token }
    const response = await axios.post(url, params)
  }

  const handleSubmit = () => {
    const token = localStorage.getItem('jwt')
    postCourse(token)
    postOfficial(token)
    postCustom(token)
  }

  return (
    <>
      <div className="pageWrapper">
        <div className="checkout">
          <div className="checkout__text">
            <span className="checkout__text-title">購物籃</span>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
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
                  handleSubmit={handleSubmit}
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
