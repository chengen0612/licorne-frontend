import React, { useEffect, useState } from 'react'

import { imgPath } from '../../../../config/index'
import { topNote } from './data'
import './style.scss'

function Notes(props) {
  const { page } = props
  const reference = [
    { page: 6, match: topNote },
    { page: 7, match: '中調' },
    { page: 8, match: '後調' },
  ]

  const [display, setDisplay] = useState({})

  useEffect(() => {
    const result = reference.filter((item) => {
      return item.page === page
    })[0]

    setDisplay(result.match)
  }, [page])

  const renderScreen = () => {
    return (
      <>
        <section className="c-intro-notes__description">
          <h4>
            {display.title} <br />
            {display.titleEn}
          </h4>
          {/* TODO 在文字間加入斷行 */}
          <p>{display.explanation}</p>
        </section>
        {display.types.map((item, i) => {
          return (
            <div key={i} className={`c-intro-notes__card ${i}`}>
              <h5>
                {item.name} {item.nameEn}
              </h5>
              <span>{item.list.join('、')}</span>
              <figure>
                <img src={imgPath + item.image} alt={item.name} />
              </figure>
            </div>
          )
        })}
      </>
    )
  }

  return <>{Object.keys(display).length > 0 && renderScreen()}</>
}

export default Notes
