import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import '../../../styles/global.css'
import '../style.css'

function MyCartFav(props) {
  return (
    <>
      <div
        className="cj-sidebar__fav"
        style={{ display: props.favOrCart === 'Fav' ? 'block' : 'none' }}
      >
        <div className="cj-sidebar__fav__item">
          <div className="cj-sidebar__fav__item__img">
            <img src="/public/images/member/animal_100ml.png" alt="" />
          </div>

          <div className="cj-sidebar__fav__item__desc">
            <p>玉露綠茶</p>
            <p>
              Gyokuro Green Tea
              <br />
              茗茶香氛系列
            </p>
            <p>NT$ 2,500</p>
            <p>
              <a href="">刪除</a>
            </p>
          </div>

          <div className="cj-sidebar__fav__item__btn">
            <div>
              <FiShoppingBag />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCartFav
