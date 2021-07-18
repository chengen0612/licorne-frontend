import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../../../../config'

function MemberLeftCard() {
  return (
    <>
      <div className="memberFavoritesPerfume__leftCard">
        <div className="memberFavoritesPerfume__photoBox">
          <img
            className="memberFavoritesPerfume__photo"
            src={imgPath + '/images/member/dog.png'}
            alt=""
          />
          <div
            className="memberFavoritesPerfume__photoEditIcon"
            style={{ color: '#223843' }}
          >
            <button className="memberFavoritesPerfume__photoEditBtn">
              <FiEdit size={25} />
            </button>
          </div>
        </div>
        <div className="memberFavoritesPerfume__textBox">
          <div className="memberFavoritesPerfume__nickName">
            <h3>哭肉狗狗</h3>
          </div>
          <div className="memberFavoritesPerfume__account">
            <h3>testaccount</h3>
          </div>
          <div className="memberFavoritesPerfume__memberLevel">
            <h4>一般會員</h4>
          </div>
        </div>
        <div className="memberFavoritesPerfume__menuBox">
          <a href="/member">
            <button className="memberFavoritesPerfume__homePage memberFavoritesPerfume__menuBtn">
              <h3>主頁</h3>
            </button>
          </a>
          <a href="/member/data">
            <button className="memberFavoritesPerfume__data memberFavoritesPerfume__menuBtn">
              <h3>會員資料</h3>
            </button>
          </a>
          <a href="/member/favorites/perfume">
            <button className="memberFavoritesPerfume__favorites memberFavoritesPerfume__menuBtn">
              <h3>我的收藏</h3>
            </button>
          </a>
          <a href="/member/order/perfume">
            <button className="memberFavoritesPerfume__Order memberFavoritesPerfume__menuBtn">
              <h3>訂單查詢</h3>
            </button>
          </a>
          <button className="memberFavoritesPerfume__signOut memberFavoritesPerfume__menuBtn">
            <h3>登出</h3>
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
