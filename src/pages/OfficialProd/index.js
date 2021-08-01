import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.css'
// import { imgPath } from '../../config'
import Recommendation from './Recommendation'
import MainProduct from './MainProduct'

const getDataFromServer = async () => {
  const params = { params: { officialId: 1 } }
  const url = 'http://localhost:6005/officialid'
  const response = await axios.get(url, params)
  console.log(response)
}

function OfficialProd(props) {
  const [item, setItem] = useState([])

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
