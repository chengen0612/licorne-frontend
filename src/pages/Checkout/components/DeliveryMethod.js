import React, { useState } from 'react'
import CheckoutRadio from './CheckoutRadio'
import { FiEdit } from 'react-icons/fi'

function DeliveryMethod() {
   const [delivery, setDelivery] = useState('')
   const deliveryList = ['指定地址', '店鋪自取']
  return (
    <div className="checkout__order-box-delivery pr-4 pl-4 pt-3 pb-4">
      <span className="checkout__order-box-delivery-title">運送方式</span>
      <div className="checkout__order-box-delivery-labels">
        {deliveryList.map((v, i) => {
          return (
            <CheckoutRadio
              key={i}
              value={v}
              checkedValue={delivery}
              setCheckedValue={setDelivery}
            />
          )
        })}
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
  )
}

export default DeliveryMethod
