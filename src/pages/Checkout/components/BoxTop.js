import React from 'react'

function BoxTop() {
  return (
    <>
      <div className="checkout__official-box-top pl-4 pt-3 pb-2">
        <label className="checkout__official-box-title">
          <input
            className="checkout__official-box-checkbox-all"
            type="checkbox"
          />
          官方商品 <span>(3)</span>
        </label>
      </div>
    </>
  )
}

export default BoxTop
