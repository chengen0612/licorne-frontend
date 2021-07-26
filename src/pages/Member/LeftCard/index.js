import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../config'

// styled-components套件
// 按鈕 CSS 樣式
const Button = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  margin: 20px 50px 0 50px;
  background-color: #efefef;
  border: 1px solid transparent;
  transition: ease 250ms;
  outline: none;
  font-size: 30px;
`
// 按鈕 active 樣式
const ButtonToggle = styled(Button)`
  ${({ active }) =>
    active &&
    `
    background-color: #223843;
    color: #ffffff;
  `}
`
// 按鈕內文字 & link
const types = [
  { name: '主頁', link: '/member' },
  { name: '會員資料', link: '/member/profile' },
  { name: '我的收藏', link: '/member/favorites' },
  { name: '訂單查詢', link: '/member/order' },
]

function MemberLeftCard() {
  const [active, setActive] = useState(types[0])
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
          {types.map((item) => (
            <Link to={item.link}>
              <ButtonToggle
                active={active === item.name}
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </ButtonToggle>
            </Link>
          ))}
          <button className="memberHomePage__signOut">
            <h3>登出</h3>
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
