import React, { useState, useEffect } from 'react'
import './style.css'
import MyMap from './MyMap'
import MapCard from './MapCard'

function HomeMap() {
  const [placeLatLng, setPlaceLatLng] = useState([])

  useEffect(() => {
    getCourseFromServer()
  }, [])

  async function getCourseFromServer() {
    const url = `http://localhost:6005/course`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()

    setPlaceLatLng(data.place)
  }
  return (
    <>
      <div className="map">
        <MyMap placeLatLng={placeLatLng} />
        <MapCard />
      </div>
    </>
  )
}

export default HomeMap
