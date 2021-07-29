import React from 'react'

import { FiFilter, FiChevronDown } from 'react-icons/fi'
import { GiWaterDrop } from 'react-icons/gi'

function Filters(props) {
  const series = ['果香調', '花香調', '草本調']
  const conditions = ['每月人氣銷售', '價格由高至低', '價格由低至高']

  const { checkedSerie, setCheckedSerie, sortBy, setSortBy } = props

  const checkboxHandler = (e) => {
    const option = e.currentTarget.firstChild
    const value = option.innerText
    setCheckedSerie(value)
  }

  const conditionHandler = (e) => {
    const option = e.currentTarget.firstChild
    const value = option.innerText
    setSortBy(value)
  }

  return (
    <>
      <sidebar className="best__sidebar">
        <h5 className="best__sidebar-title">
          <FiFilter />
          &nbsp;&nbsp;篩選
        </h5>
        {/* select serie */}
        <section className="best__dropdown-menu">
          <div className="best__dropdown-title">香調篩選</div>
          <div className="best__dropdown-content">
            {series.map((value, i) => {
              return (
                <div
                  key={i}
                  className="best__checkbox-options"
                  onClick={checkboxHandler}
                >
                  <span className="best__checkbox-item">
                    <input
                      type="checkbox"
                      checked={checkedSerie === value && true}
                    />
                    {value}
                  </span>
                </div>
              )
            })}
          </div>
        </section>
        {/* sortby condition */}
        <section className="best__dropdown-menu">
          <div className="best__dropdown-title">排序依照</div>
          <div className="best__dropdown-content">
            {conditions.map((value, i) => {
              return (
                <div
                  key={i}
                  className="best__select-options"
                  onClick={conditionHandler}
                >
                  <span>{value}</span>
                  {value === sortBy && <GiWaterDrop />}
                </div>
              )
            })}
          </div>
        </section>
      </sidebar>
    </>
  )
}

export default Filters
