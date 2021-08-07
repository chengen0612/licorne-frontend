import React, { useState } from 'react'
import '../../style.scss'
import { FiChevronLeft } from 'react-icons/fi'

function QuestionTwo({ q2, a2, b2, c2, d2, nextHandler }) {
  return (
    <>
      {/* <div className="quiz__back" role="button" onClick={clickHandler}>
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div> */}
      <div>
        <div className="quiz__question-number"> 2/5 </div>
        <p className="quiz__question">{q2}</p>
        <div className="quiz__divider">
          <div className="quiz__divider-line"></div>
          <div className="quiz__divider-diamond"></div>
        </div>
        <div className="quiz__answers" onClick={nextHandler}>
          <button className="quiz__answer">{a2}</button>
          <button className="quiz__answer">{b2}</button>
          <button className="quiz__answer">{c2}</button>
          <button className="quiz__answer">{d2}</button>
        </div>
      </div>
    </>
  )
}
export default QuestionTwo
