import React from 'react'
import './style.css'
import imgURL from './imgs/LICORNE_logo.svg'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__logoBox">
          <img className="footer__logo" src={imgURL} alt="" />
        </div>
        <div className="footer__listBox">
          <ul className="footer__topList">
            <li>
              <a href="/#">關於我們</a>
            </li>
            <li>
              <a href="/#">客製香水</a>
            </li>
            <li>
              <a href="/#">課程體驗</a>
            </li>
            <li>
              <a href="/#">人氣熱銷</a>
            </li>
          </ul>
          <ul className="footer__bottomList">
            <li>
              <a href="/#">官方經典</a>
            </li>
            <li>
              <a href="/#">專屬香氣</a>
            </li>
            <li>
              <a href="/#">實體店舖</a>
            </li>
          </ul>
        </div>
        <div className="footer__inputBox">
          <input
            className="footer__subscribe"
            type="text"
            placeholder="輸入您的電子信箱"
          />
          <input
            className="footer__subButton"
            type="submit"
            value="訂閱電子報"
          />
        </div>
        <div className="footer__Text">
          <p className="footer__copyRight">
            Copyright © Licorne Co.,2021.All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
