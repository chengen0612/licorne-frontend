import React, { useState } from 'react'
import CheckoutRadio from './CheckoutRadio'

function PaymentMethod() {
  const [payment, setPayment] = useState('')
  const paymentList = ['信用卡', '貨到付款']
  return (
    <div className="checkout__order-box-payment pr-4 pl-4 pb-4">
      <span className="checkout__order-box-payment-title">付款方式</span>
      <div className="checkout__order-box-payment-labels">
        {paymentList.map((v, i) => {
          return (
            <CheckoutRadio
              key={i}
              value={v}
              checkedValue={payment}
              setCheckedValue={setPayment}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PaymentMethod
