import React, { useState } from 'react'

import './style.scss'

import Process from './Process'
import Result from './Result'

function Customization() {
  const [productDetail, setProductDetail] = useState({})
  // console.log(Object.keys(productDetail))

  return (
    <>
      {Object.keys(productDetail).length === 0 ? (
        <Process setProductDetail={setProductDetail} />
      ) : (
        <Result
          productDetail={productDetail}
          setProductDetail={setProductDetail}
        />
      )}
    </>
  )
}

export default Customization
