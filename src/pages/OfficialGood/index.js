import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function OfficialGood(props) {
  const params = props.match.params
  const productId = params.id

  useEffect(() => {
    // get data from server
    // set response to state
  })

  return <></>
}

export default withRouter(OfficialGood)
