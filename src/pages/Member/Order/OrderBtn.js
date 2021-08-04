import React, { useState, useEffect } from 'react'

import './style.css'
import { FiEdit } from 'react-icons/fi'

function OrderBtn(props) {
  const { rightCard, setRightCard } = props
  return (
    <>
      <div className="memberFavorites__favoritesBtn">
        <button
          onClick={() => {
            setRightCard('香水')
          }}
          id={rightCard === '香水' ? 'orderActive' : ''}
          className="memberFavorites__perfumebtn favoritesBtn"
        >
          香水
        </button>
        <button
          onClick={() => {
            setRightCard('課程')
          }}
          id={rightCard === '課程' ? 'orderActive' : ''}
          className="memberFavorites__coursebtn favoritesBtn"
        >
          課程
        </button>
      </div>
    </>
  )
}

export default OrderBtn
