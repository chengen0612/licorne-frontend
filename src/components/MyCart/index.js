import React from 'react'
import '../../styles/global.css'
import './style.css'
import { FiX } from 'react-icons/fi'
import { IconContext } from 'react-icons'

function MyCart() {
  return (
    <>
      <div class="fav-cart__bk-screen"></div>

      <div class="fav-cart__sidebar">
        <div
          class="
        fav-cart__sidebar__top1
        d-flex
        justify-content-end
        align-items-center
        pr-4
      "
        >
          <div>
            {/*  */}
            {/*  */}
            <IconContext.Provider
              value={{
                color: '#223843',
                // className: 'global-class-name',
                size: '30px',
              }}
            >
              <div>
                <FiX role="button" />
              </div>
            </IconContext.Provider>
            {/*  */}
            {/*  */}
          </div>
        </div>

        <div class="fav-cart__sidebar__top2 d-flex">
          <div class="d-flex justify-content-center align-items-center">
            <a href="#">
              <p>收藏清單</p>
            </a>
          </div>

          <div class="d-flex justify-content-center align-items-center">
            <a href="#">
              <p>購物籃</p>
            </a>
          </div>
        </div>

        <div class="fav-cart__sidebar__placeholder"></div>

        <div class="fav-cart__sidebar__no-item d-flex justify-content-center">
          <p>收藏中/購物籃中沒有任何商品</p>
        </div>
      </div>
    </>
  )
}

export default MyCart
