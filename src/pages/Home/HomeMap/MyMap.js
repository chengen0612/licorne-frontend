import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import { imgPath } from '../../../config/index'

const MarkerIcon = () => {
  return (
    <>
      <div
        // className="modal__marker-box"
        style={{ transform: 'translate(-50%, -100%)' }}
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

export default function MyMap(props) {
  const { displayShops, selectedShop } = props

  // json 抓出經緯度
  const [latLngList, setLatLngList] = useState([])
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
    const latLngList = displayShops.map((v, i) => {
      return {
        course_place_lat: v.course_place_lat,
        course_place_lng: v.course_place_lng,
      }
    })
    setLatLngList(latLngList)
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
          <MarkerIcon lat={mapCenter.lat} lng={mapCenter.lng} />
          {latLngList.map((value, index) => {
            return (
              <MarkerIcon
                key={index}
                lat={value.course_place_lat}
                lng={value.course_place_lng}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    </>
  )
}
