import React from 'react'
import './style.css'
import { imgPath } from '../../../config'
import { Link } from 'react-router-dom'

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
        vh-100"
      >
        <h2 className="homeCustomWraperH2 homeCustom mt-5">客製屬於你的香水</h2>
        <h4 className="homeCustomWraperH4 homeCustom mt-2 mb-5">
          挑選、組合各種香氣原料，點擊香水瓶來創造出你獨一無二的香味吧！
        </h4>
        <Link to="/custom/entrance" className="fade-in-image">
          <img
            className="homeCustomWrapperImage mt-4"
            src={imgPath + '/images/home/customImage.jpg'}
            alt="customPerfume"
            role="button"
          />
        </Link>
      </div>
      {/* <div className="homeCustomWrapper container vh-100"></div> */}
    </>
  )
}

export default HomeCustomized
