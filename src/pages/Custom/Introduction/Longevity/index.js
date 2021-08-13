import React from 'react'

import { baseUrl } from '../../../../config'
import './style.scss'

function Longevity() {
  return (
    <>
      <p className="c-intro-long__intro">
        一支香水的持久程度，取決於精油的濃度。一般來說，精油成分濃度愈高，持久度亦會愈高，相對的，香水價格也會因此而提高。
      </p>
      <section className="c-intro-long__cate-wrap">
        <div className="c-intro-long__cate-item">
          <h5>古龍水</h5>
          <figure>
            <img
              src={baseUrl + '/images/custom/intro/longevity/cologne.svg'}
              alt="cologne"
            />
          </figure>
        </div>
        <div className="c-intro-long__cate-item">
          <h5>淡香水</h5>
          <figure>
            <img
              src={
                baseUrl + '/images/custom/intro/longevity/aromatic-waters.svg'
              }
              alt="aromatic-waters"
            />
          </figure>
        </div>
        <div className="c-intro-long__cate-item">
          <h5>淡香精、香水</h5>
          <figure>
            <img
              src={baseUrl + '/images/custom/intro/longevity/perfume.svg'}
              alt="perfume"
            />
          </figure>
        </div>
        <div className="c-intro-long__cate-item">
          <h5>香精</h5>
          <figure>
            <img
              src={baseUrl + '/images/custom/intro/longevity/pure-perfume.svg'}
              alt="pure-perfume"
            />
          </figure>
        </div>
      </section>
      <figure className="c-intro-long__chart-wrap">
        <img
          src={baseUrl + '/images/custom/intro/longevity/chart.svg'}
          alt="chart"
        />
      </figure>
    </>
  )
}

export default Longevity
