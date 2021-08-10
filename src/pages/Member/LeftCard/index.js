import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../config'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'

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
  const [values, setValues] = useState({
    member_profiles: '',
    member_account: '',
    member_name: '',
    nickname: '',
    member_birth: '',
    member_password: '',
    member_email: '',
    member_phone: '',
    member_address: '',
    member_receive: '',
    member_pic: '',
  })

  const history = useHistory()
  function logOut() {
    localStorage.clear()
    history.push('/login')
  }
  function logOutCheck() {
    swal({
      title: '確定要登出嗎？',
      buttons: true,
    }).then((logout) => {
      if (logout) {
        swal('登出成功！', {
          buttons: false,
          timer: 1200,
        })
        setTimeout(() => {
          logOut()
        }, 1200)
      }
    })
  }
  async function getUserFromServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/member/profile'
    const token = localStorage.getItem('jwt')
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
        Authorization: 'Bearer ' + token,
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('會員資訊：', data)
    setValues(data)
    // 設定資料

    // 如果從伺服器回傳的資料沒有id值
    // if (!data.id) {
    //   setUserDataIsExist(false)
    //   return
    // }
  }
  useEffect(() => {
    getUserFromServer()
  }, [])

  const [active, setActive] = useState(types[0].name)

  return (
    <>
      <div className="memberHomePage__leftCard">
        <div className="memberHomePage__photoBox">
          <img
            className="memberHomePage__photo"
            // src={imgPath + '/images/member/dog.png'}
            src={
              values.member_pic
                ? `http://localhost:6005/images/avatar/${values.member_pic}`
                : 'http://localhost:6005/images/avatar/default.jpg'
            }
            alt=""
          />
        </div>
        <div className="memberHomePage__textBox">
          <div className="memberHomePage__nickName">
            <h3>{values.member_name}</h3>
          </div>
          <div className="memberHomePage__account">
            <h3>{values.member_account}</h3>
          </div>
          <div className="memberHomePage__memberLevel">
            <h4>一般會員</h4>
          </div>
        </div>
        <div className="memberHomePage__menuBox">
          {types.map((item, index) => (
            <Link to={item.link} key={index}>
              <ButtonToggle
                className="memberHomePage__menuBtn"
                active={active === item.name}
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </ButtonToggle>
            </Link>
          ))}
          <button
            className="memberHomePage__signOut"
            onClick={() => {
              logOutCheck()
            }}
          >
            <h3>登出</h3>
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
