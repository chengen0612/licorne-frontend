import React, { useState } from 'react'
import '../../style.scss'
import { FiChevronLeft } from 'react-icons/fi'

function QuestionOne({
  q1,
  a1,
  b1,
  c1,
  d1,
  hideTwo,
  setHideTwo,
  // showStart,
  // setShowStart,
}) {
  const [none, setNone] = useState('')

  const fadeOut = {
    display: none,
    transform: '1s',
  }

  const handleClick = () => {
    setHideTwo(!hideTwo)
    setNone('none')
  }

  const showHandler = () => {
    // setShowStart(showStart)
    setNone('none')
  }

  return (
    <>
      <div
        className="quiz__back"
        role="button"
        onClick={showHandler}
        style={fadeOut}
      >
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div>
      <div style={fadeOut}>
        <div className="quiz__question-number"> 1/5 </div>
        {/* <p className="quiz__question">{q1}</p> */}
        <p className="quiz__question">{q1}</p>
        <div className="quiz__divider">
          <div className="quiz__divider-line"></div>
          <div className="quiz__divider-diamond"></div>
        </div>
        <div className="quiz__answers" onClick={handleClick}>
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
