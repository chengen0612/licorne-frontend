import React, { useState, useEffect } from 'react'

import './style.css'

import OrderBtn from './OrderBtn'
import Course from './Course'
import Perfume from './Perfume'

function Order() {
  const [rightCard, setRightCard] = useState('香水')

  // 暫時放空白功能來實現讀取動畫
  // 暫時放空白功能來實現讀取動畫
  // 暫時放空白功能來實現讀取動畫
  const [dataLoading, setDataLoading] = useState(false)
  function getOfficialProductFromServer() {
    setDataLoading(true)
  }
  useEffect(() => {
    getOfficialProductFromServer()
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [])
  // 暫時放空白功能來實現讀取動畫
  // 暫時放空白功能來實現讀取動畫
  // 暫時放空白功能來實現讀取動畫

  const loading = (
    <>
      <div className="d-flex justify-content-center memberData_loading">
        <div id="spinner-border" className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  const display = (
    <>
      <div className="memberOrderPerfume__rightCard">
        <OrderBtn setRightCard={setRightCard} rightCard={rightCard} />
        {rightCard === '香水' && <Perfume />}
        {rightCard === '課程' && <Course />}
      </div>
    </>
  )
  return <>{dataLoading ? loading : display}</>
}

export default Order
