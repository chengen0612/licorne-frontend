import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import Course from './Course'
import Perfume from './Perfume'

// 這支 component 可以想像成會員最愛裡的 router
// 點選會員最愛上方的分頁後在這邊判斷並顯示對應的 component 給他
function Favorites() {
  const [rightCard, setRightCard] = useState('香水')

  return (
    <>
      {rightCard === '香水' && (
        <Perfume setRightCard={setRightCard} rightCard={rightCard} />
      )}
      {rightCard === '課程' && (
        <Course setRightCard={setRightCard} rightCard={rightCard} />
      )}
    </>
  )
}

export default Favorites
