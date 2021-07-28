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
  // function removeQTY() {
  //   const newOfficialProducts = [...officialProducts]
  //   const index = newOfficialProducts.findIndex((v, i) => {
  //     return v.id === id
  //   })
  //   if (index > -1 && quantity > 1) {
  //     newOfficialProducts[index].quantity--
  //   }
  //   setOfficialProducts(newOfficialProducts)
  // }

  // function addQTY() {
  //   const newOfficialProducts = [...officialProducts]
  //   const index = newOfficialProducts.findIndex((v, i) => {
  //     return v.id === id
  //   })
  //   if (index > -1) {
  //     newOfficialProducts[index].quantity++
  //   }
  //   setOfficialProducts(newOfficialProducts)
  // }

  return (
    <>
      <div className="cj-sidebar__cart__item__img">
        <img src={bottle_img} alt="" />
        <div>
          <FiHeart className="feather-s" role="button" />
        </div>
      </div>
      <div className="cj-sidebar__cart__item__desc">
        <p>{cust_id}</p>
        <p>{custom_ingredient}</p>
        <p>{fragrance_name}</p>
        <p>NT$ {price}</p>
        {/* <p
          role="button"
          onClick={() => {
            const newOfficialProducts = officialProducts.filter((v, i) => {
              return v.id !== id
            })
            setOfficialProducts(newOfficialProducts)
          }}
        >
          刪除{' '}
        </p> */}
      </div>
      <div className="cj-sidebar__cart__item__btn">
        <div
          role="button"
          // onClick={() => {
          //   removeQTY()
          // }}
        >
          -
        </div>
        <p>{quantity}</p>
        <div
          role="button"
          // onClick={() => {
          //   addQTY()
          // }}
        >
          +
        </div>
      </div>
    </>
  )
}

export default MyCartCustomItem
