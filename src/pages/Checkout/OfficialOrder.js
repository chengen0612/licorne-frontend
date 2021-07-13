import React from 'react'
// import { imgPath } from '../../config'
import { FiX } from 'react-icons/fi'

function OfficialOrder() {
  return (
    <>
      <div className="checkout__official-box-top pl-4 pt-3 pb-2">
        <label className="checkout__official-box-title">
          <input
            className="checkout__official-box-checkbox-all"
            type="checkbox"
          />
          官方商品 (3)
        </label>
      </div>
      <div className="checkout__official-box-list p-4">
        <input className="checkout__official-box-checkbox" type="checkbox" />
        <div className="checkout__official-box-img-wrapper">
          <img
            className="checkout__official-box-img"
            // src={imgPath + '/images/official/animal_100ml.png'}
            alt=""
          />
        </div>
        <div className="checkout__official-box-details w-25 pl-4">
          <span className="checkout__official-box-name-zh">夜鶯</span>
          <span className="checkout__official-box-product-name-en">
            Nightingale
          </span>
          <span className="checkout__official-box-product-series">
            動物香氛系列
          </span>
          <span className="checkout__official-box-product-volume">100ML</span>
        </div>
        <span className="checkout__official-box-product-price">NT $2000</span>
        <input className="box-quantity" type="number" min="1" />
        <span className="checkout__official-box-product-subtotal">
          NT $6000
        </span>
        <FiX className="feather-s" />
      </div>
    </>
  )
}

export default OfficialOrder
