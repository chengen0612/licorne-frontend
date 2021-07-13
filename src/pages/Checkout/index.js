import React from 'react'
import './style.scss'
import OfficialOrder from './components/OfficialOrder'
import CustomOrder from './components/CustomOrder'
import CourseOrder from './components/CourseOrder'
import OrderDetail from './components/OrderDetail'

function Checkout() {
  return (
    <div className="pageWrapper">
      <div className="checkout">
        <div className="checkout__text">
          <span className="checkout__text-title">購物籃</span>
          <a href="/" className="checkout__text-link">
            繼續購物
          </a>
        </div>
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
      </div>
    </div>
  )
}
export default Checkout
