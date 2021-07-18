import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import MemberOrderCourseItem from './components/orderItem'
import MemberOrderCourseDetail from './components/orderDetail'

function MemberLeftCard() {
  return (
    <>
      <div className="memberOrderCourse__rightCard">
        <div className="memberOrderCourse__orderBtn">
          <a href="/member/order/perfume">
            <button className="memberOrderCourse__perfumebtn orderBtn">
              香水
            </button>
          </a>
          <a href="/member/order/course">
            <button
              id="coursebtn"
              className="memberOrderCourse__coursebtn orderBtn"
            >
              課程
            </button>
          </a>
        </div>
        <MemberOrderCourseDetail />
      </div>
    </>
  )
}

export default MemberLeftCard
