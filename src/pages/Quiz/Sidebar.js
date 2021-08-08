import React, { useState } from 'react'
import './style.css'
// import { imgPath } from '../../config'
import { FiX } from 'react-icons/fi'
import Start from './components/Start'
import Questions from './components/Questions'
import Results from './components/Results'

function Sidebar({ sidebarIsOpen, closeSidebar }) {
  // change page between Start and Questions
  const [page, setPage] = useState(0)

  // 往前到第一題
  const changeHandler = () => {
    setPage(page + 1)
  }

  // 往回到開始頁
  const returnHandler = () => {
    setPage(page - 1)
    // if (page === -1) {
    //   setPage(0)
    // }
  }

  const [hideQuestion, setHideQuestion] = useState(false)
  const [result, setResult] = useState('')

  const resultHandler = (result) => {
    console.log('result', result)
    setResult(result)
  }

  return (
    <>
      <div
        className={
          sidebarIsOpen
            ? 'quiz__backdrop'
            : 'quiz__backdrop quiz__backdrop-close'
        }
        onClick={() => {
          closeSidebar()
          document.body.style.overflow = 'visible'
        }}
      ></div>
      <div
        className={
          sidebarIsOpen ? 'quiz__sidebar' : 'quiz__sidebar quiz__sidebar-close'
        }
      >
        {console.log('page', page)}
        <div className="quiz__close">
          <FiX
            className="feather-m"
            role="button"
            onClick={() => {
              closeSidebar()
              document.body.style.overflow = 'visible'
            }}
          />
        </div>
        {page === 0 ? (
          <Start changeHandler={changeHandler} />
        ) : (
          <Questions
            changeHandler={changeHandler}
            returnHandler={returnHandler}
            hideQuestion={hideQuestion}
            setHideQuestion={setHideQuestion}
            resultHandler={resultHandler}
          />
        )}
        {!hideQuestion && (
          <Results result={result} resultHandler={resultHandler} />
        )}
      </div>
    </>
  )
}
export default Sidebar
