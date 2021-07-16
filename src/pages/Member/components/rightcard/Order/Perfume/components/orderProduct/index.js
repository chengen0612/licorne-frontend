import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../../../../../../config'

function MemberLeftCard() {
  return (
    <>
      <div className="memberOrder__productBox">
        <div className="memberOrder__productImageBox">
          <img
            className="memberOrder__productImage"
            src={imgPath + '/images/member/cocktail_100ml.png'}
            alt=""
          />
        </div>
        <div className="memberOrder__productNameBox">
          <h5 className="memberOrder__productNameTitle cnName">玉露綠茶</h5>
          <h6 className="memberOrder__productNameTitle enName">
            Gyokuro Green Tea
          </h6>
          <h6 className="memberOrder__productNameTitle series">茗茶香氛系列</h6>
        </div>
        <div className="memberOrder__productCapacityBox">
          <h5 className="memberOrder__productCapacity">100ml</h5>
        </div>
        <div className="memberOrder__productCountBox">
          <h5 className="memberOrder__productCount">x 1</h5>
        </div>
        <div className="memberOrder__productPriceBox">
          <h5 className="memberOrder__productPrice">NT$ 4,800 </h5>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
