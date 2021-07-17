import React from 'react'
import '../../styles/global.css'
import './style.css'
import { FiX } from 'react-icons/fi'
import MyCartNoContnt from './childComponent/MyCartNoContent'
import MyCartCartContainer from './childComponent/MyCartCartContainer'
import MyCartFavContainer from './childComponent/MyCartFavContainer'

function MyCart() {
  return (
    <>
      <div className="fav-cart__bk-screen"></div>

      <div className="fav-cart__sidebar">
        <div
          className="
        fav-cart__sidebar__top1
        d-flex
        justify-content-end
        align-items-center
        pr-4
      "
        >
          <div>
            <FiX role="button" className="feather-m" />
          </div>
        </div>

        <div className="fav-cart__sidebar__top2 d-flex">
          <div className="d-flex justify-content-center align-items-center">
            <p role="button">收藏清單</p>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <p role="button">購物籃</p>
          </div>
        </div>

        <div className="fav-cart__sidebar__placeholder"></div>
        {/* <MyCartNoContnt /> */}
        {/* <MyCartCartContainer /> */}
        <MyCartFavContainer />
      </div>
    </>
  )
}

export default MyCart
