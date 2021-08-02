export default function MapListItem(props) {
  const { setSelectedShop, data } = props
  const { course_place_name, course_place_address, course_place_phone } = data

  const routeLinkHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="map__item">
        <h5 className="map__item-title">{course_place_name}</h5>
        <span className="map__item-intro">
          地址：{course_place_address} <br />
          電話：{course_place_phone} <br />
          營業時間：週二至週日 10:00 - 20:00
        </span>
        <a href="/" className="map__route-link" onClick={routeLinkHandler}>
          前往路線
        </a>
        <button
          className="map__store-btn"
          onClick={() => setSelectedShop(data)}
        >
          選擇店鋪
        </button>
      </div>
    </>
  )
}
