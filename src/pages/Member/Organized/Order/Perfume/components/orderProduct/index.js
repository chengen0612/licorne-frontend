import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../../../../../config'

function MemberLeftCard() {
  return (
    <>
      <div className="memberOrderPerfume__productBox">
        <div className="memberOrderPerfume__productImageBox">
          <img
            className="memberOrderPerfume__productImage"
            src={imgPath + '/images/member/cocktail_100ml.png'}
            alt=""
          />
        </div>
        <div className="memberOrderPerfume__productNameBox">
          <h5 className="memberOrderPerfume__productNameTitle cnName">
            玉露綠茶
          </h5>
          <h6 className="memberOrderPerfume__productNameTitle enName">
            Gyokuro Green Tea
          </h6>
          <h6 className="memberOrderPerfume__productNameTitle series">
            茗茶香氛系列
          </h6>
        </div>
        <div className="memberOrderPerfume__productCapacityBox">
          <h5 className="memberOrderPerfume__productCapacity">100ml</h5>
        </div>
        <div className="memberOrderPerfume__productCountBox">
          <h5 className="memberOrderPerfume__productCount">x 1</h5>
        </div>
        <div className="memberOrderPerfume__productPriceBox">
          <h5 className="memberOrderPerfume__productPrice">NT$ 4,800 </h5>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
