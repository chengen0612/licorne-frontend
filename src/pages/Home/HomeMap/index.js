import React, { useState, useEffect } from 'react'
import './style.css'
import MyMap from './MyMap'
import MapCard from './MapCard'

function HomeMap() {
  const [shopList, setShopList] = useState([])
  const [displayShops, setDisplayShops] = useState([
    {
      course_place_name: '台北店',
      course_place_address: '台北市松山區龍人北路七段55號',
      course_place_phone: '02-58851234',
      // course_place_lat: '22.5662669501168',
      // course_place_lng: '120.34782427919656',
    },
  ])

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
    // console.log(data.place)
    setShopList(data.place)
  }

  return (
    <>
      <div className="map">
        <MyMap displayShops={displayShops} />
        <MapCard
          shopList={shopList}
          displayShops={displayShops}
          setDisplayShops={setDisplayShops}
        />
      </div>
    </>
  )
}

export default HomeMap
