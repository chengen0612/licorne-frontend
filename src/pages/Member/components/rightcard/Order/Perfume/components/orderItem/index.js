import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'

function MemberLeftCard() {
  return (
    <>
      <div className="memberOrder__orderBox">
        <div className="memberOrder__titleBox">
          <p className="memberOrder__title">官方商品</p>
        </div>
        <div className="memberOrder__detailBox">
          <div className="memberOrder__detailLeftBox">
            <div className="memberOrder__orderStatusBox detail">
              <h4>訂單狀態</h4>
              <h4 className="memberOrder__status">已出貨</h4>
            </div>
            <div className="memberOrder__numberBox detail">
              <h4>訂單編號</h4>
              <h4 className="memberOrder__number">20210608168LCR</h4>
            </div>
            <div className="memberOrder__totalBox detail">
              <h4>訂單總計</h4>
              <h4 className="memberOrder__total">NT$ 4,500</h4>
            </div>
          </div>
          <div className="memberOrder__detailBtnBox">
            <button className="memberOrder__detailBtn">訂單詳情</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
