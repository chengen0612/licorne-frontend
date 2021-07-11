import React from 'react'
import './style.css'
import imgURL from './imgs/LICORNE_logo.svg'
import {
  FiArrowUpCircle,
  FiFacebook,
  FiInstagram,
  FiMessageSquare,
} from 'react-icons/fi'

function SecondaryFooter() {
  return (
    <>
      <footer className="secondaryFooter__style">
        <div className="secondaryFooter__logoBox">
          <img className="secondaryFooter__logo" src={imgURL} alt="" />
        </div>
        <div className="secondaryFooter__listBox">
          <ul className="secondaryFooter__topList">
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
          <ul className="secondaryFooter__bottomList">
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
            Copyright © Licorne Co.,2021.All rights reserved.
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
