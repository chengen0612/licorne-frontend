import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import MemberOrderPerfumeItem from './components/orderItem'
import MemberOrderPerfumeDetail from './components/orderDetail'

function MemberLeftCard() {
  return (
    <>
      <div className="memberOrderPerfume__rightCard">
        <div className="memberOrderPerfume__orderBtn">
          <a href="/member/order/perfume">
            <button
              id="perfumebtn"
              className="memberOrderPerfume__perfumebtn orderBtn"
            >
              香水
            </button>
          </a>
          <a href="/member/order/course">
            <button className="memberOrderPerfume__coursebtn orderBtn">
              課程
            </button>
          </a>
        </div>
        <MemberOrderPerfumeItem />
        {/* <MemberOrderPerfumeDetail /> */}
      </div>
    </>
  )
}

export default MemberLeftCard