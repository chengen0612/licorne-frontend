import React from 'react'
import { imgPath } from '../../../../config'

function SidebarItems(props) {
  const {
    data,
    displaySeries,
    setDisplaySeries,
    selectedItems,
    setSelectedItems,
    selectedSeries,
    setSelectedSeries,
  } = props

  const seriesItems = data.filter((item) => {
    return item.fragrance_id === displaySeries
  })

  const setItems = (iId, fId) => {
    setSelectedItems([...selectedItems, iId])
    setSelectedSeries([...selectedSeries, fId])
    // 關閉材料選單
    setDisplaySeries('')
  }

  const handleDragStart = (e) => {
    const data = e.target.currentSrc
    e.dataTransfer.setData('image/png', data)
    // console.log(data)
  }

  return (
    <>
      <ul className="custom__items-menu">
        {seriesItems.map((item, i) => {
          return (
            <li
              key={item.id}
              onClick={() => setItems(item.id, item.fragrance_id)}
              // draggable="true"
            >
              <img
                className="custom__items-image"
                src={imgPath + item.ingredient_img}
                alt={item.name_zh}
                draggable="true"
                onDragStart={handleDragStart}
                onDrag={(e) => e.preventDefailt}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default SidebarItems
