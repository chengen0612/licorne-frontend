import React, { useState, useEffect } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import './style.css'
import { data } from './data'
import HomeBestsellerProduct from './components/HomeBestsellerProduct'

function HomeBestseller() {
  const [productData, setProductData] = useState([])
  useEffect(() => {
    setProductData(data)
  }, [])
  return (
    <>
      <article className="total">
        {/* <!-- 標題區塊 --> */}
        <div className="text-center mt-5">
          <div className="popular__title">人氣熱銷商品</div>
          <div className="popular__text mt-4">
            以下是最受歡迎的客製化商品，可以滑動到商品卡上查看香調組成
          </div>
        </div>
        {/* <!-- 標題區塊 --> */}
        {/* <!-- 商品區塊 --> */}
        <div className="popular__ranking">
          {productData.map((product, i) => {
            return (
              <HomeBestsellerProduct
                key={i}
                Nopicture={product.Nopicture}
                picture={product.picture}
                code={product.code}
                price={product.price}
              />
            )
          })}
        </div>
        {/* <!-- 商品區塊 --> */}
        {/* <!-- 前往排行榜區塊 --> */}
        <div className="d-flex justify-content-end">
          <h4 className="mr-5">
            {/* TODO: 箭頭與上面客製產品卡元件對齊，或移至不會被進度條擋住的產品卡下方 完成 */}
            <a className="d-flex align-items-center popular__aArrow" href="/#">
              前往排行榜 <FiArrowRight size={25} />
            </a>
          </h4>
        </div>
      </article>
    </>
  )
}

export default HomeBestseller
