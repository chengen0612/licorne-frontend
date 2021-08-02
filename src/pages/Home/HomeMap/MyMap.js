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
          alt=""
          className="modal__marker"
        />
      </div>
    </>
  )
}

export default function MyMap(props) {
  const { displayShops, selectedShop } = props

  // json抓出經緯度
  const [jsonArrayLatLng, setJsonArrayLatLng] = useState([])

  // 經緯度預設值
  const [userLatLng, setUserLatLng] = useState({ lat: 0, lng: 0 })

  //console.log(JSON.stringify(userLatLng));

  //預設顯示資訊
  // const [shops, setShops] = useState([
  //   {
  //     course_place_name: '高雄民益店',
  //     course_place_address: '高雄市小港區民益路13號',
  //     course_place_phone: '07-8012255',
  //     course_place_lat: '22.5662669501168',
  //     course_place_lng: '120.34782427919656',
  //   },
  // ])

  // 顯示鄰近店鋪
  // const [show, setShow] = useState(false)
  // const clickShow = (e) => {
  //   setShow(true)
  //   const results = displayShops.filter((item) => {
  //     return item.course_place_address
  //   })
  //   setShops(results)
  // }

  // 自動定位目前位置
  const defaultProps = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 16,
  }

  // handle user's position
  useEffect(() => {
    if (navigator.geolocation) {
      // 執行要權限的function
      function error() {
        alert('無法取得你的位置')
      }

      // 使用者允許抓目前位置，回傳經緯度
      function success(position) {
        setUserLatLng({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      }

      // 跟使用者拿所在位置的權限
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      alert('Sorry, 你的裝置不支援地理位置功能。')
    }
  }, [])

  // handle data get from search result
  useEffect(() => {
    const latlngList = displayShops.map((v, i) => {
      return {
        course_place_lat: v.course_place_lat,
        course_place_lng: v.course_place_lng,
      }
    })
    setJsonArrayLatLng(latlngList)
  }, [displayShops])

  // reset center of the map
  useEffect(() => {
    if (Object.keys(selectedShop).length === 0) return
    const lat = selectedShop.course_place_lat
    const lng = selectedShop.course_place_lng
    setUserLatLng({ lat: lat, lng: lng })
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
          center={userLatLng}
          defaultZoom={defaultProps.zoom}
        >
          <MarkerIcon lat={userLatLng.lat} lng={userLatLng.lng} />
          {Object.keys(selectedShop).length === 0 ? (
            jsonArrayLatLng.map((value, index) => {
              return (
                <MarkerIcon
                  key={index}
                  lat={value.course_place_lat}
                  lng={value.course_place_lng}
                />
              )
            })
          ) : (
            <MarkerIcon
              lat={selectedShop.course_place_lat}
              lng={selectedShop.course_place_lng}
            />
          )}
          {}
        </GoogleMapReact>
      </div>
    </>
  )
}
