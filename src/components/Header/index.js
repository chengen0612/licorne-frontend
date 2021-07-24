import React from 'react'
import './style.css'
import MyCart from '../MyCart'
import { useState } from 'react'

import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi'
// import { set } from 'immer/dist/internal'

function Header() {
  // CJ：這個 state 是設定購物車側邊欄開關狀態
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  // CJ：這個 function 是用來關上購物車側邊欄
  function closeSidebar() {
    setSidebarIsOpen(false)
    document.body.style.width = '100%'
  }

  const openSidebar = () => {
    setSidebarIsOpen(true)
    const scrollbarWidth = window.innerWidth - document.body.offsetWidth
    document.body.style.overflow = 'hidden'
    document.body.style.width = `calc(100% - ${scrollbarWidth}px)`
  }

  return (
    <>
      {/* CJ：MyCart 原件，以及傳入兩個 prop */}
      <MyCart sidebarIsOpen={sidebarIsOpen} closeSidebar={closeSidebar} />
      {/*  */}
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
                {/* CJ：給這個 featherIcon 加上 onClick 事件 => 開啟購物車側邊欄 */}
                <a href="#/">
                  <FiShoppingBag
                    onClick={openSidebar}
                    data-feather="shopping-bag"
                    className="header-i"
                  />
                  {/*  */}
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
