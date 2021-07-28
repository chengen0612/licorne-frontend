import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiHeart } from 'react-icons/fi'

function MyCartOffcialItem({
  id,
  officialProducts,
  setOfficialProducts,
  img_id,
  name_zh,
  name_en,
  price,
  volume,
  quantity,
  series_name,
}) {
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

  return (
    <>
      <div className="cj-sidebar__cart__item__img">
        <img src={img_id} alt="" />
        <div>
          <FiHeart className="feather-s" role="button" />
        </div>
      </div>
      <div className="cj-sidebar__cart__item__desc">
        <p>{name_zh}</p>
        <p>
          {name_en}
          <br />
          {series_name}系列
        </p>
        <div>
          <select name="" id="" value={volume} disabled>
            <option value="100ml">瓶裝 100ML</option>
            <option value="50ml">瓶裝 50ML</option>
          </select>
        </div>
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
      <div className="cj-sidebar__cart__item__btn">
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
