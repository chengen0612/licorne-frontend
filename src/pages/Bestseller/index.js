import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './style.scss'

// components
import ProductCard from './ProductCard'
import Filters from './Filters'

function Bestseller() {
  const [checkedSeries, setCheckedSeries] = useState([])
  const [sortBy, setSortBy] = useState('每月人氣銷售')
  const [display, setDisplay] = useState([])
  // products not in top three
  const [otherProducts, setOtherProducts] = useState([])

  const getDataFromServer = async () => {
    const params = { params: { sortBy: sortBy, checkedSeries: checkedSeries } }
    const url = 'http://localhost:6005/bestseller'
    const response = await axios.get(url, params)
    const data = response.data
    const [first, second, third, ...others] = data

    setDisplay(data)
    setOtherProducts(others)
  }

  /* eslint-disable */
  useEffect(() => {
    getDataFromServer()
  }, [checkedSeries, sortBy])
  /* eslint-enable */

  return (
    <>
      {display.length > 0 && (
        <div className="best-wrapper">
          <h3 className="best__title">人氣熱銷排行榜</h3>
          <Filters
            checkedSeries={checkedSeries}
            setCheckedSeries={setCheckedSeries}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <div className="best__display-wrap">
            <ProductCard key={0} data={display[0]} />
          </div>
          <div className="best__display-wrap">
            <ProductCard key={1} data={display[1]} />
            <ProductCard key={2} data={display[2]} />
          </div>
          <div className="best__display-wrap">
            {otherProducts.map((item, i) => {
              return <ProductCard key={i + 3} data={item} />
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default Bestseller
