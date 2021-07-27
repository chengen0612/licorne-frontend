import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../config'

function MemberLeftCard() {
  return (
    <>
      <div className="memberHomePage__leftCard">
        <div className="memberHomePage__photoBox">
          <img
            className="memberHomePage__photo"
            src={imgPath + '/images/member/dog.png'}
            alt=""
          />
          <div
            className="memberHomePage__photoEditIcon"
            style={{ color: '#223843' }}
          >
            <button className="memberHomePage__photoEditBtn">
              <FiEdit size={25} />
            </button>
          </div>
        </div>
        <div className="memberHomePage__textBox">
          <div className="memberHomePage__nickName">
            <h3>哭肉狗狗</h3>
          </div>
          <div className="memberHomePage__account">
            <h3>testaccount</h3>
          </div>
          <div className="memberHomePage__memberLevel">
            <h4>一般會員</h4>
          </div>
        </div>
        <div className="memberHomePage__menuBox">
          <Link to="/member">
            <button className="memberHomePage__homePage memberHomePage__menuBtn">
              <h3>主頁</h3>
            </button>
          </Link>
          <Link to="/member/profile">
            <button className="memberHomePage__data memberHomePage__menuBtn">
              <h3>會員資料</h3>
            </button>
          </Link>
          {/* <Link to="/member/favorites/perfume"> */}
          <Link to="/member/favorites">
            <button className="memberHomePage__favorites memberHomePage__menuBtn">
              <h3>我的收藏</h3>
            </button>
          </Link>
          {/* <Link to="/member/order/perfume"> */}
          <Link to="/member/order">
            <button className="memberHomePage__Order memberHomePage__menuBtn">
              <h3>訂單查詢</h3>
            </button>
          </Link>
          <button className="memberHomePage__signOut memberHomePage__menuBtn">
            <h3>登出</h3>
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
