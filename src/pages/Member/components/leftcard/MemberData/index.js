import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../../../config'

function MemberLeftCard() {
  return (
    <>
      <div className="memberData__leftCard">
        <div className="memberData__photoBox">
          <img
            className="memberData__bigPhoto"
            src={imgPath + '/images/member/dog.png'}
            alt=""
          />
          <div
            className="memberData__photoEditIcon"
            style={{ color: '#223843' }}
          >
            <button className="memberData__photoEditBtn">
              <FiEdit size={25} />
            </button>
          </div>
        </div>
        <div className="memberData__textBox">
          <div className="memberData__nickName">
            <h3>哭肉狗狗</h3>
          </div>
          <div className="memberData__account">
            <h3>testaccount</h3>
          </div>
          <div className="memberData__memberLevel">
            <h4>一般會員</h4>
          </div>
        </div>
        <div className="memberData__menuBox">
          <a href="/member">
            <button className="memberData__homePage memberData__menuBtn">
              <h3>主頁</h3>
            </button>
          </a>
          <a href="/member/data">
            <button className="memberData__data memberData__menuBtn">
              <h3>會員資料</h3>
            </button>
          </a>
          <a href="/member/favorites/perfume">
            <button className="memberData__favorites memberData__menuBtn">
              <h3>我的收藏</h3>
            </button>
          </a>
          <a href="/member/order/perfume">
            <button className="memberData__Order memberData__menuBtn">
              <h3>訂單查詢</h3>
            </button>
          </a>
          <button className="memberData__signOut memberData__menuBtn">
            <h3>登出</h3>
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
