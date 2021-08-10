// Official Product 內層

import React from 'react'
import '../../../../styles/global.css'
import '../style.css'
import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import styled from 'styled-components'
import Alert from 'react-bootstrap/Alert'
import swal from 'sweetalert'

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
        const newOfficialProducts = officialProducts.filter((v, i) => {
          return v.id !== id
        })
        setOfficialProducts(newOfficialProducts)
      }
    })
  }

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

  // add comma to price
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <>
      <div className="memberProduct__cart__item__official-img">
        <img src={img_id} alt="" />
        <div>
          <FiHeart className="feather-s" role="button" />
        </div>
      </div>
      <div className="memberProduct__cart__item__official-desc">
        <p>{name_zh}</p>
        <p>
          {name_en}
          <br />
          {series_name}
        </p>
        <p>{volume}</p>
        <p>NT$ {numberWithCommas(price)}</p>
        <p
          role="button"
          onClick={() => {
            askDelete()
          }}
        >
          刪除{' '}
        </p>
      </div>
      <div className="memberProduct__cart__item__official-btn">
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

export default MyCartOffcialItem
