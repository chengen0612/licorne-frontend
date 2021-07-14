import React from 'react'
import { imgPath } from '../../config'
import { FiX } from 'react-icons/fi'

function CustomOrder() {
  return (
    <>
      <div className="checkout__custom-box-top pl-4 pt-3 pb-2">
        <label className="checkout__custom-box-title">
          <input
            className="checkout__custom-box-checkbox-all"
            type="checkbox"
          />
          客製商品 (2)
        </label>
      </div>
      <div className="checkout__custom-box-list p-4">
        <input className="checkout__custom-box-checkbox" type="checkbox" />
        <div className="checkout__custom-box-img-wrapper">
          <img
            className="checkout__custom-box-img"
            src={imgPath + '/images/custom/fragrance_flower.png'}
            alt=""
          />
        </div>
        <div className="checkout__custom-box-details w-25 pl-4">
          <span className="checkout__custom-box-name-zh">MTLALM</span>
          <span className="checkout__custom-box-product-ingredient">
            薄荷、薰衣草、檸檬
          </span>
          <span className="checkout__custom-box-product-fragrance">花香調</span>
          <span className="checkout__custom-box-product-volume">100ML</span>
        </div>
        <span className="checkout__custom-box-product-price">NT $2000</span>
        <input className="box-quantity" type="number" min="1" />
        <span className="checkout__custom-box-product-subtotal">NT $6000</span>
        {/* TODO: delete product detail */}
        <FiX className="feather-s" role="button" />
      </div>
    </>
  )
}

export default CustomOrder
