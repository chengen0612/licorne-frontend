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
  const [siblingItem, setSiblingItem] = useState([])
  const { id } = useParams()
  // console.log(id)

  const getDataFromServer = async (id) => {
    const url = `http://localhost:6005/officialid/${id}`
    const response = await axios.get(url)
    const productInfo = response.data
    const product = productInfo[0]
    const sibling = productInfo[1]
    console.log('product info', product)
    console.log('diff vol + price', sibling)
    setItem(product)
    setSiblingItem(sibling)
  }

  useEffect(() => {
    getDataFromServer(id)
    // get data from server
    // set response to state
  }, [id])

  return (
    <>
      <div className="pageWrapper">
        <MainProduct id={id} item={item} siblingItem={siblingItem} />
        <Recommendation item={item} />
      </div>
    </>
  )
}

export default withRouter(OfficialProd)
