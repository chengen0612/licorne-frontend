import React, { useState } from 'react'

import './style.scss'

// components
import ProductCard from './ProductCard'
import Filters from './Filters'

function Bestseller() {
  const [checkedSerie, setCheckedSerie] = useState('果香調')
  const [sortBy, setSortBy] = useState('每月人氣銷售')

  return (
    <>
      <div className="best-wrapper">
        <h3 className="best__title">人氣熱銷排行榜</h3>
        <Filters
          checkedSerie={checkedSerie}
          setCheckedSerie={setCheckedSerie}
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
