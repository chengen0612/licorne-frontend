import React, { useState } from 'react'

import './style.scss'

import MakeProduct from './MakeProduct'
import ShowProduct from './ShowProduct'

function Custom() {
  const [productDetail, setProductDetail] = useState({})
  // console.log(Object.keys(productDetail))

  return (
    <>
      {Object.keys(productDetail).length === 0 ? (
        <MakeProduct setProductDetail={setProductDetail} />
      ) : (
        <ShowProduct
          productDetail={productDetail}
          setProductDetail={setProductDetail}
        />
      )}
    </>
  )
}

export default Custom
