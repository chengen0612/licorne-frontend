import React, { useState, useEffect } from 'react'

import { imgPath } from '../../../../config'
import './style.scss'

function Basis(props) {
  const { page, setPage } = props
  const [displayImg, setDisplayImg] = useState(<></>)

  // function chooseImage() {
  //   let image = <></>
  //   switch (page) {
  //     case 1:
  //       image = (
  //         <figure>
  //           <img
  //             className="c-intro__img-alcohol"
  //             src={imgPath + '/images/custom/intro/basis/alcohol.png'}
  //             alt="alcohol"
  //           />
  //         </figure>
  //       )
  //       break
  //     case 2:
  //       image = (
  //         <figure>
  //           <img
  //             className="c-intro__img-water"
  //             src={imgPath + '/images/custom/intro/basis/water.png'}
  //             alt="water"
  //           />
  //         </figure>
  //       )
  //       break
  //     case 3:
  //       break
  //     case 4:
  //       break
  //     default:
  //       break
  //   }
  //   return image
  // }

  useEffect(() => {
    // const result = chooseImage()
    // setDisplayImg(result)
  }, [page])

  return (
    <>
      {/* blobs */}
      <section className="c-intro-basis-intro">
        <h5>香水組成與結構</h5>
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
