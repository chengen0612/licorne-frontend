import React, { useEffect, useState } from 'react'

import { imgPath } from '../../../../config/index'
import { topNote, middleNote, baseNote } from './data'
import './style.scss'

function Notes(props) {
  const { page } = props

  const reference = [
    { page: 6, match: topNote },
    { page: 7, match: middleNote },
    { page: 8, match: baseNote },
  ]

  const [topic, setTopic] = useState({})
  const [isAnimate, setIsAnimate] = useState(false)

  // set layout
  useEffect(() => {
    const result = reference.filter((item) => {
      return item.page === page
    })[0]

    setTopic(result.match)
    setIsAnimate(true)
  }, [page])

  // reset animation after render
  useEffect(() => {
    setTimeout(() => {
      setIsAnimate(false)
    }, 500)
  }, [topic])

  const renderScreen = () => {
    return (
      <>
        <section className="c-intro-notes__description">
          <h2>
            {topic.title} <br />
            {topic.titleEn}
          </h2>
          {/* TODO 在文字間加入斷行 */}
          <p>{topic.explanation}</p>
        </section>
        {topic.types.map((item, i) => {
          return (
            <div
              key={i}
              className={
                'c-intro-notes__card' + i + (isAnimate ? ' active' : '')
              }
            >
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

  return <>{Object.keys(topic).length > 0 && renderScreen()}</>
}

export default Notes
