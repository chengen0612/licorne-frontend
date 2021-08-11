import React from 'react'
import './style.scss'
import OtherProducts from './components/OtherProducts'

function Recommendation() {
  return (
    <>
      <section className="official__recommendation">
        <h4 className="official__recommendation-title">其他產品</h4>
        <div className="official__recommendation-group">
          <OtherProducts />
        </div>
      </section>
    </>
  )
}

export default Recommendation
