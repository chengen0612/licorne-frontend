import React from 'react'

import { imgPath } from '../../config'

function ProductCard(props) {
  const { data } = props
  const {
    cust_id,
    base_id,
    mid_id,
    top_id,
    base_zh,
    mid_zh,
    top_zh,
    bottle_img,
    price,
    sequence,
  } = data

  return (
    <>
      <div className="best__prod-card">
        <figure className="best__prod-sequence">
          <img src={imgPath + `/images/bestseller/${sequence}.svg`} alt="" />
        </figure>
        <div className="best__prod-display">
          <img src={imgPath + bottle_img} alt={cust_id} />
          <h3 className="best__prod-title">{cust_id}</h3>
          <span className="best__prod-price">NT ${price}</span>
        </div>
        <button className="best__prod-btn">訂購</button>
      </div>
    </>
  )
}

export default ProductCard
