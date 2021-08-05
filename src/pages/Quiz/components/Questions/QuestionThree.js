import React from 'react'
import '../../style.scss'
import { FiChevronLeft } from 'react-icons/fi'

function QuestionThree({ q3, a3, b3, c3, d3 }) {
  return (
    <>
      {/* <div className="quiz__back" role="button">
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div> */}
      <div>
        <div className="quiz__question-number"> 3/5 </div>
        <p className="quiz__question">{q3}</p>
        <div className="quiz__divider">
          <div className="quiz__divider-line"></div>
          <div className="quiz__divider-diamond"></div>
        </div>
        <div className="quiz__answers">
          <button className="quiz__answer">{a3}</button>
          <button className="quiz__answer">{b3}</button>
          <button className="quiz__answer">{c3}</button>
          <button className="quiz__answer">{d3}</button>
        </div>
      </div>
    </>
  )
}
export default QuestionThree
