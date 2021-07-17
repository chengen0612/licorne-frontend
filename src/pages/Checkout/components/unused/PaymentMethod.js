import React, { useState } from 'react'

function PaymentMethod() {
  return (
    <div className="checkout__order-box-payment pr-4 pl-4 pb-4">
      <span className="checkout__order-box-payment-title">付款方式</span>
      <div className="checkout__order-box-payment-labels">
        <label className="checkout__order-box-payment-card">
          <input className="radio" type="radio" name="payment" />
          信用卡
        </label>
        <label className="checkout__order-box-payment-cash pl-4">
          <input className="radio" type="radio" name="payment" />
          貨到付款
        </label>
      </div>
    </div>
  )
}

export default PaymentMethod
