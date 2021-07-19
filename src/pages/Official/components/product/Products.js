import React, { useState, useEffect } from 'react'
import { FiHeart } from 'react-icons/fi'
function Products(props) {
  const { id, img, name_zh, price, top, middle, base } = props
  const imgURL = ` http://localhost:6005/${img} `
  return (
    <>
      <div className="product__total__box">
        <div className="product__item">
          <div className="product__img__heart d-flex justify-content-center">
            <figure className="product__img__box">
              <img className="product__img" src={imgURL} alt="" />
            </figure>
            <div className="product__heart__box">
              <button className="product__FiHear">
                <FiHeart size={27} />
              </button>
            </div>
          </div>
          <div className="product__name">
            <p>{name_zh}</p>
          </div>
          <div className="product__description">
            前調：{top}
            <br />
            中調：{middle}
            <br />
            後調：{base}
            <br />
            NT{price}元
          </div>
        </div>
        <div className="">
          <button className="product__buybutton">訂購</button>
        </div>
      </div>
    </>
  )
}

export default Products
