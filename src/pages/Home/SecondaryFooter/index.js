import React from 'react'
import './style.css'
import imgURL from './imgs/LICORNE_logo.svg'
import FeatherIcon from 'feather-icons-react'

function SecondaryFooter() {
  return (
    <>
      <footer className="secondaryFooter__style">
        <div className="secondaryFooter__logoBox">
          <img className="footer__logo" src={imgURL} alt="" />
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
          <button class="secondaryFooter__button">
            <FeatherIcon class="secondaryFooter__facebook" icon="facebook" />
          </button>
          <button class="secondaryFooter__button">
            <FeatherIcon class="secondaryFooter__instagram" icon="instagram" />
          </button>
          <button class="secondaryFooter__button">
            <FeatherIcon
              class="secondaryFooter__message"
              icon="message-square"
            />
          </button>
          <button class="secondaryFooter__button">
            <FeatherIcon
              class="secondaryFooter__arrow"
              icon="arrow-up-circle"
            />
          </button>
        </div>
      </footer>
    </>
  )
}

export default SecondaryFooter
