import React, { useState } from 'react'
import '../../style.scss'
import { FiChevronLeft } from 'react-icons/fi'

function QuestionOne({ q1, a1, b1, c1, d1, nextHandler }) {
  return (
    <>
      {/* <div className="quiz__back" role="button">
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div> */}
      <div>
        <div className="quiz__question-number"> 1/5 </div>
        <p className="quiz__question">{q1}</p>
        <div className="quiz__divider">
          <div className="quiz__divider-line"></div>
          <div className="quiz__divider-diamond"></div>
        </div>
        <div className="quiz__answers" onClick={nextHandler}>
          <button className="quiz__answer">{a1}</button>
          <button className="quiz__answer">{b1}</button>
          <button className="quiz__answer">{c1}</button>
          <button className="quiz__answer">{d1}</button>
        </div>
      </div>
    </>
  )
}
export default QuestionOne
