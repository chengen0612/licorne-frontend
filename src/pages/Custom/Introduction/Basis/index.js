import React from 'react'

import { imgPath } from '../../../../config'
import './style.scss'

function Basis(props) {
  const { page } = props

  return (
    <>
      <section className="c-intro-basis-intro">
        <h2>香水組成與結構</h2>
        <p>
          一瓶香水成份可分為三個部分，酒精(Alcohol)、水(Distilled
          Water)、及精油(Fragrance Oil)。精油(Fragrance
          Oil)又被稱作香精是一瓶香水的靈魂、決定香味的走向，其中的濃度決定這瓶香水是香精、淡香精、香水、淡香水、還是古龍水。
        </p>
      </section>
      {page === 1 && (
        <figure>
          <img
            className="c-intro__img-alcohol"
            src={imgPath + '/images/custom/intro/basis/alcohol.svg'}
            alt="alcohol"
          />
        </figure>
      )}
      {page === 2 && (
        <figure>
          <img
            className="c-intro__img-water"
            src={imgPath + '/images/custom/intro/basis/water.svg'}
            alt="water"
          />
        </figure>
      )}
      {page === 3 && (
        <>
          <figure>
            <img
              className="c-intro__img-oil-lavender"
              src={imgPath + '/images/custom/intro/basis/oil-lavendar.svg'}
              alt="water"
            />
          </figure>
          <figure>
            <img
              className="c-intro__img-oil-herb"
              src={imgPath + '/images/custom/intro/basis/oil-herb.svg'}
              alt="water"
            />
          </figure>
          <figure>
            <img
              className="c-intro__img-oil-orange"
              src={imgPath + '/images/custom/intro/basis/oil-orange.svg'}
              alt="water"
            />
          </figure>
        </>
      )}
      {page === 4 && (
        <figure>
          <img
            className="c-intro__img-finished"
            src={imgPath + '/images/custom/intro/basis/finished.jpg'}
            alt="finished"
          />
        </figure>
      )}
    </>
  )
}

export default Basis
