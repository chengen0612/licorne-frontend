import React, { useState } from 'react'
import '../../style.scss'
import { FiChevronLeft } from 'react-icons/fi'
import QuestionTwo from './QuestionTwo'

function QuestionOne({ q1, a1, b1, c1, d1 }) {
  const [isShow, setIsShow] = useState(true)
  const handleClick = () => {
    setIsShow(!isShow)
  }

  return (
    <>
      {/* <div className="quiz__back" role="button">
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div> */}
      {/* {isShow && <QuestionTwo />} */}
      <div>
        <div className="quiz__question-number"> 1/5 </div>
        <p className="quiz__question">{q1}</p>
        <div className="quiz__divider">
          <div className="quiz__divider-line"></div>
          <div className="quiz__divider-diamond"></div>
        </div>
        <div className="quiz__answers">
          <button className="quiz__answer" onClick={handleClick}>
            {a1}
          </button>
          <button className="quiz__answer" onClick={handleClick}>
            {b1}
          </button>
          <button className="quiz__answer" onClick={handleClick}>
            {c1}
          </button>
          <button className="quiz__answer" onClick={handleClick}>
            {d1}
          </button>
        </div>
      </div>
    </>
  )
}
export default QuestionOne
