import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../../../../../config'

function MemberLeftCard() {
  return (
    <>
      <div className="memberOrderCourse__detailLeftItem">
        <div className="memberOrderCourse__courseImageBox">
          <img
            className="memberOrderCourse__courseImage"
            src={imgPath + '/images/member/courseImage.png'}
            alt=""
          />
        </div>
        <div className="memberOrderCourse__courseTextBox">
          <h4 className="memberOrderCourse__courseInfo">課程大綱</h4>
          <ul className="memberOrderCourse__courseList">
            <li>了解香水的分類知識</li>
            <li>了解香水並熟練製作</li>
            <li>了解創意調香師的角色</li>
            <li>了解香水平衡搭配的重要性</li>
            <li>100 支調香原料(精油, 原精, 單體香料)香氣&特性</li>
            <li>學習安全並自信地香水製造</li>
            <li>嗅覺訓練 & 共感覺訓練 Synesthesia Training</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
