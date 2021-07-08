import React from 'react'
import './style.css'

function Header() {
  return (
    <>
      <div className="header__page container-fluid p-0">
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
                    <i data-feather="search" className="header-i"></i>
                  </a>
                  <a href="#/">
                    <i data-feather="user" className="header-i"></i>
                  </a>
                </div>
                <div className="header__rwd-icon-2">
                  <a href="#/">
                    <i data-feather="heart" className="header-i"></i>
                  </a>
                  <a href="#/">
                    <i data-feather="shopping-bag" className="header-i"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="header__menu">
            <ul className="header__menu__list">
              <li>
                <a href="#/">課製香水</a>
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
      </div>
    </>
  )
}
export default Header
