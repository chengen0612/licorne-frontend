import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiShoppingBag } from 'react-icons/fi'

function MyFavCustomItem({
  customFavorites,
  customFavorite,
  setCustomFavorites,
}) {
  return (
    <>
      <div className="cj-sidebar__fav__item__custom-img">
        <img src={customFavorite.bottle_img} alt="" />
      </div>
      <div className="cj-sidebar__fav__item__custom-desc">
        <p>{customFavorite.cust_id}</p>
        <p>
          {customFavorite.custom_ingredient}
          <br />
          {customFavorite.fragrance_name}
        </p>
        <div>
          <p>瓶裝 100ML</p>
        </div>
        <p>NT$ {customFavorite.price}</p>
        <p
          onClick={() => {
            const newCustomFavorites = customFavorites.filter((v, i) => {
              return v.id !== customFavorite.id
            })
            setCustomFavorites(newCustomFavorites)
          }}
        >
          刪除
        </p>
      </div>
      <div className="cj-sidebar__fav__item__custom-btn">
        <div>
          <FiShoppingBag />
        </div>
      </div>
    </>
  )
}

export default MyFavCustomItem
