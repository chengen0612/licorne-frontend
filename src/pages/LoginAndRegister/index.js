// import { form } from 'pumpify'
import React from 'react'
import { useState, useEffect } from 'react'
import useForm from './useForm'
import useFormLogin from './useFormLogin'
import validate from './validateInfo'
import validateLogin from './validateInfoLogin'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import './style.css'

// 密碼顯示/隱藏 icon
const eyeOn = <FiEye size={25} />
const eyeOff = <FiEyeOff size={25} />

function LoginAndRegister() {
  const { handleChange, handleSubmit, values, errors } = useForm(validate)
  const { handleLoginChange, handleLoginSubmit, loginValues, loginErrors } =
    useFormLogin(validateLogin)
  // 註冊密碼顯示/隱藏
  const [regPasswordShown, setRegPasswordShown] = useState(false)
  const regTogglePasswordVisiblity = () => {
    setRegPasswordShown(regPasswordShown ? false : true)
  }
  // 登入密碼顯示/隱藏
  const [loginPasswordShown, setLoginPasswordShown] = useState(false)
  const loginTogglePasswordVisiblity = () => {
    setLoginPasswordShown(loginPasswordShown ? false : true)
  }
  //登入功能

  // 註冊功能
  async function addUserToSever() {
    if (values.phoneReg === '') return
    if (values.emailReg === '') return
    if (values.passwordReg === '') return
    if (values.passwordReg.length < 6) return
    // console.log(values)

    const newData = { values }
    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/loginAndRegister/register'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
  }

  return (
    <>
      <div className="loginAndRegister">
        <div className="loginAndRegister__card">
          <form className="loginAndRegister__register" onSubmit={handleSubmit}>
            <div className="loginAndRegister__leftBox">
              <h1 className="loginAndRegister__leftTitle">新會員註冊</h1>

              <input
                className="loginAndRegister__leftPhone leftInput"
                type="text"
                name="phoneReg"
                placeholder="請輸入您的手機號碼"
                value={values.phoneReg}
                onChange={handleChange}
              />
              <div className="loginAndRegister__errorBox">
                {errors.phoneReg && <p>{errors.phoneReg}</p>}
              </div>
              <input
                className="loginAndRegister__leftEmail leftInput"
                type="email"
                name="emailReg"
                placeholder="請輸入您的電子信箱"
                value={values.emailReg}
                onChange={handleChange}
              />
              <div className="loginAndRegister__errorBox">
                {errors.emailReg && <p>{errors.emailReg}</p>}
              </div>
              <div className="loginAndRegister__passwordBox">
                <input
                  className="loginAndRegister__leftPassword leftInput"
                  type={regPasswordShown ? 'text' : 'password'}
                  name="passwordReg"
                  placeholder="請輸入您的密碼"
                  value={values.passwordReg}
                  onChange={handleChange}
                />
                <div className="loginAndRegister__errorBox">
                  {errors.passwordReg && <p>{errors.passwordReg}</p>}
                </div>
                <button type="button" className="loginAndRegister__regEyeBtn">
                  <i onClick={regTogglePasswordVisiblity}>
                    {regPasswordShown ? eyeOff : eyeOn}
                  </i>
                </button>
              </div>
              <button
                type="submit"
                onClick={() => {
                  addUserToSever()
                }}
                className="loginAndRegister__leftButton"
              >
                建立帳戶
              </button>
            </div>
          </form>
          <form
            className="loginAndRegister__login"
            onSubmit={handleLoginSubmit}
          >
            <div className="loginAndRegister__rightBox">
              <h1 className="loginAndRegister__rightTitle">會員登入</h1>
              <input
                className="loginAndRegister__rightPhone rightInput"
                type="text"
                name="loginPhone"
                value={loginValues.loginPhone}
                placeholder="請輸入您的手機號碼"
                onChange={handleLoginChange}
              />
              <div className="loginAndRegister__loginErrorBox">
                {loginErrors.loginPhone && <p>{loginErrors.loginPhone}</p>}
              </div>
              <div className="loginAndRegister__passwordBox">
                <input
                  className="loginAndRegister__rightPassword rightInput"
                  type={loginPasswordShown ? 'text' : 'password'}
                  name="loginPassword"
                  value={loginValues.loginPassword}
                  placeholder="請輸入您的密碼"
                  onChange={handleLoginChange}
                />
                <div className="loginAndRegister__loginErrorBox">
                  {loginErrors.loginPassword && (
                    <p>{loginErrors.loginPassword}</p>
                  )}
                </div>
                <button type="button" className="loginAndRegister__loginEyeBtn">
                  <i onClick={loginTogglePasswordVisiblity}>
                    {loginPasswordShown ? eyeOff : eyeOn}
                  </i>
                </button>
              </div>
              <div className="loginAndRegister__forgetPassword">
                <a href="/#">忘記密碼</a>
              </div>
              <button className="loginAndRegister__rightButton">登入</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginAndRegister
