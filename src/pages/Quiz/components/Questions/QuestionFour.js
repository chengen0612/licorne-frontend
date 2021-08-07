import React, { useState } from 'react'
import '../../style.scss'
import { FiChevronLeft } from 'react-icons/fi'

function QuestionFour({ q4, a4, b4, c4, d4, nextHandler }) {
  return (
    <>
      {/* <div className="quiz__back" role="button">
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div> */}
      <div>
        <div className="quiz__question-number"> 4/5 </div>
        <p className="quiz__question">{q4}</p>
        <div className="quiz__divider">
          <div className="quiz__divider-line"></div>
          <div className="quiz__divider-diamond"></div>
        </div>
        <div className="quiz__answers" onClick={nextHandler}>
          <button className="quiz__answer">{a4}</button>
          <button className="quiz__answer">{b4}</button>
          <button className="quiz__answer">{c4}</button>
          <button className="quiz__answer">{d4}</button>
        </div>
      </div>
    </>
  )
}
export default QuestionFour
