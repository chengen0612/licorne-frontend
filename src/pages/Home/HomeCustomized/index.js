import {
  Facebook,
  Instagram,
  MessageSquare,
  ArrowUpCircle,
} from 'react-feather'

import React from 'react'
import './style.css'
import customImage from './image/customImage.jpg'

function HomeCustomized() {
  return (
    <>
      <div
        className="
        homeCustomWrapper
        container
        d-flex
        flex-column
        align-items-center
        vh-100
      "
      >
        <h2 className="homeCustomWraperH2 homeCustom mt-5">客製屬於你的香水</h2>

        <h4 className="homeCustomWraperH4 homeCustom mt-2 mb-5">
          挑選、組合各種香氣原料，創造出你獨一無二的香味吧！
        </h4>
        <img
          className="homeCustomWrapperImage mt-4"
          src={customImage}
          alt="customPerfume"
        />
      </div>
      {/* <div className="homeCustomWrapper container vh-100"></div> */}
    </>
  )
}

export default HomeCustomized
