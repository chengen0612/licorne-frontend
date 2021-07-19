import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Pages(props) {
  const { pagenumber, setClickPage, setClick, click } = props
  const URL = `/official`
  return (
    <>
      <div className="page-box">
        <div className="page-group">
          {/* {click ? 'page-count' : 'selected page-count'} */}
          <div
            className="page-count"
            onClick={() => {
              setClickPage(pagenumber)
              setClick(true)
            }}
          >
            <Link to={URL}>{pagenumber}</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pages
