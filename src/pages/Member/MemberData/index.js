import React from 'react'
import './style.css'

// 左邊會員目錄元件
import MemberLeftCard from '../components/leftcard/MemberData'
import MemberRightCard from '../components/rightcard/MemberData'

function MemberData() {
  return (
    <>
      <div className="member__background">
        <MemberLeftCard />
        <MemberRightCard />
      </div>
    </>
  )
}

export default MemberData
