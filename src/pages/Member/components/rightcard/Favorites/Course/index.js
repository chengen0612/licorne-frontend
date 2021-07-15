import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'

function MemberFavorites() {
  return (
    <>
      <div className="memberFavorites__rightCard">
        <div className="memberFavorites__favoritesBtn">
          <button className="memberFavorites__perfumebtn favoritesBtn">
            香水
          </button>
          <button className="memberFavorites__coursebtn favoritesBtn">
            課程
          </button>
        </div>
        <div className="memberFavorites__perfumeBox">
          <div className="memberFavorites__perfumeLeftBox">
            <div className="memberFavorites__perfumeLeftTop perfumeLeftItem"></div>
            <div className="memberFavorites__perfumeLeftMiddle perfumeLeftItem"></div>
            <div className="memberFavorites__perfumeLeftBottom perfumeLeftItem"></div>
          </div>
          <div className="memberFavorites__perfumeRightBox">
            <div className="memberFavorites__perfumeRightTop perfumeRightItem"></div>
            <div className="memberFavorites__perfumeRightMiddle perfumeRightItem"></div>
            <div className="memberFavorites__perfumeRightBottom perfumeRightItem"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberFavorites
