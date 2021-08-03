import { useRef } from 'react'
import { FiMapPin, FiSearch } from 'react-icons/fi'
import MapListItem from './MapListItem'

export default function MapCard(props) {
  const { shopList, displayShops, setDisplayShops, setSelectedShop } = props

  const queryString = useRef(null)

  const queryHandler = () => {
    const keyword = queryString.current.value
    const index = shopList.findIndex((item) => item.cities === keyword)
    if (index === -1) return
    const results = shopList.filter((item) => {
      return item.course_place_address.includes(keyword)
    })
    setDisplayShops(results)
    setSelectedShop({})
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
          {displayShops.map((shop, i) => {
            return (
              <MapListItem
                key={i}
                data={shop}
                setSelectedShop={setSelectedShop}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
