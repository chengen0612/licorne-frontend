import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'

function MemberLeftCard() {
  return (
    <>
      <div className="memberOrderPerfume__orderBox">
        <div className="memberOrderPerfume__titleBox">
          <p className="memberOrderPerfume__title">官方商品</p>
        </div>
        <div className="memberOrderPerfume__detailBox">
          <div className="memberOrderPerfume__detailLeftBox">
            <div className="memberOrderPerfume__orderStatusBox detail">
              <h4>課程時間</h4>
              <h4 className="memberOrderPerfume__status">
                2021-12-31 13:00 ~ 18:30
              </h4>
            </div>
            <div className="memberOrderPerfume__numberBox detail">
              <h4>課程編號</h4>
              <h4 className="memberOrderPerfume__number">20210608168LCR</h4>
            </div>
            <div className="memberOrderPerfume__totalBox detail">
              <h4>課程費用</h4>
              <h4 className="memberOrderPerfume__total">NT$ 1,200</h4>
            </div>
          </div>
          <div className="memberOrderPerfume__detailBtnBox">
            <button className="memberOrderPerfume__detailBtn">課程詳情</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
