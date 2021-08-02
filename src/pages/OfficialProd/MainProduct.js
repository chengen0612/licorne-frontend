import React from 'react'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { imgPath } from '../../config'
import { FiHeart, FiChevronDown } from 'react-icons/fi'
import { GiWaterDrop } from 'react-icons/gi'
import ProductAccordion from './components/ProductAccordion'

function MainProduct({ item }) {
  const options = [
    {
      volume: '瓶裝 100ML',
      price: 3500,
    },
    {
      volume: '瓶裝 50ML',
      price: 5000,
    },
  ]

  console.log('product info', item)

  return (
    <>
      <section className="official">
        <div className="official__img-wrapper">
          <img
            className="official__img"
            src={imgPath + '/images/official/animal_100ml.png'}
            src={item.img_id}
            alt=""
          />
        </div>
        <div className="official__info">
          <h3 className="official__title">
            {/* 森林 Forest */}
            {item.name_zh} {item.name_en}
          </h3>
          <span className="official__subtitle">
            {/* 大自然香氛 */}
            {item.series_name}
          </span>
          <div className="official__dropdown-menu">
            <div className="official__dropdown-title">
              請選擇容量 <FiChevronDown />
            </div>
            <div className="official__dropdown-content">
              {options.map((option, i) => {
                return (
                  <div key={i} className="official__select-options">
                    {option.volume}
                    <span className="d-flex">
                      NT$ {option.price}
                      &nbsp;&nbsp;&nbsp;
                      <GiWaterDrop />
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
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
