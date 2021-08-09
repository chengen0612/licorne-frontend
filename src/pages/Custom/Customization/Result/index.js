import React from 'react'
import { Link } from 'react-router-dom'

import {
  FiX,
  FiRefreshCw,
  FiHeart,
  FiShoppingBag,
  FiUpload,
} from 'react-icons/fi'

import { imgPath } from '../../../../config'
import myswal from '../../../../utils/sweetalert'
import authentication from '../../../../utils/authentication'

import './style.scss'

import CostList from './OfferList'

function Result(props) {
  const { productDetail, setProductDetail } = props
  // console.log(productDetail)

  const {
    topNote,
    middleNote,
    baseNote,
    serieName,
    serieDescription,
    productCode,
    productImage,
  } = productDetail

  const purchaseHandler = async () => {
    const executor = async (token) => {
      const url = 'http://localhost:6005/custom/addcart'
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(productDetail),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: 'Bearer ' + token,
        }),
      })
      // console.log(request)
      const response = await fetch(request)
      const result = await response.json()

      if (result) myswal.addCart()
    }

    authentication(executor)
  }

  const collectHandler = async () => {
    const executor = async (token) => {
      const url = 'http://localhost:6005/custom/addfavorite'
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(productDetail),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: 'Bearer ' + token,
        }),
      })
      // console.log(request)
      const response = await fetch(request)
      const result = await response.json()

      if (result) myswal.addCollection()
    }

    authentication(executor)
  }

  return (
    <>
      <div className="cust">
        {/* background blob */}
        <div className="cust__pink-blob"></div>
        <div className="cust__orange-blob"></div>
        <div className="cust__yellow-blob"></div>
        {/* background blob end */}
        <div className="cust-res__top-bar">
          <span>
            {serieName}&nbsp;&nbsp;{productCode}
          </span>
        </div>
        <Link to="/">
          <FiX className="cust__close-btn" />
        </Link>
        <article className="cust__description blob-orange">
          <p className="cust__description__title">成分說明</p>
          <span className="cust__description__content">{serieDescription}</span>
        </article>
        <figure className="cust-res__image-top">
          <img
            className="cust-res__image"
            src={imgPath + productImage}
            alt=""
          />
        </figure>
        <CostList
          topNote={topNote}
          middleNote={middleNote}
          baseNote={baseNote}
        />
        <button
          className="cust-res__btn-reset"
          onClick={() => setProductDetail({})}
        >
          <FiRefreshCw /> 重做
        </button>
        <button className="cust-res__btn-favorite" onClick={collectHandler}>
          <FiHeart /> 收藏
        </button>
        <button className="cust-res__btn-purchase" onClick={purchaseHandler}>
          <FiShoppingBag /> 訂購
        </button>
        {/* <button className="cust-res__btn-share">
          <FiUpload /> 分享
        </button> */}
      </div>
    </>
  )
}

export default Result
