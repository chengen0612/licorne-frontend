import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'

//最右邊的購物明細
import CheakList from './CheakList'

function MemberHomePage() {
  return (
    <>
      <div className="memberHomePage__rightCard">
        <div className="memberHomePage__topBox">
          <div className="memberHomePage__cartTitle">
            <h2>購物籃</h2>
            <div className="memberHomePage__cartBox"></div>
          </div>
          <CheakList />
        </div>
        <div className="memberHomePage__bottomBox">
          <div className="memberHomePage__makeTitle">
            <h2>您的組合紀錄</h2>
            <div className="memberHomePage__makeBox"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberHomePage
