import {
  FiFacebook,
  FiInstagram,
  FiMessageSquare,
  FiArrowUpCircle,
} from 'react-icons/fi'

import React from 'react'
import './style.css'

function HomeAside() {
  return (
    <>
      <div className="sidePagination d-flex flex-column justify-content-center">
        <div className="sidePaginationTitle text-center">
          <h4 className="mb-1 homeCustom">custom fragrance</h4>
        </div>
        <div className="sidePaginationButtons d-flex">
          <a href="#/"></a>
          <a href="#/"></a>
          <a href="#/"></a>
          <a href="#/"></a>
          <a href="#/"></a>
        </div>
      </div>
      {/* TODO: 請改用公版裡的變數 feather-s, feather-m 調整，或自己將 stroke-width 改為 1.5 */}
      <div className="sideFeatherIcon d-flex flex-column justify-content-between">
        <a className="feather-m" href="#/">
          <FiFacebook />
        </a>
        <a className="feather-m" href="#/">
          <FiInstagram />
        </a>
        <a className="feather-m" href="#/">
          <FiMessageSquare />
        </a>
        <a href="#/">
          <FiArrowUpCircle />
        </a>
      </div>
    </>
  )
}

export default HomeAside
