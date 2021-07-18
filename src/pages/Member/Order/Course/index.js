import React from 'react'
import './style.css'

// 左邊會員目錄元件
import MemberLeftCard from '../../components/leftcard/Order/Course'
import MemberRightCard from '../../components/rightcard/Order/Course'

function Member() {
  return (
    <>
      <div className="member__background">
        <MemberLeftCard />
        <MemberRightCard />
      </div>
    </>
  )
}

export default Member
