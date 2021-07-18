import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../../../../config'

function MemberLeftCard() {
  return (
    <>
      <div className="memberOrderCourse__leftCard">
        <div className="memberOrderCourse__photoBox">
          <img
            className="memberOrderCourse__photo"
            src={imgPath + '/images/member/dog.png'}
            alt=""
          />
          <div
            className="memberOrderCourse__photoEditIcon"
            style={{ color: '#223843' }}
          >
            <button className="memberOrderCourse__photoEditBtn">
              <FiEdit size={25} />
            </button>
          </div>
        </div>
        <div className="memberOrderCourse__textBox">
          <div className="memberOrderCourse__nickName">
            <h3>哭肉狗狗</h3>
          </div>
          <div className="memberOrderCourse__account">
            <h3>testaccount</h3>
          </div>
          <div className="memberOrderCourse__memberLevel">
            <h4>一般會員</h4>
          </div>
        </div>
        <div className="memberOrderCourse__menuBox">
          <a href="/member">
            <button className="memberOrderCourse__homePage memberOrderCourse__menuBtn">
              <h3>主頁</h3>
            </button>
          </a>
          <a href="/member/data">
            <button className="memberOrderCourse__data memberOrderCourse__menuBtn">
              <h3>會員資料</h3>
            </button>
          </a>
          <a href="/member/favorites/perfume">
            <button className="memberOrderCourse__favorites memberOrderCourse__menuBtn">
              <h3>我的收藏</h3>
            </button>
          </a>
          <a href="/member/order/perfume">
            <button className="memberOrderCourse__Order memberOrderCourse__menuBtn">
              <h3>訂單查詢</h3>
            </button>
          </a>
          <button className="memberOrderCourse__signOut memberOrderCourse__menuBtn">
            <h3>登出</h3>
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
