import React from 'react'
import { imgPath } from '../../config'

function SidebarSeries(props) {
  const { data, checkedSeries, setCheckedSeries, className } = props
  const fragranceId = data.id
  const fragranceName = data.name_zh
  const publicPath = data.series_img

  return (
    <>
      <li
        onClick={() => {
          // checkedSeries === ''
          // ? setCheckedSeries(fragranceId)
          //   : setCheckedSeries('')
          checkedSeries === fragranceId
            ? setCheckedSeries('')
            : setCheckedSeries(fragranceId)
        }}
      >
        <img
          className={className}
          src={imgPath + publicPath}
          alt={fragranceName}
        />
      </li>
    </>
  )
}

export default SidebarSeries
