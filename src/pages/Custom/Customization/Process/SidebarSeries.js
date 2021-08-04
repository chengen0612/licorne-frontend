import React from 'react'
import { imgPath } from '../../../../config'

function SidebarSeries(props) {
  const {
    data,
    displaySeries,
    setDisplaySeries,
    selectedItems,
    selectedSeries,
  } = props

  const className = [
    'custom__series-fruit',
    'custom__series-flower',
    'custom__series-leaf',
    'custom__series-herb',
  ]

  const displayHandler = (item) => {
    const id = item.id
    // 選了幾個材料
    if (selectedItems.length === 3) return
    // 有沒有選過這個系列
    if (selectedSeries.includes(id)) return
    // 控制收合
    displaySeries === id ? setDisplaySeries('') : setDisplaySeries(id)
  }

  return (
    <>
      <ul className="custom__series-menu">
        {data.map((item, i) => {
          return (
            <li
              key={item.id}
              // className={displaySeries === item.id && 'active'}
              onClick={() => {
                displayHandler(item)
              }}

            >
              <img
                // className={className[i]}
                className={
                  displaySeries === item.id
                    ? `${className[i]} active`
                    : `${className[i]}`
                }
                src={imgPath + item.series_img}
                alt={item.name_zh}
                draggable="false"
                onDragStart={(e) => e.preventDefailt}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default SidebarSeries
