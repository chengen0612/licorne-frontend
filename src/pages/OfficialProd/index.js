import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import './style.scss'

function OfficialProd(props) {
  const params = props.match.params
  // this would be the path in the browser
  // http://localhost:3000/official/1
  const productId = params.id

  useEffect(() => {
    // get data from server
    // set response to state
  })

  return <></>
}

export default withRouter(OfficialProd)
