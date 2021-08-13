import React from 'react'
import { baseUrl } from '../../../../config'

function SidebarSeries(props) {
  const { data, displaySerie, setDisplaySerie, selectedItems, selectedSeries } =
    props

  const className = [
    'cust__series-fruit',
    'cust__series-flower',
    'cust__series-leaf',
    'cust__series-herb',
  ]

  const displayHandler = (item) => {
    const id = item.id
    // 選了幾個材料
    if (selectedItems.length === 3) return
    // 有沒有選過這個系列
    if (selectedSeries.includes(id)) return
    // 控制收合
    displaySerie === id ? setDisplaySerie('') : setDisplaySerie(id)
  }

  return (
    <>
      <ul className="cust__series-menu">
        {data.map((item, i) => {
          return (
            <li
              key={item.id}
              // className={displaySerie === item.id && 'active'}
              onClick={() => {
                displayHandler(item)
              }}
            >
              <img
                className={
                  displaySerie === item.id
                    ? `${className[i]} active`
                    : `${className[i]}`
                }
                src={baseUrl + item.series_img}
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
