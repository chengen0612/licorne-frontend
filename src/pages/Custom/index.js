import React from 'react'
import { FiX } from 'react-icons/fi'
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
        <div className="custom__fragrance-bar">
          {/* <img className="custom__fragrance-fruit" alt="" />
          <img className="custom__fragrance-flower" alt="" />
          <img className="custom__fragrance-leaf" alt="" />
          <img className="custom__fragrance-herb" alt="" /> */}
          <img
            className="custom__fragrance-symbol"
            src={imgPath + '/images/custom/sidebar_flower.png'}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Custom
