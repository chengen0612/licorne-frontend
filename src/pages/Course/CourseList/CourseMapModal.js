import React, { useState, useRef, useEffect } from 'react';
import { FiSearch, FiMapPin, FiX } from 'react-icons/fi';
import { imgPath } from '../../../config';
import GoogleMapReact from 'google-map-react';
import shop_list from './data/shop_list.json';
import CourseClassRoom from './CourseClassRoom';

//MarkerIcon樣式

const MarkerIcon = () => {
  return (
    <>
      <div
        className="modal__marker-box"
        style={{ transform: 'translate(-50%, -100%)' }}
      >
        <img
          src={imgPath + '/images/course/map-markersolid.svg'}
          alt=""
          className="modal__marker"
        />
      </div>
      {/* <FiMapPin className="modal__marker" /> */}
    </>
  );
};

function CourseMapModal(props) {
  //設定選擇店鋪
  const { closeModalHandler, setSelectForm } = props;

  //const [select, setSelect] = useState('');

  // json抓出經緯度
  const [jsonArrayLatLng, setJsonArrayLatLng] = useState([]);

  // 經緯度預設值
  // const [lat, setLat] = useState(0);
  // const [lng, setLng] = useState(0);
  const [defaultLatLng, setDefaultLatLng] = useState({ lat: 0, lng: 0 });

  //console.log(JSON.stringify(defaultLatLng));

  //預設顯示資訊
  const [shops, setShops] = useState([
    {
      course_place_name: '高雄民益店',
      course_place_address: '高雄市小港區民益路13號',
      course_place_phone: '07-8012255',
      course_place_lat: '22.5662669501168',
      course_place_lng: '120.34782427919656',
    },
  ]);

  //搜尋功能
  const queryString = useRef(null);

  const queryHandler = () => {
    const keyword = queryString.current.value;
    if (keyword.length === 0) return;
    const results = shop_list.filter((item) => {
      return item.course_place_address.includes(keyword);
    });
    setShops(results);
  };
  // 顯示鄰近店鋪
  const [show, setShow] = useState(false);
  const clickShow = (e) => {
    setShow(true);
  };

  //自動定位目前位置
  const defaultProps = {
    center: {
      lat: 22.573696160103022,
      lng: 120.34492822739263,
    },
    zoom: 16,
  };

  // 抓取經緯度
  useEffect(() => {
    if (navigator.geolocation) {
      // 執行要權限的function
      function error() {
        alert('無法取得你的位置');
      }

      // 使用者允許抓目前位置，回傳經緯度
      function success(position) {
        // setLat(position.coords.latitude);
        // setLng(position.coords.longitude);
        setDefaultLatLng({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }

      // 跟使用者拿所在位置的權限
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert('Sorry, 你的裝置不支援地理位置功能。');
    }

    const latlngList = shop_list.map((v, i) => {
      return {
        course_place_lat: v.course_place_lat,
        course_place_lng: v.course_place_lng,
      };
    });
    setJsonArrayLatLng(latlngList);
  }, []);

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
                      lat: shop.course_place_lat,
                      lng: shop.course_place_lng,
                    });
                  }}
                />
              );
            })}
          </div>
          <div className="modal__map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={defaultProps.center}
              center={defaultLatLng}
              defaultZoom={defaultProps.zoom}
            >
              <MarkerIcon lat={defaultLatLng.lat} lng={defaultLatLng.lng} />
              {show &&
                jsonArrayLatLng.map((value, index) => {
                  return (
                    <MarkerIcon
                      key={index}
                      lat={value.course_place_lat}
                      lng={value.course_place_lng}
                    />
                  );
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
  );
}
export default CourseMapModal;
