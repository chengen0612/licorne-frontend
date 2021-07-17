import React, { useState } from 'react'

import MakeProduct from './MakeProduct'
import ShowProduct from './ShowProduct'

function Custom() {
  const [productDetail, setProductDetail] = useState({})

  return <>{!productDetail.length ? <MakeProduct /> : <ShowProduct />}</>
}

export default Custom
