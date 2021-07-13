import React, { useState } from 'react'
import CheckoutRadioBox from './CheckoutRadio'
import { FiEdit } from 'react-icons/fi'

function OrderDetail() {
  const [delivery, setDelivery] = useState('')
  const deliveryList = ['指定地址', '店鋪自取']
  const [payment, setPayment] = useState('')
  const paymentList = ['信用卡', '貨到付款']
  return (
    <>
      <div className="checkout__order-box-top pl-4 pt-3 pb-3">
        <span className="checkout__order-box-title">訂單明細</span>
      </div>
      <div className="checkout__order-box-details">
        <div className="checkout__order-box-delivery pr-4 pl-4 pt-3 pb-4">
          <span className="checkout__order-box-delivery-title">運送方式</span>
          <div className="checkout__order-box-delivery-labels">
            {deliveryList.map((v, i) => {
              return (
                <CheckoutRadioBox
                  key={i}
                  value={v}
                  checkedValue={delivery}
                  setCheckedValue={setDelivery}
                />
              )
            })}
            {/* <label htmlFor="" className="checkout__order-box-delivery-address">
              <input className="radio" type="radio" name="delivery" />
              指定地址
            </label>
            <label htmlFor="" className="checkout__order-box-delivery-store">
              <input className="radio" type="radio" name="delivery" />
              店鋪自取
            </label> */}
          </div>
          <div className="checkout__order-box-delivery-edit-bg d-flex flex-column p-3 mt-2 mb-2">
            <div className="checkout__order-box-delivery-edit-wrapper d-flex justify-content-between">
              <span className="checkout__order-box-recipient">哭肉狗狗</span>
              <FiEdit className="feather-s" />
            </div>
            <span className="checkout__order-box-recipient-phone">
              (+886) 912 345 678
            </span>
            <span className="checkout__order-box-recipient-address">
              29850桃園市桃園區中正路100巷100號
            </span>
            <span className="checkout__order-box-buyer">訂購人：同收件人</span>
          </div>
        </div>
        <div className="checkout__order-box-payment pr-4 pl-4 pb-4">
          <span className="checkout__order-box-payment-title">付款方式</span>
          <div className="checkout__order-box-payment-labels">
            {paymentList.map((v, i) => {
              return (
                <CheckoutRadioBox
                  key={i}
                  value={v}
                  checkedValue={payment}
                  setCheckedValue={setPayment}
                />
              )
            })}
            {/* <label htmlFor="" className="checkout__order-box-payment-card">
              <input className="radio" type="radio" name="payment" />
              信用卡
            </label>
            <label htmlFor="" className="checkout__order-box-payment-cash pl-4">
              <input className="radio" type="radio" name="payment" />
              貨到付款
            </label> */}
          </div>
        </div>
        <div className="checkout__order-box-amount pr-4 pl-4 pb-4">
          <span className="checkout__order-box-amount-title">訂購金額</span>
          <div className="checkout__order-box-subtotal pt-2 pl-4 pr-4 pb-2">
            <span className="checkout__order-box-subtotal-text">商品總計</span>
            <span className="checkout__order-box-subtotal-price">
              NT$ 26,190
            </span>
          </div>
          <div className="checkout__order-box-delivery-fee pl-4 pr-4">
            <span className="checkout__order-box-delivery-fee-text">運費</span>
            <span className="checkout__order-box-delivery-fee-price">
              NT$ 0
            </span>
          </div>
          <hr className="checkout__order-box-divider" />
          <div className="checkout__order-box-total pl-4 pr-4">
            <span className="checkout__order-box-total-text">結帳金額：</span>
            <span className="checkout__order-box-total-price">NT$ 26,190</span>
          </div>
          <div className="d-flex justify-content-center p-4">
            <button className="checkout__checkoutBtn">確認結帳</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetail
