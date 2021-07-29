import React from 'react'

import './style.scss'

// components
import ProductCard from './ProductCard'
import Filters from './Filters'

function Bestseller() {
  return (
    <>
      <div className="best-wrapper">
        <h3 className="best__title">人氣熱銷排行榜</h3>
        <Filters />
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
