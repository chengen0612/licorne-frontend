import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import '../style.scss'
// import { imgPath } from '../../../config'
import { FiChevronRight } from 'react-icons/fi'

function OtherProduct() {
  const [recommend, setRecommend] = useState([])
  const { id } = useParams()
  console.log(id)

  const getDataFromServer = async (id) => {
    const url = `http://localhost:6005/officialid/${id}/recommend`
    const response = await axios.get(url)
    const otherProduct = response.data
    console.log('response.data', otherProduct)
    setRecommend(otherProduct)
  }

  console.log('recommend', recommend.id)

  useEffect(() => {
    getDataFromServer(id)
    // get data from server
    // set response to state
  }, [id])

  return (
    <>
      {/* FIXME: show three different series products with no repetition */}
      <div className="official__product-wrapper">
        <div className="official__product-img-wrapper">
          <img
            className="official__product-img"
            // src={imgPath + '/images/official/cocktail_100ml.png'}
            src={recommend.img_id}
            alt=""
          />
        </div>
        <div className="official__product">
          <span className="official__product-zh">
            {/* 莫西多 */}
            {recommend.name_zh}{' '}
          </span>
          <span className="official__product-en">
            {/* Mojito */}
            {recommend.name_en}
          </span>
          <span className="official__product-series">
            {/* 調酒香氛系列 */}
            {recommend.series_name}
          </span>
          <span className="official__product-price">
            NT$ {recommend.price}{' '}
          </span>
          <Link
            to={`/official/${recommend.id}`}
            onClick={window.scrollTo(0, 0)}
          >
            <span className="official__product-view-more">
              查看詳情 <FiChevronRight />{' '}
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default OtherProduct
