import React from 'react'

import { FiFilter, FiChevronDown } from 'react-icons/fi'
import { GiWaterDrop } from 'react-icons/gi'

function Filters(props) {
  const series = ['果香調', '花香調', '綠香調']
  const conditions = ['每月人氣銷售', '價格由高至低', '價格由低至高']

  const { checkedSeries, setCheckedSeries, sortBy, setSortBy } = props

  const checkboxHandler = (e) => {
    const element = e.currentTarget.firstChild
    const option = element.innerText

    // create new array
    let newArr = [...checkedSeries]
    const index = newArr.findIndex((value) => value === option)
    index > -1 ? newArr.splice(index, 1) : newArr.push(option)

    setCheckedSeries(newArr)
  }

  const conditionHandler = (e) => {
    const element = e.currentTarget.firstChild
    const option = element.innerText
    setSortBy(option)
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
                      checked={checkedSeries.includes(value) && true}
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
