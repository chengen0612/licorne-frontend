import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './style.css'
import MyCart from '../MyCart'

import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi'
// import { set } from 'immer/dist/internal'

function Header(props) {
  console.log('header', props)
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
      <div className="header__line col-md col-sm"></div>
      <header className="header col-md col-sm">
        {/* -- logo -- */}
        <div className="header__top">
          <h1 className="logo">LICORNE</h1>
          {/* -- header icon -- */}
          <div className="header__icon-border">
            <div className="icon">
              <div className="header__rwd-icon-1">
                <div role="button">
                  <FiSearch className="header-i" />
                </div>
                <Link to="/member">
                  <FiUser className="header-i" />
                </Link>
              </div>
              <div className="header__rwd-icon-2">
                <div role="button">
                  <FiHeart onClick={openSidebar} className="header-i" />
                </div>
                {/* CJ：給這個 featherIcon 加上 onClick 事件 => 開啟購物車側邊欄 */}
                <div role="button">
                  <FiShoppingBag onClick={openSidebar} className="header-i" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header__menu">
          <ul className="header__menu__list">
            <li>
              <Link to="/custom/entrance">客製香水</Link>
            </li>
            <li>
              <Link to="/course">課程體驗</Link>
            </li>
            <li>
              <Link to="/bestseller">人氣熱銷</Link>
            </li>
            <li>
              <Link to="/official">官方經典</Link>
            </li>
            <li>
              <Link to="/bestseller">專屬香氣</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
export default withRouter(Header)
