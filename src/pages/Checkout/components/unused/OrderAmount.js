import React from 'react'

function OrderAmount() {
  return (
    <>
      <div className="checkout__order-box-amount pr-4 pl-4 pb-4">
        <span className="checkout__order-box-amount-title">訂購金額</span>
        <div className="checkout__order-box-subtotal pt-2 pl-4 pr-4 pb-2">
          <span className="checkout__order-box-subtotal-text">商品總計</span>
          <span className="checkout__order-box-subtotal-price">NT$ 26,190</span>
        </div>
        <div className="checkout__order-box-delivery-fee pl-4 pr-4">
          <span className="checkout__order-box-delivery-fee-text">運費</span>
          <span className="checkout__order-box-delivery-fee-price">NT$ 0</span>
        </div>
        <hr className="checkout__order-box-divider" />
        <div className="checkout__order-box-total pl-4 pr-4">
          <span className="checkout__order-box-total-text">結帳金額：</span>
          <span className="checkout__order-box-total-price">NT$ 26,190</span>
        </div>
      </div>
      <div className="d-flex justify-content-center pb-4">
        <button className="checkout__checkoutBtn">確認結帳</button>
      </div>
    </>
  )
}

export default OrderAmount
