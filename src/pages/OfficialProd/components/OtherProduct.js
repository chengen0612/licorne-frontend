import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import '../style.scss'
import { imgPath } from '../../../config'
import { FiChevronRight } from 'react-icons/fi'

function OtherProduct() {
  const [recommend, setRecommend] = useState([])
  const product = [
    {
      name_zh: '莫西多',
      name_en: 'Mojito',
      fragrance: '調酒香氛系列',
      price: '2,500',
    },
  ]

  // const { series } = useParams()
  // console.log(series)

  const getDataFromServer = async () => {
    const url = 'http://localhost:6005/officialid/'
    const response = await axios.get(url)
    const otherProduct = response.data
    console.log('response.data', otherProduct)
    setRecommend(otherProduct)
  }

  console.log('recommend', recommend.id)

  useEffect(() => {
    getDataFromServer()
    // get data from server
    // set response to state
  }, [])

  // useEffect(() => {
  //   getDataFromServer(series)
  //   // get data from server
  //   // set response to state
  // }, [series])

  return (
    <>
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
          <span className="official__product-fragrance">
            調酒香氛系列
            {recommend.fragrance}
          </span>
          <span className="official__product-price">
            NT$ {recommend.price}{' '}
          </span>
          <Link to={`/official/${recommend.id}`}>
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
