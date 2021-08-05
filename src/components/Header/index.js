import React, { useState } from 'react'
import { withRouter, Link, NavLink } from 'react-router-dom'
import './style.css'
import CartFavSidebar from '../CartFavSidebar'

import { FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi'
// import { set } from 'immer/dist/internal'

function Header(props) {
  const [favOrCart, setFavOrCart] = useState('Fav') // 切換側邊欄購物車及收藏清單
  // CJ：這個 state 是設定購物車側邊欄開關狀態
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  // CJ：這個 function 是用來關上購物車側邊欄
  function closeSidebar() {
    setSidebarIsOpen(false)
    document.body.style.width = '100%'
  }

  const openSidebarFav = () => {
    setSidebarIsOpen(true)
    setFavOrCart('Fav')
    const scrollbarWidth = window.innerWidth - document.body.offsetWidth
    document.body.style.overflow = 'hidden'
    document.body.style.width = `calc(100% - ${scrollbarWidth}px)`
  }

  const openSidebarCart = () => {
    setSidebarIsOpen(true)
    setFavOrCart('Cart')
    const scrollbarWidth = window.innerWidth - document.body.offsetWidth
    document.body.style.overflow = 'hidden'
    document.body.style.width = `calc(100% - ${scrollbarWidth}px)`
  }

  return (
    <>
      {/* CJ：MyCart 原件，以及傳入兩個 prop */}
      <CartFavSidebar
        sidebarIsOpen={sidebarIsOpen}
        closeSidebar={closeSidebar}
        favOrCart={favOrCart}
        setFavOrCart={setFavOrCart}
      />
      <div className="header__line col-md col-sm"></div>
      <header className="header col-md col-sm">
        {/* -- logo -- */}
        <div className="header__top">
          <h1 className="logo" role="button">
            <Link to="/">LICORNE</Link>
          </h1>
          {/* -- header icon -- */}
          <div className="header__icon-border">
            <div className="icon">
              <div className="header__rwd-icon-1">
                {/* <div role="button">
                  <FiSearch className="header-i" />
                </div> */}
                <Link to="/login">
                  <FiUser className="header-i" />
                </Link>
              </div>
              <div className="header__rwd-icon-2">
                <div role="button">
                  <FiHeart onClick={openSidebarFav} className="header-i" />
                </div>
                {/* CJ：給這個 featherIcon 加上 onClick 事件 => 開啟購物車側邊欄 */}
                <div role="button">
                  <FiShoppingBag
                    onClick={openSidebarCart}
                    className="header-i"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header__menu">
          <ul className="header__menu__list">
            <li>
              <NavLink to="/custom/entrance" activeClassName="menu-foucs">
                客製香水
              </NavLink>
            </li>
            <li>
              <NavLink to="/course" activeClassName="menu-foucs">
                課程體驗
              </NavLink>
            </li>
            <li>
              <NavLink to="/bestseller" activeClassName="menu-foucs">
                人氣熱銷
              </NavLink>
            </li>
            <li>
              <NavLink to="/official" activeClassName="menu-foucs">
                官方經典
              </NavLink>
            </li>
            <li>
              <NavLink to="/quiz" activeClassName="menu-foucs">
                專屬香氣
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
export default withRouter(Header)
