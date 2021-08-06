import React, { useState, useEffect } from 'react'

import './style.scss'

// components
import Spinner from './Spinner'
import Process from './Process'
import Result from './Result'

function Customization() {
  const [didMount, setDidMount] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [productDetail, setProductDetail] = useState({})

  useEffect(() => {
    setDidMount(true)
  }, [])

  // handle spinner
  useEffect(() => {
    if (didMount === false) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [productDetail])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : Object.keys(productDetail).length === 0 ? (
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
