import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiShoppingBag } from 'react-icons/fi'
import myswal from '../../../utils/sweetalert'

function MyFavCustomItem({
  customFavorites,
  customFavorite,
  setCustomFavorites,
  customProducts,
  setCustomProducts,
}) {
  function checkIsInCart() {
    for (let customProduct of customProducts) {
      if (customProduct.id === customFavorite.id) {
        return true
      }
    }
    return false
  }

  function switchIsInCart() {
    if (checkIsInCart() === true) {
      const newCustomProducts = customProducts.filter((v, i) => {
        return v.id !== customFavorite.id
      })
      setCustomProducts(newCustomProducts)
    } else {
      let customProductsCopy = [...customProducts]
      customProductsCopy.push(customFavorite)
      setCustomProducts(customProductsCopy)
    }
  }

  // add comma to price
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

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
        <p>瓶裝 100ML</p>
        <p>NT$ {numberWithCommas(customFavorite.price)}</p>
        <p
          onClick={() => {
            const newCustomFavorites = customFavorites.filter((v, i) => {
              return v.id !== customFavorite.id
            })
            // setCustomFavorites(newCustomFavorites)
            myswal.confirmDelete(setCustomFavorites, newCustomFavorites)
          }}
        >
          刪除
        </p>
      </div>
      <div className="cj-sidebar__fav__item__custom-btn">
        <div
          className={
            checkIsInCart()
              ? 'cj-sidebar__fav__item__custom-btn__circle--active'
              : 'cj-sidebar__fav__item__custom-btn__circle'
          }
          onClick={() => {
            switchIsInCart()
          }}
        >
          <FiShoppingBag className="cj-sidebar__fav__item__custom-btn__FiShoppingBag" />
        </div>
      </div>
    </>
  )
}

export default MyFavCustomItem
