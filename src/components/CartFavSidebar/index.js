import React, { useState, useEffect } from 'react'
import '../../styles/global.css'
import './style.css'
import { FiX } from 'react-icons/fi'
import MyCart from './childComponent/MyCart'
import MyFav from './childComponent/MyFav'

function CartFavSidebar({
  sidebarIsOpen,
  closeSidebar,
  favOrCart,
  setFavOrCart,
}) {
  // const closeSidebar = props.closeSidebar // 接住從 components/Header 傳來的 closeSidebar 函式
  // const [favOrCart, setFavOrCart] = useState('Fav') // 切換側邊欄購物車及收藏清單
  //
  const [officialProducts, setOfficialProducts] = useState([]) // an array holding the data of official products
  const [totalAmountOfficial, setTotalAmountOfficial] = useState(0) // a number, sum of each (official product qty) x (official product price)
  const [customProducts, setCustomProducts] = useState([])
  const [totalAmountCustom, setTotalAmountCustom] = useState(0)
  const [courseProducts, setCourseProducts] = useState([])
  const [totalAmountCourse, setTotalAmountCourse] = useState(0)
  //
  const [officialFavorites, setOfficialFavorites] = useState([])

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

  useEffect(() => {
    calculateTotal()
  }, [officialProducts, customProducts, courseProducts])

  useEffect(() => {
    getOfficialProductFromServer()
    getOfficialCollectFromServer()
    getCustomProductFromServer()
    getCourseProductsFromServer()
  }, [])

  //

  return (
    <>
      <div
        className={
          sidebarIsOpen
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
          sidebarIsOpen ? 'cj-sidebar' : 'cj-sidebar cj-sidebar--close'
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
        <MyCart
          favOrCart={favOrCart}
          //
          officialProducts={officialProducts}
          setOfficialProducts={setOfficialProducts}
          totalAmountOfficial={totalAmountOfficial}
          //
          customProducts={customProducts}
          setCustomProducts={setCustomProducts}
          totalAmountCustom={totalAmountCustom}
          //
          courseProducts={courseProducts}
          setCourseProducts={setCourseProducts}
          totalAmountCourse={totalAmountCourse}
          //
          // setTotalAmountOfficial={setTotalAmountOfficial} maybe not nessaccery? Observe a while!
          // calculateTotal={calculateTotal} maybe not nessaccery? Observe a while!
        />
        <MyFav
          favOrCart={favOrCart}
          officialFavorites={officialFavorites}
          setOfficialFavorites={setOfficialFavorites}
        />
      </div>
    </>
  )
}

export default CartFavSidebar
