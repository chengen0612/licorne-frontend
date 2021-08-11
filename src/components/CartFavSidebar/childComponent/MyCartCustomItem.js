import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiHeart } from 'react-icons/fi'
import myswal from '../../../utils/sweetalert'

function MyCartCustomItem({
  customProducts,
  customProduct,
  id,
  cust_id,
  price,
  setCustomProducts,
  custom_ingredient,
  fragrance_name,
  quantity,
  bottle_img,
  customFavorites,
  setCustomFavorites,
}) {
  function removeQTY() {
    const newCustomProducts = [...customProducts]
    const index = newCustomProducts.findIndex((v, i) => {
      return v.id === id
    })
    if (index > -1 && quantity > 1) {
      newCustomProducts[index].quantity--
    }
    setCustomProducts(newCustomProducts)
  }

  function addQTY() {
    const newCustomProducts = [...customProducts]
    const index = newCustomProducts.findIndex((v, i) => {
      return v.id === id
    })
    if (index > -1) {
      newCustomProducts[index].quantity++
    }
    setCustomProducts(newCustomProducts)
  }

  function checkIsFav() {
    for (let customFavorite of customFavorites) {
      if (customFavorite.id === id) {
        return true
      }
    }
    return false
  }

  function switchIsFav() {
    if (checkIsFav() === true) {
      const newCustomFavorites = customFavorites.filter((v, i) => {
        return v.id !== id
      })
      setCustomFavorites(newCustomFavorites)
    } else {
      let customFavoritesCopy = [...customFavorites]
      customFavoritesCopy.push(customProduct)
      setCustomFavorites(customFavoritesCopy)
    }
  }

  // add comma to price
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <>
      <div className="cj-sidebar__cart__item__custom-img">
        <img src={bottle_img} alt="" />
        <div>
          <FiHeart
            className={checkIsFav() ? 'feather-s--active' : 'feather-s'}
            role="button"
            onClick={() => {
              switchIsFav()
            }}
          />
        </div>
      </div>
      <div className="cj-sidebar__cart__item__custom-desc">
        <p>{cust_id}</p>
        <p>
          {custom_ingredient}
          <br />
          {fragrance_name}
        </p>
        <p>瓶裝 100ML</p>
        <p>NT$ {numberWithCommas(price)}</p>
        <p
          role="button"
          onClick={() => {
            const newCustomProducts = customProducts.filter((v, i) => {
              return v.id !== id
            })
            // setCustomProducts(newCustomProducts)
            myswal.confirmDelete(setCustomProducts, newCustomProducts)
          }}
        >
          刪除{' '}
        </p>
      </div>
      <div className="cj-sidebar__cart__item__custom-btn">
        <div
          role="button"
          onClick={() => {
            removeQTY()
          }}
        >
          -
        </div>
        <p>{quantity}</p>
        <div
          role="button"
          onClick={() => {
            addQTY()
          }}
        >
          +
        </div>
      </div>
    </>
  )
}

export default MyCartCustomItem
