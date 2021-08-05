import React, { useState } from 'react'
import '../../style.scss'
import { FiChevronLeft } from 'react-icons/fi'

function QuestionFive({ q5, a5, b5, c5, d5 }) {
  const [opacity, setOpacity] = useState(1)
  const fadeOut = {
    opacity: opacity,
    transform: '1s',
  }

  return (
    <>
      {/* <div className="quiz__back" role="button" onClick="">
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div> */}
      <div style={fadeOut}>
        <div className="quiz__question-number"> 5/5 </div>
        <p className="quiz__question">{q5}</p>
        <div className="quiz__divider">
          <div className="quiz__divider-line"></div>
          <div className="quiz__divider-diamond"></div>
        </div>
        <div className="quiz__answers" onClick={() => setOpacity(0)}>
          <button className="quiz__answer">{a5}</button>
          <button className="quiz__answer">{b5}</button>
          <button className="quiz__answer">{c5}</button>
          <button className="quiz__answer">{d5}</button>
        </div>
      </div>
    </>
  )
}
export default QuestionFive
