import React from 'react'

function DeliveryRadio(props) {
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
      <label className="checkout__order-box-delivery-label"> {value}</label>
    </>
  )
}

export default DeliveryRadio
