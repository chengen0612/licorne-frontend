import React from 'react'
import axios from 'axios'
import { imgPath } from '../../../../config/index'

function HomeBestsellerProduct(props) {
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
    color,
    price,
    sequence,
  } = data

  const purchaseHandler = async () => {
    const url = 'http://localhost:6005/bestseller/addcart'
    const response = await axios.post(url, { data: data })
    const result = response.data
  }

  return (
    <div className="popular__oneProduct">
      <div className="popular__NoBox">
        <div className="popular__No">
          <img
            className="popular__NoImg"
            src={imgPath + `/images/bestseller/${sequence}.svg`}
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="popular__customProduct" style={{ background: color }}>
          <div>
            <figure className="popular__customImgBox">
              <img
                className="popular__customImg"
                src={imgPath + bottle_img}
                alt=""
              />
            </figure>
            <div>
              <h3 className="text-center popular__code">{cust_id}</h3>
              <p className="text-center popular__price">NT ${price}</p>
            </div>
          </div>
          <div className="popular__prod-shadow"></div>
          <div className="popular__prod-detail">
            {/* eslint-disable */}
            <span>前調：{top_zh} {top_id}</span>
            <span>中調：{mid_zh} {mid_id}</span>
            <span>後調：{base_zh} {base_id}</span>
            {/* eslint-enable */}
          </div>
        </div>
      </div>
      <button
        className="popular__buyBtn"
        style={{ background: color }}
        onClick={purchaseHandler}
      >
        訂購
      </button>
    </div>
  )
}
export default HomeBestsellerProduct
