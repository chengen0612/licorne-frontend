import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../../../../config'

function MemberLeftCard() {
  return (
    <>
      <div className="memberOrderPerfume__leftCard">
        <div className="memberOrderPerfume__photoBox">
          <img
            className="memberOrderPerfume__photo"
            src={imgPath + '/images/member/dog.png'}
            alt=""
          />
          <div
            className="memberOrderPerfume__photoEditIcon"
            style={{ color: '#223843' }}
          >
            <button className="memberOrderPerfume__photoEditBtn">
              <FiEdit size={25} />
            </button>
          </div>
        </div>
        <div className="memberOrderPerfume__textBox">
          <div className="memberOrderPerfume__nickName">
            <h3>哭肉狗狗</h3>
          </div>
          <div className="memberOrderPerfume__account">
            <h3>testaccount</h3>
          </div>
          <div className="memberOrderPerfume__memberLevel">
            <h4>一般會員</h4>
          </div>
        </div>
        <div className="memberOrderPerfume__menuBox">
          <a href="/member">
            <button className="memberOrderPerfume__homePage memberOrderPerfume__menuBtn">
              <h3>主頁</h3>
            </button>
          </a>
          <a href="/member/data">
            <button className="memberOrderPerfume__data memberOrderPerfume__menuBtn">
              <h3>會員資料</h3>
            </button>
          </a>
          <a href="/member/favorites/perfume">
            <button className="memberOrderPerfume__favorites memberOrderPerfume__menuBtn">
              <h3>我的收藏</h3>
            </button>
          </a>
          <a href="/member/order/perfume">
            <button className="memberOrderPerfume__Order memberOrderPerfume__menuBtn">
              <h3>訂單查詢</h3>
            </button>
          </a>
          <button className="memberOrderPerfume__signOut memberOrderPerfume__menuBtn">
            <h3>登出</h3>
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
