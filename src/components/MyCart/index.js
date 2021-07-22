import React, { useState, useEffect } from 'react'
import '../../styles/global.css'
import './style.css'
import { FiX } from 'react-icons/fi'
// import MyCartNoContnt from './childComponent/MyCartNoContent'
import MyCartCartContainer from './childComponent/MyCartCartContainer'
import MyCartFavContainer from './childComponent/MyCartFavContainer'

function MyCart(prop) {
  // 這裡接住從 Header 傳來的資料
  const closeSidebar = prop.closeSidebar
  // 用來切換側邊欄購物車以及收藏清單的 state
  const [favOrCart, setFavOrCart] = useState('Fav')
  // 這個用來處理產品資料
  const [productData, setProductData] = useState('')

  // 以下是組長提供的跟伺服器抓資料的程式碼
  async function getSidebarFromServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/sidebar'
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log(data.product)
    setProductData(data.product)
  }
  useEffect(() => {
    getSidebarFromServer()
  }, [])

  //
  //
  //

  return (
    <>
      <div
        className={
          prop.sidebarIsOpen
            ? 'cj-blackscreen'
            : 'cj-blackscreen cj-blackscreen--close'
        }
        onClick={() => {
          closeSidebar()
          document.body.style.overflow = 'visible'
        }}
      ></div>

      <div
        className={
          prop.sidebarIsOpen ? 'cj-sidebar' : 'cj-sidebar cj-sidebar--close'
        }
      >
        <div className="cj-sidebar__x pr-4">
          <div>
            <FiX
              role="button"
              className="feather-m"
              onClick={() => {
                closeSidebar()
                document.body.style.overflow = 'visible'
              }}
            />
          </div>
        </div>

        <div className="cj-sidebar__switch">
          <div>
            <p
              role="button"
              onClick={() => setFavOrCart('Fav')}
              className={
                favOrCart === 'Fav' ? 'cj-sidebar__switch__text--active' : ''
              }
            >
              收藏清單
            </p>
          </div>

          <div>
            <p
              role="button"
              onClick={() => setFavOrCart('Cart')}
              className={
                favOrCart === 'Cart' ? 'cj-sidebar__switch__text--active' : ''
              }
            >
              購物籃
            </p>
          </div>
        </div>

        <div className="cj-sidebar__space"></div>
        {/* <MyCartNoContnt /> */}

        <MyCartCartContainer favOrCart={favOrCart} productData={productData} />
        <MyCartFavContainer favOrCart={favOrCart} />
      </div>
    </>
  )
}

export default MyCart
