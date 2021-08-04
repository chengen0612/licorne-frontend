import React from 'react'
import { imgPath } from '../../../config/index'

export default function MapMarkerIcon(props) {
  const { data, setSelectedShop } = props
  return (
    <>
      <div
        role="button"
        style={{ transform: 'translate(-50%, -100%)' }}
        onClick={() => setSelectedShop(data)}
      >
        <img
          src={imgPath + '/images/course/map-markersolid.svg'}
          alt="marker"
          className="map__marker"
        />
      </div>
    </>
  )
}
