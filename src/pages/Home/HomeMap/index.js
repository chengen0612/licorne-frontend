import React, { useState, useEffect } from 'react'
import './style.css'
import MyMap from './MyMap'
import MapCard from './MapCard'

function HomeMap() {
  const [shopList, setShopList] = useState([])
  const [displayShops, setDisplayShops] = useState([
    {
      course_place_name: '高雄民益店',
      course_place_address: '高雄市小港區民益路13號',
      course_place_phone: '07-8012255',
      course_place_lat: '22.5662669501168',
      course_place_lng: '120.34782427919656',
    },
  ])
  const [selectedShop, setSelectedShop] = useState({})

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
    setShopList(data.place)
    // console.log(data.place)
  }

  return (
    <>
      <div className="map">
        <MyMap
          displayShops={displayShops}
          selectedShop={selectedShop}
          setSelectedShop={setSelectedShop}
        />
        <MapCard
          shopList={shopList}
          displayShops={displayShops}
          setDisplayShops={setDisplayShops}
          setSelectedShop={setSelectedShop}
        />
      </div>
    </>
  )
}

export default HomeMap
