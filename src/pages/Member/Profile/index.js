import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../config'

function Profile() {
  return (
    <>
      <div className="memberData__rightCard">
        <div className="memberData__leftSide">
          <div className="memberData__photoBox">
            <img
              className="memberData__photo"
              src={imgPath + '/images/member/dog.png'}
              alt=""
            />
          </div>
          <div className="memberData__introBox">
            <h3 className="memberData__intro">個人簡介</h3>
            <button className="memberData__introEditBtn">
              <FiEdit size={25} />
            </button>
          </div>
          <div>
            <textarea
              className="memberData__introContent"
              type="text"
              name="introContent"
              value="對香水充滿好奇心的可愛狗狗，尋找好吃的味道。"
              disabled
            ></textarea>
          </div>
        </div>
        <div className="memberData__rightSide">
          <div className="memberData__basicInfo">
            <div className="memberData__basicInfoBox">
              <h1 className="memberData__basicInfoTitle">基本資料</h1>
              <div className="memberData__account">
                <h3>帳號</h3>
                <input
                  className="memberData__input"
                  type="text"
                  name="account"
                  value="testaccount"
                  disabled
                />
              </div>
              <div className="memberData__name">
                <div className="memberData__editBox">
                  <h3>姓名</h3>
                  <button className="memberData__nameEditBtn editBtn">
                    <FiEdit size={25} />
                  </button>
                </div>
                <input
                  className="memberData__input"
                  type="text"
                  name="name"
                  value="哭肉狗狗"
                  disabled
                />
              </div>
              <div className="memberData__nickName">
                <div className="memberData__editBox">
                  <h3>暱稱</h3>
                  <button className="memberData__nickNameEditBtn editBtn">
                    <FiEdit size={25} />
                  </button>
                </div>
                <input
                  className="memberData__input"
                  type="text"
                  name="nickName"
                  value="kuro"
                  disabled
                />
              </div>
              <div className="memberData__bornDate">
                <div className="memberData__editBox">
                  <h3>出生日期</h3>
                  <button className="memberData__bornDateEditBtn editBtn">
                    <FiEdit size={25} />
                  </button>
                </div>
                <input
                  className="memberData__input"
                  type="date"
                  name="bornDate"
                  value="1989-01-01"
                  disabled
                />
              </div>
              <div className="memberData__gender">
                <div className="memberData__editBox">
                  <h3>性別</h3>
                  <button className="memberData__genderEditBtn editBtn">
                    <FiEdit size={25} />
                  </button>
                </div>
                <input
                  className="memberData__input"
                  type="text"
                  name="gender"
                  value="男"
                  disabled
                />
              </div>
            </div>
            <div className="memberData__basicInfoBox">
              <h1 className="memberData__contactTitle">聯絡資料</h1>
              <div className="memberData__email">
                <div className="memberData__editBox">
                  <h3>E-mail</h3>
                  <button className="memberData__emailEditBtn editBtn">
                    <FiEdit size={25} />
                  </button>
                </div>
                <input
                  className="memberData__input"
                  type="email"
                  name="email"
                  value="test@gmail.com"
                  disabled
                />
              </div>
              <div className="memberData__phone">
                <div className="memberData__editBox">
                  <h3>行動電話</h3>
                  <button className="memberData__phoneEditBtn editBtn">
                    <FiEdit size={25} />
                  </button>
                </div>
                <div>
                  <input
                    className="memberData__input"
                    type="text"
                    name="phone"
                    value="0912345678"
                    disabled
                  />
                </div>
              </div>
              <div className="memberData__contactAddress">
                <div className="memberData__editBox">
                  <h3>聯絡地址</h3>
                  <button className="memberData__contactAddressEditBtn editBtn">
                    <FiEdit size={25} />
                  </button>
                </div>
                <textarea
                  className="memberData__input"
                  type="text"
                  name="contactAddress"
                  value="桃園市桃園區中正路100巷100號101樓"
                  disabled
                />
              </div>
              <div className="memberData__shippingAddress">
                <div className="memberData__editBox">
                  <h3>收件地址</h3>
                  <button className="memberData__shippingAddressEditBtn editBtn">
                    <FiEdit size={25} />
                  </button>
                </div>
                <textarea
                  className="memberData__input"
                  type="text"
                  name="shippingAddress"
                  value="桃園市桃園區中正路100巷100號101樓"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
