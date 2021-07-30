import React from 'react'
import { useState } from 'react'

function DeliveryRadio({ checkedValue, setCheckedValue, deliveryMethod }) {
  return deliveryMethod.map((value, index) => {
    return (
      <>
        <React.Fragment key={index}>
          <input
            className="radio"
            type="radio"
            value={value}
            checked={checkedValue === value}
            onChange={(e) => {
              setCheckedValue(e.target.value)
              console.log('current delivery method', e.target.value)
            }}
          />
          <label className="checkout__order-box-delivery-label">{value}</label>
        </React.Fragment>
      </>
    )
  })
}

export default DeliveryRadio
