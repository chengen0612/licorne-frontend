import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiShoppingBag } from 'react-icons/fi'

function MyFavOfficialItem({
  officialFavorites,
  setOfficialFavorites,
  id,
  name_zh,
  name_en,
  price,
  img_id,
  series_name,
  volume,
  officialProducts,
}) {
  function checkIsInCart() {
    let currentID = id
    for (let officialProduct of officialProducts) {
      if (officialProduct.id === currentID) {
        return true
      }
    }
    return false
  }

  return (
    <>
      <div className="cj-sidebar__fav__item__official-img">
        <img src={img_id} alt="" />
      </div>
      <div className="cj-sidebar__fav__item__official-desc">
        <p>{name_zh}</p>
        <p>
          {name_en}
          <br />
          {series_name}系列
        </p>
        <p>瓶裝 {volume}</p>
        <p>NT$ {price}</p>
        <p
          onClick={() => {
            const newOfficialFavorites = officialFavorites.filter((v, i) => {
              return v.id !== id
            })
            setOfficialFavorites(newOfficialFavorites)
          }}
        >
          刪除
        </p>
      </div>
      <div className="cj-sidebar__fav__item__official-btn">
        <div
          className={
            checkIsInCart()
              ? 'cj-sidebar__fav__item__official-btn__circle--active'
              : 'cj-sidebar__fav__item__official-btn__circle'
          }
        >
          <FiShoppingBag className="cj-sidebar__fav__item__official-btn__FiShoppingBag" />
        </div>
      </div>
    </>
  )
}

export default MyFavOfficialItem
