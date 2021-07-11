import React from 'react'
import './style.css'
import HeaderBar from './HeaderBar'

function Header() {
  return (
    <>
      <HeaderBar className="container-fluid p-0" />
      <div className="header__page container-fluid p-0"></div>
    </>
  )
}
export default Header
