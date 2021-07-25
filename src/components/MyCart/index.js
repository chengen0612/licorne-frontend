import React, { useState, useEffect } from 'react'
import '../../styles/global.css'
import './style.css'
import { FiX } from 'react-icons/fi'
import MyCartCart from './childComponent/MyCartCart'
import MyCartFav from './childComponent/MyCartFav'

function MyCart(props) {
  const closeSidebar = props.closeSidebar // 接住從 components/Header 傳來的 closeSidebar 函式
  const [favOrCart, setFavOrCart] = useState('Fav') // 切換側邊欄購物車及收藏清單
  const [productDatas, setProductDatas] = useState([]) // 處理產品資料
  const [totalAmount, setTotalAmount] = useState(0) //處理總金額

  function calculateTotal() {
    //計算總金額函式
    let total = 0
    for (let obj of productDatas) {
      total += obj.productQuantity * obj.price
    }
    setTotalAmount(total)
  }

  async function getSidebarFromServer() {
    // 組長提供的函式：伺服器抓資料
    const url = 'http://localhost:6005/sidebar' // 連接的伺服器資料網址
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json() // data 是從伺服器抓回來的資料

    const dataProduct = [...data.product]
    const dataQTY = data.productQuantity.split(',')
    for (let i = 0; i < dataProduct.length; i++) {
      dataProduct[i]['productQuantity'] = dataQTY[i]
    }
    setProductDatas(dataProduct)
  }
  useEffect(() => {
    calculateTotal()
  }, [productDatas])

  useEffect(() => {
    getSidebarFromServer()
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
          productDatas={productDatas}
          setProductDatas={setProductDatas}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          calculateTotal={calculateTotal}
        />
        <MyCartFav favOrCart={favOrCart} />
      </div>
    </>
  )
}

export default MyCart
