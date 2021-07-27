import React, { useState, useEffect } from 'react'
import './style.scss'
// import { imgPath } from '../../config'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import OfficialOrder from './OfficialOrder'
import CustomOrder from './CustomOrder'
import CourseOrder from './CourseOrder'
import OrderDetail from './OrderDetail'
import CreditCard from './components/CreditCard'

function Checkout(props) {
  const [officialTotal, setOfficialTotal] = useState(0)
  const [customTotal, setCustomTotal] = useState(0)
  const [courseTotal, setCourseTotal] = useState(0)

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
                  <OfficialOrder
                    officialTotal={officialTotal}
                    setOfficialTotal={setOfficialTotal}
                  />
                </div>
                <div className="checkout__custom-box">
                  <CustomOrder
                    customTotal={customTotal}
                    setCustomTotal={setCustomTotal}
                  />
                </div>
                <div className="checkout__course-box">
                  <CourseOrder
                    courseTotal={courseTotal}
                    setCourseTotal={setCourseTotal}
                  />
                </div>
              </div>
              <div className="checkout__order-box">
                <OrderDetail
                  officialTotal={officialTotal}
                  customTotal={customTotal}
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
