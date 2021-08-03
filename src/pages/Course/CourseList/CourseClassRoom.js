import React from 'react'

function CourseClassRoom(props) {
  const { name, address, phone, clickLatLng } = props

  function clickSetPlace() {
    props.setSelectForm(name)
    clickLatLng()
  }

  return (
    <>
      <div className="modal__map__item">
        <h5 className="map__item-title">{name}</h5>
        <span className="map__item-intro">
          地址：{address}
          <br />
          電話：{phone}
          <br />
          營業時間：週二至週日 10:00 - 20:00
        </span>

        <input
          type="button"
          className="modal__store-btn"
          value="選擇店鋪"
          onClick={clickSetPlace}
        />
      </div>
    </>
  )
}
export default CourseClassRoom
