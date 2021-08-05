import React from 'react'
import '../../../../styles/global.css'
import '../style.css'
import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import swal from 'sweetalert'

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
  function askDelete() {
    swal({
      title: '確定要刪除嗎？',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: '刪除成功！',
          icon: 'success',
        })
        const newCustomProducts = customProducts.filter((v, i) => {
          return v.id !== id
        })
        setCustomProducts(newCustomProducts)
      }
    })
  }
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
      <div className="memberProduct__cart__item__custom-img">
        <img src={bottle_img} alt="" />
        <div>
          <FiHeart className="feather-s" role="button" />
        </div>
      </div>
      <div className="memberProduct__cart__item__custom-desc">
        <p>{cust_id}</p>
        <p>
          {custom_ingredient}
          <br />
          {fragrance_name}
        </p>
        <p></p>
        <p>NT$ {price}</p>
        <p
          role="button"
          onClick={() => {
            askDelete()
          }}
        >
          刪除{' '}
        </p>
      </div>
      <div className="memberProduct__cart__item__custom-btn">
        <div
          role="button"
          onClick={() => {
            removeQTY()
          }}
        >
          <FiMinus />
        </div>
        <p>{quantity}</p>
        <div
          role="button"
          onClick={() => {
            addQTY()
          }}
        >
          <FiPlus />
        </div>
      </div>
    </>
  )
}

export default MyCartCustomItem
