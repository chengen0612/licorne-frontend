import React, { useState, useEffect } from 'react'

import './style.css'

import OrderBtn from './OrderBtn'
import Course from './Course'
import Perfume from './Perfume'

function Order() {
  const [rightCard, setRightCard] = useState('香水')
  return (
    <>
      <div className="memberOrderPerfume__rightCard">
        <OrderBtn setRightCard={setRightCard} rightCard={rightCard} />
        {rightCard === '香水' && <Perfume />}
        {rightCard === '課程' && <Course />}
      </div>
    </>
  )
}

export default Order
