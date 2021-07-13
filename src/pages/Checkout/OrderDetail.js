import React from 'react'
import DeliveryMethod from './components/DeliveryMethod'
import PaymentMethod from './components/PaymentMethod'
import OrderAmount from './components/OrderAmount'

function OrderDetail() {
  return (
    <>
      <div className="checkout__order-box-top pl-4 pt-3 pb-3">
        <span className="checkout__order-box-title">訂單明細</span>
      </div>
      <div className="checkout__order-box-details">
        <DeliveryMethod />
        <PaymentMethod />
        <OrderAmount />
        <div className="d-flex justify-content-center pb-4">
          <button className="checkout__checkoutBtn">確認結帳</button>
        </div>
      </div>
    </>
  )
}

export default OrderDetail
