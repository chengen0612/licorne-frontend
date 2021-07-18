import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../../../../config'

function MemberLeftCard() {
  return (
    <>
      <div className="memberFavoritesCourse__leftCard">
        <div className="memberFavoritesCourse__photoBox">
          <img
            className="memberFavoritesCourse__photo"
            src={imgPath + '/images/member/dog.png'}
            alt=""
          />
          <div
            className="memberFavoritesCourse__photoEditIcon"
            style={{ color: '#223843' }}
          >
            <button className="memberFavoritesCourse__photoEditBtn">
              <FiEdit size={25} />
            </button>
          </div>
        </div>
        <div className="memberFavoritesCourse__textBox">
          <div className="memberFavoritesCourse__nickName">
            <h3>哭肉狗狗</h3>
          </div>
          <div className="memberFavoritesCourse__account">
            <h3>testaccount</h3>
          </div>
          <div className="memberFavoritesCourse__memberLevel">
            <h4>一般會員</h4>
          </div>
        </div>
        <div className="memberFavoritesCourse__menuBox">
          <a href="/member">
            <button className="memberFavoritesCourse__homePage memberFavoritesCourse__menuBtn">
              <h3>主頁</h3>
            </button>
          </a>
          <a href="/member/data">
            <button className="memberFavoritesCourse__data memberFavoritesCourse__menuBtn">
              <h3>會員資料</h3>
            </button>
          </a>
          <a href="/member/favorites/perfume">
            <button className="memberFavoritesCourse__favorites memberFavoritesCourse__menuBtn">
              <h3>我的收藏</h3>
            </button>
          </a>
          <a href="/member/order/perfume">
            <button className="memberFavoritesCourse__Order memberFavoritesCourse__menuBtn">
              <h3>訂單查詢</h3>
            </button>
          </a>
          <button className="memberFavoritesCourse__signOut memberFavoritesCourse__menuBtn">
            <h3>登出</h3>
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
