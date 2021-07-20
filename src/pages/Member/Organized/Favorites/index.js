import React from 'react'

import FavoriteCourse from './Course'
import FavoritePerfume from './Perfume'

// 這支 component 可以想像成會員最愛裡的 router
// 點選會員最愛上方的分頁後在這邊判斷並顯示對應的 component 給他
function Favorites() {
  return (
    <>
      <FavoriteCourse />
    </>
  )
}

export default Favorites
