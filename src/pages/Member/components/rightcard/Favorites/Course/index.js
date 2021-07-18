import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../../../../config'

function MemberFavorites() {
  return (
    <>
      <div className="memberFavorites__rightCard">
        <div className="memberFavorites__favoritesBtn">
          <button className="memberFavorites__perfumebtn favoritesBtn">
            香水
          </button>
          <button
            id="coursebtn"
            className="memberFavorites__coursebtn favoritesBtn"
          >
            課程
          </button>
        </div>
        <div className="memberFavorites__courseBox">
          <div className="memberFavorites__courseItem">
            <div className="memberFavorites__courseImage">
              <img
                className="memberFavorites__Image"
                src={imgPath + '/images/member/course_1.png'}
                alt=""
              />
            </div>
            <div className="memberFavorites__couresText">
              <h2 className="memberFavorites__couresTitle">
                LICORNE 手工香水製作一日體驗
              </h2>
              <p className="memberFavorites__couresInfo">
                香水就像一件隱形的衣服，低調卻明顯地表達自我風格」 LICORNE
                提供客製化香水服務，創作自己專屬的氣味。
                請於本活動預約，讓LICORNE 帶您製作獨具特色的個人香水！
              </p>
            </div>
            <div className="memberFavorites__delAndSignup">
              <input
                type="button"
                className="memberFavorites__delBtn"
                value="刪除"
              />
              <input
                type="button"
                className="memberFavorites__signUp signUp1"
                value="報名"
              />
            </div>
          </div>
          <hr className="memberFavorites__line" />
          <div className="memberFavorites__courseItem">
            <div className="memberFavorites__courseImage">
              <img
                className="memberFavorites__Image"
                src={imgPath + '/images/member/course_2.png'}
                alt=""
              />
            </div>
            <div className="memberFavorites__couresText">
              <h2 className="memberFavorites__couresTitle">
                LICORNE 手工香水製作一日體驗
              </h2>
              <p className="memberFavorites__couresInfo">
                香水就像一件隱形的衣服，低調卻明顯地表達自我風格」 LICORNE
                提供客製化香水服務，創作自己專屬的氣味。
                請於本活動預約，讓LICORNE 帶您製作獨具特色的個人香水！
              </p>
            </div>
            <div className="memberFavorites__delAndSignup">
              <input
                type="button"
                className="memberFavorites__delBtn"
                value="刪除"
              />
              <input
                type="button"
                className="memberFavorites__signUp signUp2"
                value="報名"
                disabled
              />
            </div>
          </div>
          <hr className="memberFavorites__line" />
          <div className="memberFavorites__courseItem">
            <div className="memberFavorites__courseImage">
              <img
                className="memberFavorites__Image"
                src={imgPath + '/images/member/course_3.png'}
                alt=""
              />
            </div>
            <div className="memberFavorites__couresText">
              <h2 className="memberFavorites__couresTitle">
                LICORNE 手工香水製作一日體驗
              </h2>
              <p className="memberFavorites__couresInfo">
                香水就像一件隱形的衣服，低調卻明顯地表達自我風格」 LICORNE
                提供客製化香水服務，創作自己專屬的氣味。
                請於本活動預約，讓LICORNE 帶您製作獨具特色的個人香水！
              </p>
            </div>
            <div className="memberFavorites__delAndSignup">
              <input
                type="button"
                className="memberFavorites__delBtn"
                value="刪除"
              />
              <input
                type="button"
                className="memberFavorites__signUp signUp3"
                value="報名"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberFavorites
