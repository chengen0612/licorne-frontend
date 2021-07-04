export default function MapListItem({ name, address, phone }) {
  const routeLinkHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="map__item">
        <h5 className="map__item-title">{name}</h5>
        <span className="map__item-intro">
          地址：{address} <br />
          電話：{phone} <br />
          營業時間：週二至週日 10:00 - 20:00
        </span>
        <a href="/" className="map__route-link" onClick={routeLinkHandler}>
          前往路線
        </a>
        <button className="map__store-btn">選擇店鋪</button>
      </div>
    </>
  )
}
