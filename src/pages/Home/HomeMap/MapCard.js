import * as Icon from 'react-feather' // icon
import MapListItem from './MapListItem'

export default function MapCard() {
  return (
    <>
      <div className="map__card">
        <div className="map__top">
          <h4>實體店鋪</h4>
          <div className="map__search-bar">
            <figure className="map__map-icon-top">
              <Icon.MapPin className="feather-s" />
            </figure>
            <input
              type="text"
              placeholder="縣市、鄉鎮"
              className="map__input"
            />
            <figure className="map__search-icon-top">
              <Icon.Search className="map__search-icon feather-m" />
            </figure>
          </div>
        </div>
        <div className="map__content">
          <MapListItem />
        </div>
      </div>
    </>
  )
}
