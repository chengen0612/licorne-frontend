import React from 'react'
import { imgPath } from '../../config'

function SidebarSeries(props) {
  const { data, checkedSeries, setCheckedSeries } = props

  const className = [
    'custom__series-fruit',
    'custom__series-flower',
    'custom__series-leaf',
    'custom__series-herb',
  ]

  return (
    <>
      <ul className="custom__sidebar-series">
        {data.map((item, i) => {
          return (
            <li
              onClick={() => {
                checkedSeries === item.id
                  ? setCheckedSeries('')
                  : setCheckedSeries(item.id)
              }}
            >
              <img
                className={className[i]}
                src={imgPath + item.series_img}
                alt={item.name_zh}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default SidebarSeries
