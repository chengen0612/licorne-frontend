import React, { useState, useEffect } from 'react'

import { FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import './style.scss'

// import components
import Basis from './Basis'
import Longevity from './Longevity'

function Introduction() {
  const [page, setPage] = useState(1)
  const [display, setDisplay] = useState()

  useEffect(() => {
    const chooseComponent = () => {
      let component = <></>
      switch (page) {
        case 1:
        case 2:
        case 3:
        case 4:
          // component = <h1>initial page</h1>
          component = <Basis page={page} setPage={setPage} />
          break
        case 5:
          component = <Longevity />
          break
        case 6:
        case 7:
        case 8:
          break
        default:
          break
      }
      return component
    }

    const result = chooseComponent()
    setDisplay(result)
  }, [page])

  // page handlers
  const previousPageExecutor = () => {
    if (page > 1) setPage(page - 1)
  }

  const nextPageExecutor = () => {
    if (page < 8) setPage(page + 1)
  }

  return (
    <>
      <div className="c-intro-wrapper">
        <FiX className="c-intro__close-btn" />
        <FiArrowLeft
          onClick={previousPageExecutor}
          className="c-intro__previous-page-btn"
        />
        <FiArrowRight
          onClick={nextPageExecutor}
          className="c-intro__next-page-btn"
        />
        {display}
        <button className="c-intro__skip-btn">跳過介紹</button>
      </div>
    </>
  )
}

export default Introduction
