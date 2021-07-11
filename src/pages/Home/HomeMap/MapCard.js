import { useState, useRef } from 'react'
import { FiMapPin, FiSearch } from 'react-icons/fi'
import MapListItem from './MapListItem'
import shop_list from './shop_list.json'

export default function MapCard() {
  const [shops, setShops] = useState([
    {
      course_place_name: '台北店',
      course_place_address: '台北市松山區龍人北路七段55號',
      course_place_phone: '02-58851234',
    },
  ])

  const queryString = useRef(null)

  const queryHandler = () => {
    const keyword = queryString.current.value
    if (keyword.length === 0) return
    const results = shop_list.filter((item) => {
      return item.course_place_address.includes(keyword)
    })
    setShops(results)
  }

  return (
    <>
      <div className="map__card">
        <div className="map__top">
          <h2 className="map__top-title">實體店鋪</h2>
          <div className="map__search-bar">
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
        <div className="map__content">
          {shops.map((shop, i) => {
            return (
              <MapListItem
                key={i}
                name={shop.course_place_name}
                address={shop.course_place_address}
                phone={shop.course_place_phone}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
