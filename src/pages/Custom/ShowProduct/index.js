import React from 'react'
import { FiX, FiHeart, FiShoppingBag, FiUpload } from 'react-icons/fi'

import { imgPath } from '../../../config'

import CostList from './OfferList'

function ShowProduct(props) {
  const { productDetail } = props
  console.log(productDetail)
  const {
    noteIdList,
    topNote,
    middleNote,
    baseNote,
    serieId,
    serieName,
    serieDescription,
    productId,
    productImage,
  } = productDetail

  return (
    <>
      <div className="custom">
        <div className="top-bar">
          <span>
            {serieName}&nbsp;&nbsp;{productId}
          </span>
        </div>
        <FiX className="custom__close-btn" />
        <article className="description">
          <p className="description__title">成分說明</p>
          <span className="description__content">{serieDescription}</span>
        </article>
        <figure className="product__image-top">
          <img className="product__image" src={imgPath + productImage} alt="" />
        </figure>
        <CostList
          topNote={topNote}
          middleNote={middleNote}
          baseNote={baseNote}
        />
      </div>
    </>
  )
}

export default ShowProduct
