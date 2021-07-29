import React from 'react'

import { FiFilter, FiChevronDown } from 'react-icons/fi'
// import { IoSquareOutline, IoCheckboxOutline } from 'react-icons/io5'
import { GiWaterDrop } from 'react-icons/gi'

function Filters() {
  const series = ['果香調', '花香調', '草本調']
  const conditions = ['每月人氣銷售', '價格由低至高', '價格由高至低']

  return (
    <>
      <sidebar className="best__sidebar">
        <h5 className="best__sidebar-title">
          <FiFilter />
          &nbsp;&nbsp;篩選
        </h5>
        {/* select serie */}
        <div className="best__dropdown-menu">
          <div className="best__dropdown-title">
            香調篩選 <FiChevronDown />
          </div>
          <div className="best__dropdown-content">
            {series.map((value, i) => {
              return (
                <div key={i} className="best__checkbox-options">
                  <span className="best__checkbox-item">
                    <input type="checkbox" />
                    {value}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
        {/* align sort */}
        <div className="best__dropdown-menu">
          <div className="best__dropdown-title">
            排序依照 <FiChevronDown />
          </div>
          <div className="best__dropdown-content">
            {conditions.map((value, i) => {
              return (
                <div key={i} className="best__select-options">
                  {value}
                  <GiWaterDrop />
                </div>
              )
            })}
          </div>
        </div>
      </sidebar>
    </>
  )
}

export default Filters
