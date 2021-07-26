import React, { useState, useEffect } from 'react'
import '../../styles/global.css'
import './style.css'
import { FiX } from 'react-icons/fi'
import MyCartCart from './childComponent/MyCartCart'
import MyCartFav from './childComponent/MyCartFav'

function MyCart(props) {
  const closeSidebar = props.closeSidebar // 接住從 components/Header 傳來的 closeSidebar 函式
  const [favOrCart, setFavOrCart] = useState('Fav') // 切換側邊欄購物車及收藏清單
  const [officialProducts, setOfficialProducts] = useState([])
  const [totalAmount, setTotalAmount] = useState(0) //處理總金額
  const [collectDatas, setCollectDatas] = useState([])

  function calculateTotal() {
    //計算總金額函式
    let total = 0
    for (let officialProduct of officialProducts) {
      total += officialProduct.quantity * officialProduct.price
    }
    setTotalAmount(total)
  }

  // 收藏清單 API
  async function getOfficialCollectFromServer() {
    const urlCollect = 'http://localhost:6005/sidebar/officialCollect'
    const requestCollect = new Request(urlCollect, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const responseCollect = await fetch(requestCollect)
    const collectDatas = await responseCollect.json()
    setCollectDatas(collectDatas)
  }

  // 官方產品 API
  async function getOfficialProductFromServer() {
    const urlCart = 'http://localhost:6005/sidebar/official'
    const requestCart = new Request(urlCart, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const responseCart = await fetch(requestCart)
    const officialProduct = await responseCart.json() // data 是從伺服器抓回來的資料
    setOfficialProducts(officialProduct)
  }

  // async function getOfficialProductFromServer() {
  //   const urlCart = 'http://localhost:6005/sidebar/official'
  //   const requestCart = new Request(urlCart, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'appliaction/json',
  //     }),
  //   })
  //   const responseCart = await fetch(requestCart)
  //   const officialProduct = await responseCart.json() // data 是從伺服器抓回來的資料
  //   setOfficialProducts(officialProduct)
  // }

  useEffect(() => {
    calculateTotal()
  }, [officialProducts])

  useEffect(() => {
    getOfficialProductFromServer()
    getOfficialCollectFromServer()
  }, [])

  //

  return (
    <>
      <div
        className={
          props.sidebarIsOpen
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
          props.sidebarIsOpen ? 'cj-sidebar' : 'cj-sidebar cj-sidebar--close'
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
              onClick={() => {
                setFavOrCart('Cart')
                calculateTotal()
              }}
              className={
                favOrCart === 'Cart' ? 'cj-sidebar__switch__text--active' : ''
              }
            >
              購物籃
            </p>
          </div>
        </div>

        <div className="cj-sidebar__space"></div>
        <MyCartCart
          favOrCart={favOrCart}
          officialProducts={officialProducts}
          setOfficialProducts={setOfficialProducts}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          calculateTotal={calculateTotal}
        />
        <MyCartFav
          favOrCart={favOrCart}
          collectDatas={collectDatas}
          setCollectDatas={setCollectDatas}
        />
      </div>
    </>
  )
}

export default MyCart
