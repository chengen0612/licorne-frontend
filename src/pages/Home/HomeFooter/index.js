import React from 'react'
import { Link } from 'react-router-dom'
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
              <Link to="/">關於我們</Link>
            </li>
            <li>
              <Link to="/custom/entrance">客製香水</Link>
            </li>
            <li>
              <Link to="/course">課程體驗</Link>
            </li>
            <li>
              <Link to="/bestseller">人氣熱銷</Link>
            </li>
          </ul>
          <ul className="footer__bottomList">
            <li>
              <Link to="/official">官方經典</Link>
            </li>
            <li>
              <Link to="/">專屬香氣</Link>
            </li>
            <li>
              <Link to="/">實體店舖</Link>
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
