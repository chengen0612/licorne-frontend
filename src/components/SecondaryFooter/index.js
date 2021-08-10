import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import imgURL from './imgs/LICORNE_logo.svg'
import {
  FiFacebook,
  FiInstagram,
  FiMessageSquare,
  FiArrowUpCircle,
} from 'react-icons/fi'

function SecondaryFooter() {
  return (
    <>
      <footer className="secondaryFooter__style">
        <div className="secondaryFooter__logoBox">
          <Link to="/">
            <img className="secondaryFooter__logo" src={imgURL} alt="" />
          </Link>
        </div>
        <div className="secondaryFooter__listBox">
          <ul className="secondaryFooter__topList">
            <li>
              <Link to="/">關於我們</Link>
            </li>
            <li>
              <Link to="/custom/entrance">客製香水</Link>
            </li>
            <li>
              <Link to="/course/list">課程體驗</Link>
            </li>
            <li>
              <Link to="/bestseller">人氣熱銷</Link>
            </li>
          </ul>
          <ul className="secondaryFooter__bottomList">
            <li>
              <Link to="/official">官方經典</Link>
            </li>
            <li>
              <Link to="/quiz">專屬香氣</Link>
            </li>
            <li>
              <Link to="/">實體店舖</Link>
            </li>
          </ul>
        </div>
        <div className="secondaryFooter__inputBox">
          <input
            className="secondaryFooter__subscribe"
            type="text"
            placeholder="輸入您的電子信箱"
          />
          <input
            className="secondaryFooter__subButton"
            type="submit"
            value="訂閱電子報"
          />
        </div>
        <div className="secondaryFooter__Text">
          <p className="secondaryFooter__copyRight">
            Copyright © Licorne Co., 2021. All rights reserved.
          </p>
        </div>
        <div className="secondaryFooter__icon">
          <button className="secondaryFooter__button">
            <FiFacebook className="secondaryFooter__facebook" />
          </button>
          <button className="secondaryFooter__button">
            <FiInstagram className="secondaryFooter__instagram" />
          </button>
          <button className="secondaryFooter__button">
            <FiMessageSquare className="secondaryFooter__message" />
          </button>
          <button className="secondaryFooter__button">
            <FiArrowUpCircle className="secondaryFooter__arrow" />
          </button>
        </div>
      </footer>
    </>
  )
}

export default SecondaryFooter
