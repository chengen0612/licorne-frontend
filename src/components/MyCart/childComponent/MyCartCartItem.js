import React, { useState } from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiHeart } from 'react-icons/fi'

function MyCartCartItem({
  id,
  productDatas,
  setProductDatas,
  img_id,
  name_zh,
  name_en,
  price,
  volume,
  quantity,
}) {
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
          XXXXXX系列
        </p>
        <div>
          {/* <select name="" id="">
            {volume === '100ml' ? (
              <option selected>瓶裝 100ML</option>
            ) : (
              <option>瓶裝 100ML</option>
            )}
            {volume === '50ml' ? (
              <option selected>瓶裝 50ML</option>
            ) : (
              <option>瓶裝 50ML</option>
            )}
          </select> */}
          {/*  */}
          <select name="" id="" value={volume}>
            <option value="100ml">瓶裝 100ML</option>
            <option value="50ml">瓶裝 50ML</option>
          </select>
          {/*  */}
        </div>
        <p>NT$ {price}</p>
        <p
          role="button"
          onClick={() => {
            const newProductDatas = productDatas.filter((v, i) => {
              return v.id !== id
            })
            setProductDatas(newProductDatas)
          }}
        >
          刪除{' '}
        </p>
      </div>
      <div className="cj-sidebar__cart__item__btn">
        <div
          role="button"
          onClick={() => {
            const newProductDatas = [...productDatas]
            const index = newProductDatas.findIndex((v, i) => {
              return v.id === id
            })
            if (index > -1 && quantity > 1) {
              newProductDatas[index].productQuantity--
            }
            setProductDatas(newProductDatas)
          }}
        >
          -
        </div>
        <p>{quantity}</p>
        <div
          role="button"
          onClick={() => {
            const newProductDatas = [...productDatas]
            const index = newProductDatas.findIndex((v, i) => {
              return v.id === id
            })
            if (index > -1) {
              newProductDatas[index].productQuantity++
            }
            setProductDatas(newProductDatas)
          }}
        >
          +
        </div>
      </div>
    </>
  )
}

export default MyCartCartItem
