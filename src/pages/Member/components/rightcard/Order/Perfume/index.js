import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import MemberOrderPerfumeItem from './components/orderItem'
import MemberOrderPerfumeDetail from './components/orderDetail'

function MemberLeftCard() {
  return (
    <>
      <div className="memberOrder__rightCard">
        <div className="memberOrder__orderBtn">
          <button className="memberOrder__perfumebtn orderBtn">香水</button>
          <button className="memberOrder__coursebtn orderBtn">課程</button>
        </div>
        <MemberOrderPerfumeItem />
        <MemberOrderPerfumeDetail />
      </div>
    </>
  )
}

export default MemberLeftCard
