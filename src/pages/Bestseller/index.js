import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './style.scss'

// public components
import Spinner from './Spinner'
import SecondaryFooter from '../../components/SecondaryFooter'

// components
import ProductCard from './ProductCard'
import Filters from './Filters'

function Bestseller() {
  // state for spinner
  const [isAmount, setIsAmount] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // state for filters
  const [checkedSeries, setCheckedSeries] = useState([])
  const [sortBy, setSortBy] = useState('每月人氣銷售')

  // state for display
  const [display, setDisplay] = useState([])
  const [otherProducts, setOtherProducts] = useState([]) // products not in top three

  const getDataFromServer = async () => {
    const params = { params: { sortBy: sortBy, checkedSeries: checkedSeries } }
    const url = 'http://localhost:6005/bestseller'
    const response = await axios.get(url, params)
    const data = response.data
    const [first, second, third, ...others] = data

    setDisplay(data)
    setOtherProducts(others)
  }

  // first render
  useEffect(() => {
    getDataFromServer()
    setIsAmount(true)
  }, [])

  // update by filter options
  /* eslint-disable */
  useEffect(() => {
    if (isAmount === false) return
    setIsLoading(true)
    getDataFromServer()
    setTimeout(() => { setIsLoading(false) }, 500)
  }, [checkedSeries, sortBy])
  /* eslint-enable */

  const renderProducts = () => {
    return (
      <>
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
      </>
    )
  }

  return (
    <>
      {display.length > 0 && (
        <>
          {isLoading && <Spinner />}
          <div className="best-wrapper">
            <h3 className="best__title">人氣熱銷排行榜</h3>
            <Filters
              checkedSeries={checkedSeries}
              setCheckedSeries={setCheckedSeries}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            {!isLoading && renderProducts()}
          </div>
          <SecondaryFooter />
        </>
      )}
    </>
  )
}

export default Bestseller
