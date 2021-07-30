import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './style.scss'

// components
import ProductCard from './ProductCard'
import Filters from './Filters'

function Bestseller() {
  const [checkedSeries, setCheckedSeries] = useState([])
  const [sortBy, setSortBy] = useState('每月人氣銷售')

  const getDataFromServer = async () => {
    const params = { params: { sortBy: sortBy, checkedSeries: checkedSeries } }
    const url = 'http://localhost:6005/bestseller'
    const response = await axios.get(url, params)
    console.log(response)
  }

  /* eslint-disable */
  useEffect(() => {
    getDataFromServer()
  }, [checkedSeries, sortBy])
  /* eslint-enable */

  return (
    <>
      <div className="best-wrapper">
        <h3 className="best__title">人氣熱銷排行榜</h3>
        <Filters
          checkedSeries={checkedSeries}
          setCheckedSeries={setCheckedSeries}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <div className="best__display-wrap">
          <ProductCard />
        </div>
        <div className="best__display-wrap">
          <ProductCard />
          <ProductCard />
        </div>
        <div className="best__display-wrap">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  )
}

export default Bestseller
