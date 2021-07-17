import React from 'react'
import './style.css'
import MyCart from '../MyCart'

import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi'

function Header() {
  return (
    <>
      <MyCart />
      <div className="header__line col-md col-sm"></div>
      <header className="header col-md col-sm">
        {/* -- logo -- */}
        <div className="header__top">
          <h1 className="logo">LICORNE</h1>
          {/* -- header icon -- */}
          <div className="header__icon-border">
            <div className="icon">
              <div className="header__rwd-icon-1">
                <a href="#/">
                  <FiSearch data-feather="search" className="header-i" />
                </a>
                <a href="#/">
                  <FiUser data-feather="user" className="header-i" />
                </a>
              </div>
              <div className="header__rwd-icon-2">
                <a href="#/">
                  <FiHeart data-feather="heart" className="header-i" />
                </a>
                <a href="#/">
                  <FiShoppingBag
                    data-feather="shopping-bag"
                    className="header-i"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="header__menu">
          <ul className="header__menu__list">
            <li>
              <a href="#/">客製香水</a>
            </li>
            <li>
              <a href="#/">課程體驗</a>
            </li>
            <li>
              <a href="#/">人氣熱銷</a>
            </li>
            <li>
              <a href="#/">官方經典</a>
            </li>
            <li>
              <a href="#/">專屬香氣</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
export default Header
