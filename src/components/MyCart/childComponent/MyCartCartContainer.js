import React, { useState, useEffect } from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiHeart, FiMinusCircle, FiPlusCircle } from 'react-icons/fi'
import animal from './animal_50ml.png'

function MyCartCartContainer(props) {
  // const productDatas = props.productDatas
  const { favOrCart } = props

  const [cartItems, setCartItems] = useState('')

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
    const result = [...data.product]
    setCartItems(result)
  }
  useEffect(() => {
    getSidebarFromServer()
  }, [])

  return (
    <div style={{ display: favOrCart === 'Cart' ? 'block' : 'none' }}>
      <div className="cj-sidebar__cart">
        <div className="cj-sidebar__cart__item">
          <div className="cj-sidebar__cart__item__img">
            <img src={animal} alt="" />
            <div>
              <FiHeart className="feather-s" role="button" />
            </div>
          </div>
          <div className="cj-sidebar__cart__item__desc">
            <p>玉露綠茶</p>
            <p>
              Gyokuro Green Tea
              <br />
              茗茶香氛系列
            </p>
            <div>
              <select name="還沒想到" id="還沒想到">
                <option value="">瓶裝 100ML</option>
                <option value="">瓶裝 50ML</option>
              </select>
            </div>
            <p>NT$ 2,500</p>
            <p role="button">刪除 </p>
          </div>


          <div className="cj-sidebar__cart__item__btn">
            <div role="button">-</div>
            <p>99</p>
            <div role="button">+</div>
          </div>
        </div>
      </div>
      <div className="cj-sidebar__cart__price">
        <div>
          <p>總金額：</p>
          <p>NT$ 7,500</p>
        </div>
      </div>
      <div className="cj-sidebar__cart__checkout">
        <div>
          <p role="button">前往結帳</p>
        </div>
      </div>
    </div>
  )
}

export default MyCartCartContainer
