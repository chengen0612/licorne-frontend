import React, { useState } from 'react';
import { FiSearch, FiMapPin, FiX } from 'react-icons/fi';
//import Modal from 'react-modal';

function CourseMapModal() {
  //const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="modal__card">
        <FiX className="icon__fix" />
        <h4 className="modal__title">請選擇取貨店鋪</h4>

        <div className="modal__search">
          <button className="modal__btn">顯示鄰近店舖</button>
          <div className="modal__map-search">
            <figure className="map__map-icon-top">
              <FiMapPin className="feather-s" />
            </figure>
            <input
              type="text"
              placeholder="縣市、鄉鎮"
              className="map__input"
            />
            <figure className="map__search-icon-top">
              <FiSearch className="map__search-icon feather-m" />
            </figure>
          </div>
        </div>

        <div className="modal__con__map d-flex justify-content-center">
          <div className="modal__content">
            <div className="modal__map__item">
              <h5 className="map__item-title">高雄小港旗艦店</h5>
              <span className="map__item-intro">
                地址：高雄市小港區民益路13號
                <br />
                電話：07-8012255
                <br />
                營業時間：週二至週日 10:00 - 20:00
              </span>
              <a href="/" className="modal__route-link">
                前往路線
              </a>
              <button className="modal__store-btn">選擇店鋪</button>
            </div>
          </div>
          <div className="modal__map"></div>
        </div>
        <button className="check__place-btn">確認店鋪</button>
      </div>
    </>
  );
}
export default CourseMapModal;
