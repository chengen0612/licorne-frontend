import React from 'react'
import './style.scss'
import OfficialOrder from './OfficialOrder'
import CustomOrder from './CustomOrder'
import CourseOrder from './CourseOrder'
import OrderDetail from './OrderDetail'

function Checkout() {
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
            <a href="/" className="checkout__text-link">
              繼續購物
            </a>
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
