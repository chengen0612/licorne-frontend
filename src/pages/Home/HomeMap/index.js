import React from 'react'
import './style.css'
import MyMap from './MyMap'
import MapController from './MapController'

function HomeMap() {
  return (
    <>
      <div className="map">
        <MyMap />
        <MapController />
      </div>
    </>
  )
}

export default HomeMap
