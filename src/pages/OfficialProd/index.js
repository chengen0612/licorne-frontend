import React, { useState, useEffect } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import axios from 'axios'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.css'
// import { imgPath } from '../../config'
import Recommendation from './Recommendation'
import MainProduct from './MainProduct'

function OfficialProd() {
  const [item, setItem] = useState([])
  const { id } = useParams()
  console.log(id)

  const getDataFromServer = async (id) => {
    const url = `http://localhost:6005/officialid/${id}`
    const response = await axios.get(url)
    const productInfo = response.data
    console.log(response.data)
    setItem(productInfo)
  }

  useEffect(() => {
    getDataFromServer(id)
    // get data from server
    // set response to state
  }, [id])

  return (
    <>
      <div className="pageWrapper">
        <MainProduct item={item} />
        <Recommendation item={item} />
      </div>
    </>
  )
}

export default withRouter(OfficialProd)
