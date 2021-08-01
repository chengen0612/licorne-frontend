import React from 'react'
import './style.scss'
// import { imgPath } from '../../config'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import OtherProduct from './components/OtherProduct'

function Recommendation() {
  return (
    <>
      <section className="official__recommendation">
        <h4 className="official__recommendation-title">其他產品</h4>
        <div className="official__recommendation-group">
          <FiChevronLeft className="feather-m" />
          <OtherProduct />
          {/* <div className="test d-flex flex-column">
            <div className="official__img-group-wrapper">
              <img
                className="official__img"
                src={imgPath + '/images/official/cocktail_100ml.png'}
                alt=""
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <span>莫西多</span>
              <span>Mojito</span>
              <span>調酒香氛系列</span>
              <span>NT $2500</span>
              <span>
                查看詳情 <FiChevronRight />{' '}
              </span>
            </div>
          </div>
          <div className="test d-flex flex-column">
            <div className="official__img-group-wrapper">
              <img
                className="official__img"
                src={imgPath + '/images/official/cocktail_100ml.png'}
                alt=""
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <span>莫西多</span>
              <span>Mojito</span>
              <span>調酒香氛系列</span>
              <span>NT $2500</span>
              <span>
                查看詳情 <FiChevronRight />{' '}
              </span>
            </div>
          </div> */}
          <FiChevronRight className="feather-m" />
        </div>
      </section>
    </>
  )
}

export default Recommendation
