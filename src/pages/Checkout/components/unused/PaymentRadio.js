import React from 'react'

function PaymentRadio(props) {
  const { value, checkedValue, setCheckedValue } = props

  return (
    <>
      <input
        className="radio"
        type="radio"
        value={value}
        checked={checkedValue === value}
        onChange={(e) => {
          setCheckedValue(e.target.value)
        }}
      />
      <label className="checkout__order-box-payment-label"> {value}</label>
    </>
  )
}

export default PaymentRadio
