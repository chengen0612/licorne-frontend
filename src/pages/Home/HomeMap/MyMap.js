import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'

// component
import MapMarkerIcon from './MapMarkerIcon'

export default function MyMap(props) {
  const { displayShops, selectedShop, setSelectedShop } = props

  // json 抓出經緯度
  const [markerList, setMarkerList] = useState([])
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 })

  // 自動定位目前位置
  const defaultProps = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 16,
  }

  // ask user's position
  useEffect(() => {
    if (navigator.geolocation) {
      function error() {
        alert('無法取得你的位置')
      }
      function success(position) {
        setMapCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      }
      // ask position
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      alert('Sorry, 你的裝置不支援地理位置功能。')
    }
  }, [])

  // handle map center and marker
  useEffect(() => {
    const markerList = displayShops.map((item, i) => {
      return {
        course_place_lat: item.course_place_lat,
        course_place_lng: item.course_place_lng,
        data: item,
      }
    })
    setMarkerList(markerList)
    // set up map center
    const lat = +displayShops[0].course_place_lat
    const lng = +displayShops[0].course_place_lng
    setMapCenter({ lat: lat, lng: lng })
  }, [displayShops])

  // reset map center after select shop
  useEffect(() => {
    if (Object.keys(selectedShop).length === 0) return
    const lat = +selectedShop.course_place_lat
    const lng = +selectedShop.course_place_lng
    setMapCenter({ lat: lat, lng: lng })
  }, [selectedShop])

  // 計算經緯度距離
  // function calcCrow(lat1, lon1, lat2, lon2) {
  //   var R = 6371 // km
  //   var dLat = toRad(lat2 - lat1)
  //   var dLon = toRad(lon2 - lon1)
  //   var lat1 = toRad(lat1)
  //   var lat2 = toRad(lat2)

  //   var a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  //   var d = R * c
  //   return d
  // }

  // Converts numeric degrees to radians
  // function toRad(Value) {
  //   return (Value * Math.PI) / 180
  // }
  return (
    <>
      <div className="home__map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={defaultProps.center}
          center={mapCenter}
          defaultZoom={defaultProps.zoom}
        >
          <MapMarkerIcon lat={mapCenter.lat} lng={mapCenter.lng} />
          {markerList.map((item, index) => {
            return (
              <MapMarkerIcon
                key={index}
                lat={item.course_place_lat}
                lng={item.course_place_lng}
                data={item.data}
                setSelectedShop={setSelectedShop}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    </>
  )
}
