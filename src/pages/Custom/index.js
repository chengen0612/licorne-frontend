import React from 'react'
import {
  FiX,
  FiRefreshCw,
  FiSkipBack,
  FiCheckSquare,
  FiHeart,
  FiShoppingBag,
  FiUpload,
} from 'react-icons/fi'
import { imgPath } from '../../config'
import './style.scss'

function Custom() {
  return (
    <>
      <div className="custom">
        <div className="custom__progress-bar">
          <div className="custom__progress-note">前調</div>
          <div className="custom__progress-note">中調</div>
          <div className="custom__progress-note">後調</div>
        </div>
        <FiX className="custom__close-btn" />
        <p className="custom__description"></p>
        <div className="custom__bottle"></div>
        <div className="custom__fragrance-bar">
          <img
            className="custom__fragrance-fruit"
            src={imgPath + '/images/custom/sidebar_fruit.png'}
            alt=""
          />
          <img
            className="custom__fragrance-flower"
            src={imgPath + '/images/custom/sidebar_flower.png'}
            alt=""
          />
          <img
            className="custom__fragrance-leaf"
            src={imgPath + '/images/custom/sidebar_leaf.png'}
            alt=""
          />
          <img
            className="custom__fragrance-herb"
            src={imgPath + '/images/custom/sidebar_herb.png'}
            alt=""
          />
        </div>
        <button className="btn custom__btn-reset">
          <FiRefreshCw className="feather-m custom__icon"/>
          重做
        </button>
        <button className="btn custom__btn-goback">
          <FiSkipBack />
          退回
        </button>
        <button className="btn custom__btn-complete">
          <FiCheckSquare />
          完成
        </button>
      </div>
    </>
  )
}

export default Custom
