import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FiArrowRight } from 'react-icons/fi'

import './style.css'
import HomeBestsellerProduct from './components/HomeBestsellerProduct'

function HomeBestseller() {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    getDataFromServer()
  }, [])

  const getDataFromServer = async () => {
    const url = 'http://localhost:6005/home/bestseller'
    const response = await axios.get(url)
    const data = response.data
    // pick up top 4 to display on the screen
    let output = []
    for (let i = 0; i <= 3; i++) {
      output.push(data[i])
    }
    setProductData(output)
  }

  return (
    <>
      <article className="total">
        {/* <!-- 標題區塊 --> */}
        <div className="text-center mb-5">
          <div className="popular__title">人氣熱銷商品</div>
          <div className="popular__text mt-2">
            以下是最受歡迎的客製化商品，可以滑動到商品卡上查看香調組成
          </div>
        </div>
        {/* <!-- 標題區塊 --> */}
        {/* <!-- 商品區塊 --> */}
        <div className="popular__ranking">
          {productData.map((product, i) => {
            return <HomeBestsellerProduct key={i} data={product} />
          })}
        </div>
        {/* <!-- 商品區塊 --> */}
        {/* <!-- 前往排行榜區塊 --> */}
        <div className="d-flex justify-content-end">
          <Link className="popular__aArrow" to="/bestseller">
            前往排行榜 <FiArrowRight />
          </Link>
        </div>
      </article>
    </>
  )
}

export default HomeBestseller
