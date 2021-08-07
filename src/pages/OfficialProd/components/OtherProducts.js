import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import '../style.scss'
// import { imgPath } from '../../../config'
import { FiChevronRight } from 'react-icons/fi'

function OtherProducts() {
  const [recommendations, setRecommendations] = useState([])
  const { id } = useParams()
  // console.log(id)

  const getDataFromServer = async (id) => {
    const url = `http://localhost:6005/officialid/${id}/recommend`
    const response = await axios.get(url)
    const otherProducts = response.data
    console.log('response.data', otherProducts)
    setRecommendations(otherProducts)
  }

  useEffect(() => {
    getDataFromServer(id)
    // get data from server
    // set response to state
  }, [id])

  return (
    <>
      {recommendations.map((recommendation, i) => {
        return (
          <div className="official__product-wrapper">
            <Link
              to={`/official/${recommendation.id}`}
              onClick={window.scrollTo(0, 0)}
            >
              <div className="official__product-img-wrapper">
                <img
                  className="official__product-img"
                  // src={imgPath + '/images/official/cocktail_100ml.png'}
                  src={recommendation.img_id}
                  alt=""
                />
              </div>
            </Link>
            <div className="official__product">
              <span className="official__product-zh">
                {/* 莫西多 */}
                {recommendation.name_zh}{' '}
              </span>
              <span className="official__product-en">
                {/* Mojito */}
                {recommendation.name_en}
              </span>
              <span className="official__product-series">
                {/* 調酒香氛系列 */}
                {recommendation.series_name}
              </span>
              <span className="official__product-price">
                NT$ {recommendation.price}{' '}
              </span>
              <Link
                to={`/official/${recommendation.id}`}
                onClick={window.scrollTo(0, 0)}
              >
                <span className="official__product-view-more">
                  查看詳情 <FiChevronRight />{' '}
                </span>
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default OtherProducts
