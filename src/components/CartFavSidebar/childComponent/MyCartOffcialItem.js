import React, { useState, useEffect } from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiHeart } from 'react-icons/fi'

function MyCartOffcialItem({
  id,
  officialProducts,
  officialProduct,
  setOfficialProducts,
  img_id,
  name_zh,
  name_en,
  price,
  volume,
  quantity,
  series_name,
  officialFavorites,
  setOfficialFavorites,
}) {
  // const [isInFavorite, setIsInFavorite] = useState(true)

  function removeQTY() {
    const newOfficialProducts = [...officialProducts]
    const index = newOfficialProducts.findIndex((v, i) => {
      return v.id === id
    })
    if (index > -1 && quantity > 1) {
      newOfficialProducts[index].quantity--
    }
    setOfficialProducts(newOfficialProducts)
  }

  function addQTY() {
    const newOfficialProducts = [...officialProducts]
    const index = newOfficialProducts.findIndex((v, i) => {
      return v.id === id
    })
    if (index > -1) {
      newOfficialProducts[index].quantity++
    }
    setOfficialProducts(newOfficialProducts)
  }

  function checkIsFav() {
    for (let officialFavorite of officialFavorites) {
      if (officialFavorite.id === id) {
        return true
      }
    }
    return false
  }

  function switchIsFav() {
    if (checkIsFav() === true) {
      const newOfficialFavorites = officialFavorites.filter((v, i) => {
        return v.id !== id
      })
      setOfficialFavorites(newOfficialFavorites)
    } else {
      let officialFavoritesCopy = [...officialFavorites]
      officialFavoritesCopy.push(officialProduct)
      setOfficialFavorites(officialFavoritesCopy)
    }
  }

  return (
    <>
      <div className="cj-sidebar__cart__item__official-img">
        <img src={img_id} alt="" />
        <div>
          {/* <FiHeart className="feather-s" role="button" /> */}
          <FiHeart
            className={checkIsFav() ? 'feather-s--active' : 'feather-s'}
            role="button"
            onClick={() => {
              switchIsFav()
            }}
          />
        </div>
      </div>
      <div className="cj-sidebar__cart__item__official-desc">
        <p>{name_zh}</p>
        <p>
          {name_en}
          <br />
          {series_name}系列
        </p>

        <p>瓶裝 {volume}</p>

        <p>NT$ {price}</p>
        <p
          role="button"
          onClick={() => {
            const newOfficialProducts = officialProducts.filter((v, i) => {
              return v.id !== id
            })
            setOfficialProducts(newOfficialProducts)
          }}
        >
          刪除{' '}
        </p>
      </div>
      <div className="cj-sidebar__cart__item__official-btn">
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

export default MyCartOffcialItem
