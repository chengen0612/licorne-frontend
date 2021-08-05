import React, { useState, useEffect } from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../config'
import UploadPreview from '../components/UploadImgPreview'
import swal from 'sweetalert'

function Profile(props) {
  // const userid = props.match.params.userid
  // console.log(userid)

  //const [user, setUser] = useState({})

  const [dataLoading, setDataLoading] = useState(false)

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
  function askUpdate() {
    swal({
      title: '確定要修改嗎？',
      icon: 'info',
      buttons: true,
      // dangerMode: true,
    }).then((Change) => {
      if (Change) {
        swal({
          title: '修改成功！',
          icon: 'success',
        })
        updateUserToSever()
      }
    })
  }
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
    console.log(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(values)
  }

  // const [userDataIsExist, setUserDataIsExist] = useState(true)

  async function getUserFromServer() {
    setDataLoading(true)
    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/member/profile'
    const jwtToken = localStorage.getItem('userId')
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: jwtToken,
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

  async function updateUserToSever() {
    setDataLoading(true)
    const userData = { values }

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/member/profile'
    // 注意資料格式要設定，伺服器才知道是json格式
    const jwtToken = localStorage.getItem('userId')
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: jwtToken,
      }),
    })

    console.log(JSON.stringify(userData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getUserFromServer()
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [])

  const loading = (
    <>
      <div className="d-flex justify-content-center memberData_loading">
        <div id="spinner-border" className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <form onSubmit={handleSubmit}>
        <div className="memberData__rightCard">
          <div className="memberData__leftSide">
            <div className="memberData__photoBox">
              <img
                className="memberData__photo"
                // src={imgPath + '/images/member/dog.png'}
                src={
                  values.member_pic
                    ? `http://localhost:6005/images/avatar/${values.member_pic}`
                    : 'http://localhost:6005/images/avatar/default.jpg'
                }
                alt=""
              />
              <UploadPreview />
            </div>
            <div className="memberData__introBox">
              <h3 className="memberData__intro">個人簡介</h3>
            </div>
            <div>
              <textarea
                className="memberData__introContent"
                type="text"
                name="member_profiles"
                value={values.member_profiles}
                onChange={handleChange}
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
                    name="member_account"
                    value={values.member_account}
                    disabled
                  />
                </div>
                <div className="memberData__password">
                  <div className="memberData__editBox">
                    <h3>密碼</h3>
                    <button className="memberData__passwordEditBtn editBtn">
                      <FiEdit size={25} />
                    </button>
                  </div>
                  <input
                    className="memberData__input"
                    type="text"
                    name="member_password"
                    value={values.member_password}
                    onChange={handleChange}
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
                    name="member_name"
                    value={values.member_name}
                    onChange={handleChange}
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
                    name="nickname"
                    value={values.nickname}
                    onChange={handleChange}
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
                    className="memberData__birth"
                    type="date"
                    name="member_birth"
                    value={values.member_birth}
                    onChange={handleChange}
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
                    name="member_email"
                    value={values.member_email}
                    onChange={handleChange}
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
                      name="member_phone"
                      value={values.member_phone}
                      onChange={handleChange}
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
                    name="member_address"
                    value={values.member_address}
                    onChange={handleChange}
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
                    name="member_receive"
                    value={values.member_receive}
                    onChange={handleChange}
                  />
                </div>
                <button
                  onClick={() => {
                    askUpdate()
                  }}
                  className="memberData__updateBtn"
                >
                  儲存
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )

  return <>{dataLoading ? loading : display}</>
}

export default Profile
