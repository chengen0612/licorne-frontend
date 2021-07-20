import React from 'react'

import './style.css'

import OrderBtn from './OrderBtn'
import Course from './Course'
import Perfume from './Perfume'

function Order() {
  return (
    <>
      <div className="memberOrderPerfume__rightCard">
        <OrderBtn />
        {/* <Course /> */}
        <Perfume />
      </div>
    </>
  )
}

export default Order
