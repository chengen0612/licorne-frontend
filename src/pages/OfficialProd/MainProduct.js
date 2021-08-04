import React, { useState } from 'react'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.css'
// import { imgPath } from '../../config'
import { FiHeart, FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { GiWaterDrop } from 'react-icons/gi'
import ProductAccordion from './components/ProductAccordion'

const Main = ({ item }) => {
  return (
    <>
      <div className="official__select-options">
        瓶裝 {item.volume}
        <span className="d-flex">
          NT$ {item.price}
          &nbsp;&nbsp;&nbsp;
          <GiWaterDrop />
        </span>
      </div>
    </>
  )
}

const Sibling = ({ siblingId, siblingItem }) => {
  return (
    <>
      {/* FIXME: weird transition */}
      <Link to={`/official/${siblingId}`}>
        <div className="official__select-options">
          瓶裝 {siblingItem.volume}
          <span className="d-flex">
            NT$ {siblingItem.price}
            &nbsp;&nbsp;&nbsp;
            <GiWaterDrop />
          </span>
        </div>
      </Link>
    </>
  )
}

function MainProduct({ id, item, siblingItem }) {
  const [active, setActive] = useState(true)
  const toggleClass = () => {
    setActive(!active)
  }

  // 判別是否為偶數
  function isEven(value) {
    if (value % 2 === 0) return value - 1
    else return value + 1
  }
  const siblingId = isEven(Number(id))
  console.log('siblingId', siblingId)
  const mainId = Number(id)
  console.log('id', mainId)

  return (
    <>
      <section className="official">
        <div className="official__img-wrapper">
          <img
            className="official__img"
            // src={imgPath + '/images/official/animal_100ml.png'}
            src={item.img_id}
            alt=""
          />
        </div>
        <div className="official__info">
          <h3 className="official__title">
            {/* 森林 Forest */}
            {item.name_zh} {item.name_en}
          </h3>
          {/* TODO: add link directing to series page */}
          <span className="official__subtitle">
            {/* 大自然香氛 */}
            {item.series_name}
          </span>
          {/* mainId = 39 */}
          {mainId < siblingId && (
            <div
              className={active ? 'official__dropdown-menu-active' : null}
              id="official__dropdown-menu"
              onClick={toggleClass}
            >
              {/* <div className="official__dropdown-title">
              請選擇容量 <FiChevronDown />
            </div> */}
              <div className="official__dropdown-title">
                瓶裝 {item.volume}
                <span className="d-flex">
                  NT$ {item.price}
                  &nbsp;&nbsp;&nbsp; <FiChevronDown />
                </span>
              </div>
              <div className="official__dropdown-content">
                <Main item={item} />
                <Sibling siblingId={siblingId} siblingItem={siblingItem} />
              </div>
            </div>
          )}
          {/* mainId = 40 */}
          {mainId > siblingId && (
            <div
              className={active ? 'official__dropdown-menu-active' : null}
              id="official__dropdown-menu"
              onClick={toggleClass}
            >
              {/* <div className="official__dropdown-title">
              請選擇容量 <FiChevronDown />
            </div> */}
              <div className="official__dropdown-title">
                瓶裝 {item.volume}
                <span className="d-flex">
                  NT$ {item.price}
                  &nbsp;&nbsp;&nbsp; <FiChevronDown />
                </span>
              </div>
              <div className="official__dropdown-content">
                <Sibling siblingId={siblingId} siblingItem={siblingItem} />
                <Main item={item} />
              </div>
            </div>
          )}
          <div className="official__btn-group">
            <button className="official__order-btn">訂購</button>
            <div className="official__fav">
              {' '}
              <FiHeart className="official__fav-btn feather-s" role="button" />
            </div>
          </div>
          <ProductAccordion item={item} />
        </div>
      </section>
    </>
  )
}

export default MainProduct
