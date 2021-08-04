import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './style.css'
import CartFavSidebar from '../CartFavSidebar'

import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi'
// import { set } from 'immer/dist/internal'

function Header(props) {
  // -------------------- 以下是晁榮的程式碼 --------------------
  const [favOrCart, setFavOrCart] = useState('Fav') // 切換側邊欄購物車及收藏清單
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false) //設定購物車側邊欄開關狀態
  const [officialProducts, setOfficialProducts] = useState([])
  const [customProducts, setCustomProducts] = useState([])
  const [courseProducts, setCourseProducts] = useState([])
  //
  const [officialFavorites, setOfficialFavorites] = useState([])
  const [customFavorites, setCustomFavorites] = useState([])
  const [courseFavorites, setCourseFavorites] = useState([])
  //
  const [totalAmountCourse, setTotalAmountCourse] = useState(0)
  const [totalAmountCustom, setTotalAmountCustom] = useState(0)
  const [totalAmountOfficial, setTotalAmountOfficial] = useState(0)

  // useEffect(() => {
  //   // 註解掉一陣子看有什麼影響
  //   getOfficialProductFromServer()
  //   getCustomProductFromServer()
  //   getCourseProductsFromServer()
  //   getOfficialCollectFromServer()
  //   getCustomCollectFromServer()
  //   getCourseCollectFromServer()
  // }, [])

  useEffect(() => {
    calculateTotal()
  }, [officialProducts, customProducts, courseProducts])

  function calculateTotal() {
    //計算總金額函式
    let officialTotal = 0
    let customTotal = 0
    let courseTotal = 0
    let sumOfTotals = 0
    for (let officialProduct of officialProducts) {
      officialTotal += officialProduct.quantity * officialProduct.price
    }
    for (let customProduct of customProducts) {
      customTotal += customProduct.quantity * customProduct.price
    }

    for (let courseProduct of courseProducts) {
      courseTotal += courseProduct.quantity * courseProduct.price
    }

    sumOfTotals = officialTotal + customTotal + courseTotal
    setTotalAmountOfficial(sumOfTotals)
  }

  const closeSidebar = () => {
    // 關上購物車側邊欄的函式
    setSidebarIsOpen(false)
    document.body.style.width = '100%'
  }

  function openSidebarFav() {
    // 打開側邊欄的函式（收藏）
    setSidebarIsOpen(true)
    setFavOrCart('Fav')
    const scrollbarWidth = window.innerWidth - document.body.offsetWidth
    document.body.style.overflow = 'hidden'
    document.body.style.width = `calc(100% - ${scrollbarWidth}px)`
    getOfficialProductFromServer()
    getCustomProductFromServer()
    getCourseProductsFromServer()
    getOfficialCollectFromServer()
    getCustomCollectFromServer()
    getCourseCollectFromServer()
  }

  function openSidebarCart() {
    // 打開側邊欄的函式（購物車）
    setSidebarIsOpen(true)
    setFavOrCart('Cart')
    const scrollbarWidth = window.innerWidth - document.body.offsetWidth
    document.body.style.overflow = 'hidden'
    document.body.style.width = `calc(100% - ${scrollbarWidth}px)`
    getOfficialProductFromServer()
    getCustomProductFromServer()
    getCourseProductsFromServer()
    getOfficialCollectFromServer()
    getCustomCollectFromServer()
    getCourseCollectFromServer()
  }

  // 收藏官方 API
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
    const officialFavorites = await responseCollect.json()
    setOfficialFavorites(officialFavorites)
  }
  // 收藏客製化 API
  async function getCustomCollectFromServer() {
    const urlCollect = 'http://localhost:6005/sidebar/customCollect'
    const requestCollect = new Request(urlCollect, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const responseCollect = await fetch(requestCollect)
    const customCollect = await responseCollect.json()
    setCustomFavorites(customCollect)
  }
  //收藏課程 API
  async function getCourseCollectFromServer() {
    const urlCollect = 'http://localhost:6005/sidebar/courseCollect'
    const requestCollect = new Request(urlCollect, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const responseCollect = await fetch(requestCollect)
    const courseCollect = await responseCollect.json()
    setCourseFavorites(courseCollect)
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
    const officialProduct = await responseCart.json()
    setOfficialProducts(officialProduct)
  }
  //客製化產品 API
  async function getCustomProductFromServer() {
    const urlCart = 'http://localhost:6005/sidebar/custom'
    const requestCart = new Request(urlCart, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const responseCustom = await fetch(requestCart)
    const customProduct = await responseCustom.json()
    setCustomProducts(customProduct)
  }
  // 課程 API
  async function getCourseProductsFromServer() {
    const urlCourse = 'http://localhost:6005/sidebar/course'
    const requestCourse = new Request(urlCourse, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const responseCourse = await fetch(requestCourse)
    const courseProduct = await responseCourse.json()
    setCourseProducts(courseProduct)
  }
  // -------------------- 以上是晁榮的程式碼 --------------------

  return (
    <>
      {/* -------------------- 以下是晁榮的程式碼 -------------------- */}
      <CartFavSidebar
        sidebarIsOpen={sidebarIsOpen}
        closeSidebar={closeSidebar}
        favOrCart={favOrCart}
        setFavOrCart={setFavOrCart}
        officialProducts={officialProducts}
        setOfficialProducts={setOfficialProducts}
        customProducts={customProducts}
        setCustomProducts={setCustomProducts}
        courseProducts={courseProducts}
        setCourseProducts={setCourseProducts}
        officialFavorites={officialFavorites}
        setOfficialFavorites={setOfficialFavorites}
        customFavorites={customFavorites}
        setCustomFavorites={setCustomFavorites}
        courseFavorites={courseFavorites}
        setCourseFavorites={setCourseFavorites}
        calculateTotal={calculateTotal}
        totalAmountOfficial={totalAmountOfficial}
        totalAmountCustom={totalAmountCustom}
        totalAmountCourse={totalAmountCourse}
      />
      {/* -------------------- 以上是晁榮的程式碼 -------------------- */}

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
                  <FiHeart
                    onClick={() => {
                      openSidebarFav()
                    }}
                    className="header-i"
                  />
                </div>
                <div role="button">
                  <FiShoppingBag
                    onClick={() => {
                      openSidebarCart()
                    }}
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
              <Link to="/quiz">專屬香氣</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
export default withRouter(Header)
