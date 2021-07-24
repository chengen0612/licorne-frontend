import React from 'react'
import {
  FiX,
  FiRefreshCw,
  FiHeart,
  FiShoppingBag,
  FiUpload,
} from 'react-icons/fi'

import { imgPath } from '../../../config'

import './style.scss'

import CostList from './OfferList'

function ShowProduct(props) {
  const { productDetail, setProductDetail } = props
  // console.log(productDetail)

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

  const purchaseHandler = async () => {
    const url = 'http://localhost:6005/custom/addcart'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(productDetail),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    })
    // console.log(request)
    const response = await fetch(request)
  }

  return (
    <>
      <div className="product">
        {/* background blob */}
        <div className="pink-blob"></div>
        <div className="orange-blob"></div>
        <div className="yellow-blob"></div>
        {/* background blob end */}
        <div className="top-bar">
          <span>
            {serieName}&nbsp;&nbsp;{productId}
          </span>
        </div>
        <FiX className="close-btn" />
        <article className="description blob-orange">
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
        <button
          className="product__btn-reset"
          onClick={() => setProductDetail({})}
        >
          <FiRefreshCw /> 重做
        </button>
        <button className="product__btn-favorite">
          <FiHeart /> 收藏
        </button>
        <button className="product__btn-purchase" onClick={purchaseHandler}>
          <FiShoppingBag /> 訂購
        </button>
        <button className="product__btn-share">
          <FiUpload /> 分享
        </button>
      </div>
    </>
  )
}

export default ShowProduct
