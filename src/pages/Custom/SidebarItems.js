import React from 'react'
import { imgPath } from '../../config'
import items_data from './sidebar_items.json'

function SidebarItems(props) {
  const { checkedSeries } = props
  const seriesItems = items_data.filter((item) => {
    return item.fragrance_id === checkedSeries
  })
  return (
    <>
      <ul className="custom__sidebar-items">
        {seriesItems.map((item) => {
          return (
            <li key={item.id}>
              <img
                className="custom__item-image"
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
