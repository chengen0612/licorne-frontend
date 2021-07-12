import React from 'react'
import { imgPath } from '../../config'

function SidebarSeries(props) {
  const { data, checkedSeries, setCheckedSeries, className } = props
  const fragrance = data.fragrance
  const publicPath = data.path

  return (
    <>
      <li
        onClick={() => {
          checkedSeries === ''
            ? setCheckedSeries(fragrance)
            : setCheckedSeries('')
        }}
      >
        <img className={className} src={imgPath + publicPath} alt={fragrance} />
      </li>
    </>
  )
}

export default SidebarSeries
