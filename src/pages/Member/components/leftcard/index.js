import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../../config'

function MemberLeftCard() {
  return (
    <>
      <div className="member__leftCard">
        <div className="member__photoBox">
          <img
            className="member__photo"
            src={imgPath + '/images/member/dog.png'}
            alt=""
          />
          <div className="member__photoEditIcon" style={{ color: '#223843' }}>
            <button className="member__photoEditBtn">
              <FiEdit size={25} />
            </button>
          </div>
        </div>
        <div className="member__textBox">
          <div className="member__nickName">
            <h3>哭肉狗狗</h3>
          </div>
          <div className="member__account">
            <h3>testaccount</h3>
          </div>
          <div className="member__memberLevel">
            <h4>一般會員</h4>
          </div>
        </div>
        <div className="member__menuBox">
          <button className="member__homePage member__menuBtn">
            <h3>主頁</h3>
          </button>
          <button className="member__data member__menuBtn">
            <h3>會員資料</h3>
          </button>
          <button className="member__favorites member__menuBtn">
            <h3>我的收藏</h3>
          </button>
          <button className="member__Order member__menuBtn">
            <h3>訂單查詢</h3>
          </button>
          <button className="member__signOut member__menuBtn">
            <h3>登出</h3>
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
