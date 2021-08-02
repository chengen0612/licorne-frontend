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
          <OtherProduct />
          <OtherProduct />
          <FiChevronRight className="feather-m" />
        </div>
      </section>
    </>
  )
}

export default Recommendation
