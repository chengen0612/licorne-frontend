import React from 'react'
import './style.scss'
// import { imgPath } from '../../config'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import OtherProducts from './components/OtherProducts'

function Recommendation() {
  return (
    <>
      <section className="official__recommendation">
        <h4 className="official__recommendation-title">其他產品</h4>
        <div className="official__recommendation-group">
          {/* TODO: carousel */}
          <FiChevronLeft className="feather-m" />
          <OtherProducts />
          <FiChevronRight className="feather-m" />
        </div>
      </section>
    </>
  )
}

export default Recommendation
