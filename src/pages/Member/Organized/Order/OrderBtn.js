import React from 'react'

import './style.css'
import { FiEdit } from 'react-icons/fi'

function OrderBtn() {
  return (
    <>
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
    </>
  )
}

export default OrderBtn
