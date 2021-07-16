import React from 'react'
import { imgPath } from '../../config'

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

  return (
    <>
      <ul className="custom__items-menu">
        {seriesItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setItems(item.id, item.fragrance_id)}
            >
              <img
                className="custom__items-image"
                src={imgPath + item.ingredient_img}
                alt={item.name_zh}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default SidebarItems
