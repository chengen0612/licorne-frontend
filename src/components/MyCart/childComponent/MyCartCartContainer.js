import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiHeart, FiMinusCircle, FiPlusCircle } from 'react-icons/fi'
import animal from './animal_50ml.png'

function MyCartCartContainer() {
  return (
    <>
      <div class="fav-cart__sidebar__cart__wrap">
        <div class="fav-cart__sidebar__cart__wrap__item">
          <div class="fav-cart__sidebar__cart__wrap__item__img">
            <img src={animal} alt="" />
            <div>
              <FiHeart className="feather-s" role="button" />
            </div>
          </div>

          <div class="fav-cart__sidebar__cart__wrap__item__desc">
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

          <div class="fav-cart__sidebar__cart__wrap__item__btn">
            <div role="button">-</div>
            <p>99</p>
            <div role="button">+</div>
          </div>
        </div>
      </div>

      <div class="fav-cart__sidebar__fav__price">
        <div>
          <p>總金額：</p>
          <p>NT$ 7,500</p>
        </div>
      </div>
      <div class="fav-cart__sidebar__fav__checkout">
        <div>
          <p role="button">前往結帳</p>
        </div>
      </div>
    </>
  )
}

export default MyCartCartContainer
