import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.css'
// import { imgPath } from '../../config'
import Recommendation from './Recommendation'
import MainProduct from './MainProduct'

function OfficialProd(props) {
  const [item, setItem] = useState([])
  const getDataFromServer = async () => {
    const params = props.match.params
    const url = 'http://localhost:6005/officialid'
    const response = await axios.get(url, params)
    console.log(response)
    // this would be the path in the browser
    // http://localhost:3000/official/1
    // const productId = params.id
    const product = response.data.product
    console.log('product info', product)
    setItem(product)
  }

  useEffect(() => {
    getDataFromServer()
    // get data from server
    // set response to state
  }, [])

  return (
    <>
      <div className="pageWrapper">
        <MainProduct item={item} />
        <Recommendation />
      </div>
    </>
  )
}

export default withRouter(OfficialProd)
