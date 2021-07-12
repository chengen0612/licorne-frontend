import { from } from 'pumpify'
import React from 'react'
import './style.css'

function LoginAndRegister() {
  return (
    <>
      <div className="loginAndRegister">
        <div className="loginAndRegister__card">
          <form className="loginAndRegister__register">
            <div className="loginAndRegister__leftBox">
              <h1 className="loginAndRegister__leftTitle">新會員註冊</h1>
              <input
                className="loginAndRegister__leftPhone leftInput"
                type="text"
                name="registerPhoneNumber"
                placeholder="請輸入您的手機號碼"
                required
              />
              <input
                className="loginAndRegister__leftEmail leftInput"
                type="email"
                name="registerEmail"
                placeholder="請輸入您的電子信箱"
                required
              />
              <div className="loginAndRegister__passwordBox">
                <input
                  className="loginAndRegister__leftPassword leftInput"
                  type="password"
                  name="registerPassword"
                  placeholder="請輸入您的密碼"
                  required
                />
                <button className="loginAndRegister__eyeBtn">
                  <img
                    src="http://localhost:3000/images/login/eye-off.svg"
                    alt=""
                  />
                </button>
              </div>
              <button type="submit" className="loginAndRegister__leftButton">
                建立帳戶
              </button>
            </div>
          </form>
          <form className="loginAndRegister__login">
            <div className="loginAndRegister__rightBox">
              <h1 className="loginAndRegister__rightTitle">會員登入</h1>
              <input
                className="loginAndRegister__rightPhone rightInput"
                type="text"
                name="loginPhoneNumber"
                placeholder="請輸入您的手機號碼"
                required
              />
              <div className="loginAndRegister__passwordBox">
                <input
                  className="loginAndRegister__rightPassword rightInput"
                  type="loginPassword"
                  placeholder="請輸入您的密碼"
                  required
                />
                <button className="loginAndRegister__eyeBtn">
                  <img
                    src="http://localhost:3000/images/login/eye-off.svg"
                    alt=""
                  />
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
