import React, { useState, useRef, useEffect } from 'react'
import { FiSearch, FiMapPin, FiX } from 'react-icons/fi'
import { imgPath } from '../../../config'
import GoogleMapReact from 'google-map-react'
import CourseClassRoom from './CourseClassRoom'

//MarkerIcon樣式

const MarkerIcon = (props) => {
  return (
    <>
      <div
        className="modal__marker-box"
        style={{ transform: 'translate(-50%, -100%)' }}
      >
        <p className="modal__marker-name">{props.classRoom}</p>
        <img
          src={imgPath + '/images/course/map-markersolid.svg'}
          alt=""
          className="modal__marker"
        />
      </div>
      {/* <FiMapPin className="modal__marker" /> */}
    </>
  )
}
const MarkerCurentPosition = (props) => {
  return (
    <>
      <div
        className="modal__marker-box"
        style={{ transform: 'translate(-50%, -100%)' }}
      >
        <p className="modal__marker-name">{props.classRoom}</p>
        <img
          src={imgPath + '/images/course/map-markerCurentPosition.svg'}
          alt=""
          className="modal__marker"
        />
      </div>
      {/* <FiMapPin className="modal__marker" /> */}
    </>
  )
}

function CourseMapModal(props) {
  //設定選擇店鋪
  const { closeModalHandler, setSelectForm, placeLatLng } = props

  // json抓出經緯度
  const [jsonArrayLatLng, setJsonArrayLatLng] = useState([])

  // 經緯度預設值
  // const [lat, setLat] = useState(0);
  // const [lng, setLng] = useState(0);
  const [defaultLatLng, setDefaultLatLng] = useState({ lat: 0, lng: 0 })

  // 判斷有沒有執行過搜尋功能
  const [search, setSearch] = useState(false)
  //預設顯示資訊
  const [shops, setShops] = useState([
    {
      course_place_name: '高雄民益店',
      course_place_address: '高雄市小港區民益路13號',
      course_place_phone: '07-8012255',
      course_place_lat: 22.5662669501168,
      course_place_lng: 120.34782427919656,
    },
  ])

  //搜尋功能
  const queryString = useRef(null)

  const queryHandler = () => {
    const keyword = queryString.current.value
    if (keyword.length === 0) return
    const results = placeLatLng.filter((item) => {
      return item.course_place_address.includes(keyword)
    })
    setShops(results)
    setSearch(true)
  }

  //自動定位目前位置
  const defaultProps = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 16,
  }

  // 抓取經緯度
  useEffect(() => {
    if (navigator.geolocation) {
      // 執行要權限的function
      function error() {
        alert('無法取得你的位置')
      }

      // 使用者允許抓目前位置，回傳經緯度
      function success(position) {
        // setLat(position.coords.latitude);
        // setLng(position.coords.longitude);
        setDefaultLatLng({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      }

      // 跟使用者拿所在位置的權限
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      alert('Sorry, 你的裝置不支援地理位置功能。')
    }

    const latlngList = placeLatLng.map((v, i) => {
      return {
        course_place_name: v.course_place_name,
        course_place_lat: +v.course_place_lat,
        course_place_lng: +v.course_place_lng,
      }
    })
    setJsonArrayLatLng(latlngList)
  }, [])
  // 計算經緯度距離
  function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371 // km
    var dLat = toRad(lat2 - lat1)
    var dLon = toRad(lon2 - lon1)
    var lat1Rad = toRad(lat1)
    var lat2Rad = toRad(lat2)

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) *
        Math.sin(dLon / 2) *
        Math.cos(lat1Rad) *
        Math.cos(lat2Rad)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    var d = R * c
    return d
  }

  // Converts numeric degrees to radians
  function toRad(Value) {
    return (Value * Math.PI) / 180
  }

  // 顯示鄰近店鋪
  const [show, setShow] = useState(false)
  const clickShow = (e) => {
    setShow(true)
    const results = placeLatLng.filter((value, index) => {
      return (
        calcCrow(
          defaultLatLng.lat,
          defaultLatLng.lng,
          value.course_place_lat,
          value.course_place_lng
        ) < 2
      )
    })
    setShops(results)
  }

  return (
    <>
      <div className="modal__card">
        <FiX className="icon__fix" onClick={closeModalHandler} />
        <h4 className="modal__title">請選擇取貨店鋪</h4>

        <div className="modal__search">
          <input
            type="button"
            className="modal__btn"
            value="顯示鄰近店舖"
            onClick={clickShow}
          />

          <div className="modal__map-search">
            <figure className="map__map-icon-top">
              <FiMapPin className="feather-s" />
            </figure>
            <input
              type="text"
              placeholder="縣市、鄉鎮"
              className="map__input"
              ref={queryString}
              onKeyPress={(event) => event.key === 'Enter' && queryHandler()}
            />
            <figure className="map__search-icon-top" onClick={queryHandler}>
              <FiSearch className="map__search-icon feather-m" />
            </figure>
          </div>
        </div>

        <div className="modal__con__map d-flex justify-content-center">
          <div className="modal__content">
            {show && shops.length === 0 && (
              <p className="NoPalce">附近沒有鄰近店鋪</p>
            )}
            {shops.map((shop, i) => {
              return (
                <CourseClassRoom
                  key={i}
                  name={shop.course_place_name}
                  address={shop.course_place_address}
                  phone={shop.course_place_phone}
                  setSelectForm={setSelectForm}
                  clickLatLng={() => {
                    setDefaultLatLng({
                      lat: +shop.course_place_lat,
                      lng: +shop.course_place_lng,
                    })
                  }}
                />
              )
            })}
          </div>
          <div className="modal__map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: '',
              }}
              defaultCenter={defaultProps.center}
              center={defaultLatLng}
              defaultZoom={defaultProps.zoom}
            >
              <MarkerCurentPosition
                lat={defaultLatLng.lat}
                lng={defaultLatLng.lng}
              />

              {show &&
                jsonArrayLatLng
                  .filter((value, index) => {
                    return (
                      calcCrow(
                        defaultLatLng.lat,
                        defaultLatLng.lng,
                        value.course_place_lat,
                        value.course_place_lng
                      ) < 2
                    )
                  })
                  .map((value, index) => {
                    return (
                      <MarkerIcon
                        key={index}
                        classRoom={value.course_place_name}
                        lat={value.course_place_lat}
                        lng={value.course_place_lng}
                      />
                    )
                  })}
              {search &&
                shops.length >= 0 &&
                shops.map((value, index) => {
                  return (
                    <MarkerIcon
                      key={index}
                      classRoom={value.course_place_name}
                      lat={value.course_place_lat}
                      lng={value.course_place_lng}
                    />
                  )
                })}
            </GoogleMapReact>
          </div>
        </div>
        <input
          type="button"
          className="check__place-btn"
          value="確認店鋪"
          onClick={closeModalHandler}
        />
      </div>
    </>
  )
}
export default CourseMapModal
