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
  officialProducts,
  setOfficialProducts,
  customProducts,
  setCustomProducts,
  courseProducts,
  setCourseProducts,
  officialFavorites,
  setOfficialFavorites,
  customFavorites,
  setCustomFavorites,
  calculateTotal,
  totalAmountOfficial,
  totalAmountCustom,
  totalAmountCourse,
}) {
  //

  //晁榮：以下是將資料傳到後端的程式碼！
  function getProductsAndQuantity(products) {
    //Only for official and custom products!
    let newProducts = [...products]
    let idArray = []
    for (let newProduct of newProducts) {
      idArray.push(newProduct.id)
    }
    let productIds = idArray.join(',')

    let qtyArray = []
    for (let newProduct of newProducts) {
      qtyArray.push(newProduct.quantity)
    }
    let productQuantitys = qtyArray.join(',')

    let arr = {}
    arr.productIds = productIds
    arr.productQuantitys = productQuantitys
    return arr
  }

  function getCollectDatas(collectDatas, hasQTY) {
    //Only for official and custom favorites!
    let newCollects = [...collectDatas]
    let idArray = []
    for (let newCollect of newCollects) {
      idArray.push(newCollect.id)
    }
    let collectIDs = idArray.join(',')
    if (hasQTY === true) {
      let collectQTYArray = []
      for (let newCollect of newCollects) {
        collectQTYArray.push(1)
      }
      let collectQTYs = collectQTYArray.join(',')
      let result = {}
      result.customized_id = collectIDs
      result.customized_quantity = collectQTYs
      return result
    }
    return { product_id: collectIDs }
  }

  async function updateDatabase(data, url) {
    const token = localStorage.getItem('jwt')
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: 'Bearer ' + token,
      }),
    })
    const response = await fetch(request)
    const result = await response.json()
    console.log('資料輸入成功: ', result.message)
  }
  //晁榮：以上是將資料傳到後端的程式碼！

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

          //晁榮：以下是將資料傳到後端的程式碼！
          let offProducts = getProductsAndQuantity(officialProducts)
          let custProducts = getProductsAndQuantity(customProducts)
          updateDatabase(
            offProducts,
            'http://localhost:6005/sidebar/updateOfficialCart'
          )
          updateDatabase(
            custProducts,
            'http://localhost:6005/sidebar/updateCustomCart'
          )
          let offiCollect = getCollectDatas(officialFavorites)
          updateDatabase(
            offiCollect,
            'http://localhost:6005/sidebar/updateOfficialCollect'
          )
          let custCollect = getCollectDatas(customFavorites, true)
          updateDatabase(
            custCollect,
            'http://localhost:6005/sidebar/updateCustomCollect'
          )
          //晁榮：以上是將資料傳到後端的程式碼！
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

                //晁榮：以下是將資料傳到後端的程式碼！
                let offProducts = getProductsAndQuantity(officialProducts)
                let custProducts = getProductsAndQuantity(customProducts)
                updateDatabase(
                  offProducts,
                  'http://localhost:6005/sidebar/updateOfficialCart'
                )
                updateDatabase(
                  custProducts,
                  'http://localhost:6005/sidebar/updateCustomCart'
                )
                let offiCollect = getCollectDatas(officialFavorites)
                updateDatabase(
                  offiCollect,
                  'http://localhost:6005/sidebar/updateOfficialCollect'
                )
                let custCollect = getCollectDatas(customFavorites, true)
                updateDatabase(
                  custCollect,
                  'http://localhost:6005/sidebar/updateCustomCollect'
                )
                //晁榮：以上是將資料傳到後端的程式碼！
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
          officialFavorites={officialFavorites}
          setOfficialFavorites={setOfficialFavorites}
          //
          customProducts={customProducts}
          setCustomProducts={setCustomProducts}
          totalAmountCustom={totalAmountCustom}
          customFavorites={customFavorites}
          setCustomFavorites={setCustomFavorites}
          //
          courseProducts={courseProducts}
          setCourseProducts={setCourseProducts}
          totalAmountCourse={totalAmountCourse}
          //
          // setTotalAmountOfficial={setTotalAmountOfficial} maybe not nessaccery? Observe a while!
          // calculateTotal={calculateTotal} maybe not nessaccery? Observe a while!
          closeSidebar={closeSidebar} // 承恩加的
        />
        <MyFav
          favOrCart={favOrCart}
          officialFavorites={officialFavorites}
          setOfficialFavorites={setOfficialFavorites}
          officialProducts={officialProducts}
          setOfficialProducts={setOfficialProducts}
          //
          customFavorites={customFavorites}
          setCustomFavorites={setCustomFavorites}
          customProducts={customProducts}
          setCustomProducts={setCustomProducts}
        />
      </div>
    </>
  )
}

export default CartFavSidebar
