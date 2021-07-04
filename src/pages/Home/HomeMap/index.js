import React from 'react'
import './style.css'
import MyMap from './MyMap'
import MapCard from './MapCard'

function HomeMap() {
  return (
    <>
      <div className="map">
        <MyMap />
        <MapCard />
      </div>
    </>
  )
}

export default HomeMap
