import React from 'react'
// import { imgPath } from '../../config'
import { FiX } from 'react-icons/fi'

function CourseOrder() {
  return (
    <>
      <div className="checkout__course-box-top pl-4 pt-3 pb-2">
        <label className="checkout__course-box-title">
          <input
            className="checkout__course-box-checkbox-all"
            type="checkbox"
          />
          工作方課程 (1)
        </label>
      </div>
      <div className="checkout__course-box-list p-4">
        <input className="checkout__course-box-checkbox" type="checkbox" />
        <div className="checkout__course-box-img-wrapper">
          <img
            className="checkout__course-box-img"
            // src={imgPath + '/images/course/perfume.jpeg'}
            alt=""
          />
        </div>
        <div className="checkout__course-box-details w-25 pl-4">
          <span className="checkout__course-box-name-zh">香水調製工作坊</span>
          <span className="checkout__course-box-product-package">一日體驗</span>
          <span className="checkout__course-box-product-date">2021/06/22</span>
          <span className="checkout__course-box-product-time">
            09:00 - 17:00
          </span>
          <span className="checkout__course-box-product-place">高雄小港店</span>
        </div>
        <span className="checkout__course-box-product-price">NT $1200</span>
        <span className="checkout__course-box-product-quantity">單人</span>
        <span className="checkout__course-box-product-subtotal">NT $1200</span>
        <FiX className="feather-s" />
      </div>
    </>
  )
}

export default CourseOrder
