import React, { useState, useEffect } from 'react'

function Materialfilter(props) {
  const { name_zh, searchList, setSearchList, handleChangeBymaterial } = props
  return (
    <>
      <label className="checkbox-label d-flex mt-2 align-items-center">
        <input
          className="product__checkbox"
          type="checkbox"
          value={name_zh}
          checked={searchList.includes(name_zh)}
          onChange={handleChangeBymaterial}
        />
        <span className="product__checkbox__name">{name_zh}</span>
      </label>
    </>
  )
}

export default Materialfilter
