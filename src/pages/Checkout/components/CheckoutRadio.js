import React from 'react'

function CheckoutRadio(props) {
  const { value, checkedValue, setCheckedValue } = props

  return (
    <>
      <label>
        <input
          className="radio"
          type="radio"
          value={value}
          checked={checkedValue === value}
          onChange={(e) => {
            setCheckedValue(e.target.value)
          }}
        />
        {value}
      </label>
    </>
  )
}

export default CheckoutRadio
