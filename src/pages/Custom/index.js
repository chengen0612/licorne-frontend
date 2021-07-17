import React, { useState } from 'react'

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
        <ShowProduct />
      )}
    </>
  )
}

export default Custom
