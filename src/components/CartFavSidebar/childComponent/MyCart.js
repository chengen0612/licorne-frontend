import React from 'react'
import { useHistory } from 'react-router-dom' // 承恩加的
import '../../../styles/global.css'
import '../style.css'
import MyCartOffcialItem from './MyCartOffcialItem'
import MyCartCustomItem from './MyCartCustomItem'
import MyCartCourseItem from './MyCartCourseItem'

function MyCart({
  favOrCart,
  //
  officialProducts,
  setOfficialProducts,
  totalAmountOfficial,
  officialFavorites,
  setOfficialFavorites,
  //
  customProducts,
  setCustomProducts,
  customFavorites,
  setCustomFavorites,
  //
  courseProducts,
  setCourseProducts,
  //
  closeSidebar, // 承恩加的
}) {
  const history = useHistory() // 承恩加的

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

  const updateDatabase = async (data, url) => {
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

  // 承恩加的
  const handleSubmit = async () => {
    //晁榮：以下是將資料傳到後端的程式碼！
    let offProducts = getProductsAndQuantity(officialProducts)
    let custProducts = getProductsAndQuantity(customProducts)
    await updateDatabase(
      offProducts,
      'http://localhost:6005/sidebar/updateOfficialCart'
    )
    await updateDatabase(
      custProducts,
      'http://localhost:6005/sidebar/updateCustomCart'
    )
    let offiCollect = getCollectDatas(officialFavorites)
    await updateDatabase(
      offiCollect,
      'http://localhost:6005/sidebar/updateOfficialCollect'
    )
    let custCollect = getCollectDatas(customFavorites, true)
    await updateDatabase(
      custCollect,
      'http://localhost:6005/sidebar/updateCustomCollect'
    )
    //晁榮：以上是將資料傳到後端的程式碼！
    closeSidebar()
    document.body.style.overflow = 'visible'
    history.push('/checkout')
  }

  return (
    <div style={{ display: favOrCart === 'Cart' ? 'block' : 'none' }}>
      <div className="cj-sidebar__cart">
        {officialProducts.length +
          customProducts.length +
          courseProducts.length >
        0 ? (
          ''
        ) : (
          <p className="cj-sidebar__cart__no-item-message">
            購物籃中沒有任何商品
          </p>
        )}
        {/*  */}
        {officialProducts.map((officialProduct, key) => {
          return (
            <div key={officialProduct.id} className="cj-sidebar__cart__item">
              <MyCartOffcialItem
                id={officialProduct.id}
                officialProducts={officialProducts}
                officialProduct={officialProduct}
                setOfficialProducts={setOfficialProducts}
                img_id={officialProduct.img_id}
                name_zh={officialProduct.name_zh}
                name_en={officialProduct.name_en}
                price={officialProduct.price}
                volume={officialProduct.volume}
                quantity={officialProduct.quantity}
                series_name={officialProduct.series_name}
                officialFavorites={officialFavorites}
                setOfficialFavorites={setOfficialFavorites}
              />
            </div>
          )
        })}
        {/*  */}
        {customProducts.map((customProduct, key) => {
          return (
            <div key={customProduct.id} className="cj-sidebar__cart__item">
              <MyCartCustomItem
                customProducts={customProducts}
                customProduct={customProduct}
                id={customProduct.id}
                cust_id={customProduct.cust_id}
                price={customProduct.price}
                setCustomProducts={setCustomProducts}
                custom_ingredient={customProduct.custom_ingredient}
                fragrance_name={customProduct.fragrance_name}
                quantity={customProduct.quantity}
                bottle_img={customProduct.bottle_img}
                customFavorites={customFavorites}
                setCustomFavorites={setCustomFavorites}
              />
            </div>
          )
        })}
        {/*  */}
        {courseProducts.map((courseProduct, key) => {
          return (
            <div
              key={courseProduct.course_id}
              className="cj-sidebar__cart__item"
            >
              <MyCartCourseItem
                courseProducts={courseProducts}
                courseProduct={courseProduct}
                setCourseProducts={setCourseProducts}
              />
            </div>
          )
        })}
      </div>

      <div className="cj-sidebar__cart__price">
        <div>
          <p>總金額：</p>
          <p>NT$ {totalAmountOfficial}</p>
        </div>
      </div>
      <div className="cj-sidebar__cart__checkout">
        {/* 承恩加的 */}
        <div className="myCart__btn" role="button" onClick={handleSubmit}>
          <span>前往結帳</span>
        </div>
      </div>
    </div>
  )
}

export default MyCart
