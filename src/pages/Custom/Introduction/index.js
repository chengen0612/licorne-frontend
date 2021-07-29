import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  FiX,
  FiArrowLeft,
  FiArrowRight,
  FiCircle,
  FiDroplet,
} from 'react-icons/fi'

import './style.scss'

// import components
import Basis from './Basis'
import Longevity from './Longevity'
import Notes from './Notes'
import Exit from './Exit'

function Introduction() {
  const [page, setPage] = useState(1)
  const [display, setDisplay] = useState(<></>)

  useEffect(() => {
    const chooseComponent = () => {
      let component = <></>
      switch (page) {
        case 1:
        case 2:
        case 3:
        case 4:
          component = <Basis page={page} />
          break
        case 5:
          component = <Longevity />
          break
        case 6:
        case 7:
        case 8:
          component = <Notes page={page} />
          break
        case 9:
          component = <Exit />
          break
        default:
          break
      }
      return component
    }

    const result = chooseComponent()
    setDisplay(result)
  }, [page])

  const renderBlobs = () => {
    let result = ''
    if (page >= 1 && page <= 4) {
      result = (
        <>
          <div className="c-intro-basis__y-blob"></div>
          <div className="c-intro-basis__r-blob"></div>
          <div className="c-intro-basis__p-blob"></div>
        </>
      )
    } else if (page === 5) {
      result = (
        <>
          <div className="c-intro-long__y-blob"></div>
          <div className="c-intro-long__r-blob"></div>
          <div className="c-intro-long__p-blob"></div>
          <div className="c-intro-long__o-blob"></div>
        </>
      )
    } else if (page >= 6 && page <= 8) {
      result = (
        <>
          <div className="c-intro-notes__y-blob"></div>
          <div className="c-intro-notes__r-blob"></div>
          <div className="c-intro-notes__p-blob"></div>
          <div className="c-intro-notes__o-blob"></div>
        </>
      )
    }
    return result
  }

  const renderDrops = () => {
    const symbol = Array(9).fill(0)
    return (
      <div className="c-intro__drops-wrap">
        {symbol.map((item, i) => {
          const number = i + 1
          return number <= page ? (
            <FiDroplet
              key={i}
              className="c-intro__drop active"
              onClick={() => {
                setPage(number)
              }}
            />
          ) : (
            <FiCircle
              key={i}
              className="c-intro__drop"
              onClick={() => {
                setPage(number)
              }}
            />
          )
        })}
      </div>
    )
  }

  // page handlers
  const previousPageExecutor = () => {
    if (page > 1) setPage(page - 1)
  }

  const nextPageExecutor = () => {
    if (page < 9) setPage(page + 1)
  }

  return (
    <>
      <div className="c-intro-wrapper">
        {page && renderBlobs()}
        {page >= 1 && page <= 8 && (
          <>
            <FiArrowLeft
              onClick={previousPageExecutor}
              className="c-intro__previous-page-btn"
            />
            <FiArrowRight
              onClick={nextPageExecutor}
              className="c-intro__next-page-btn"
            />
            <Link to="/custom/process">
              <button className="c-intro__skip-btn">跳過介紹</button>
            </Link>
          </>
        )}
        <Link to="/">
          <FiX className="c-intro__close-btn" />
        </Link>
        {renderDrops()}
        {display}
      </div>
    </>
  )
}

export default Introduction
