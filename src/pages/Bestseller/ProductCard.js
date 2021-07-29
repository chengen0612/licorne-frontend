import React from 'react'

import { imgPath } from '../../config'

function ProductCard() {
  return (
    <>
      <div className="best__prod-card">
        <figure className="best__prod-sequence">
          <img src={imgPath + '/images/bestseller/1.svg'} alt="" />
        </figure>
        <div className="best__prod-display">
          <img
            src={imgPath + '/images/bestseller/fragrance_fruit.png'}
            alt=""
          />
          <h3 className="best__prod-title">SAJMOG</h3>
          <span className="best__prod-price">NT $2890</span>
        </div>
        <button className="best__prod-btn">訂購</button>
      </div>
    </>
  )
}

export default ProductCard
