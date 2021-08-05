import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiHeart } from 'react-icons/fi'

function MyCartCustomItem({
  customProducts,
  id,
  cust_id,
  price,
  setCustomProducts,
  custom_ingredient,
  fragrance_name,
  quantity,
  bottle_img,
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

  return (
    <>
      <div className="cj-sidebar__cart__item__custom-img">
        <img src={bottle_img} alt="" />
        <div>
          <FiHeart className="feather-s" role="button" />
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
        <p>NT$ {price}</p>
        <p
          role="button"
          onClick={() => {
            const newCustomProducts = customProducts.filter((v, i) => {
              return v.id !== id
            })
            setCustomProducts(newCustomProducts)
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
