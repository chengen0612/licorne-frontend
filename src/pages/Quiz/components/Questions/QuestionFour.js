import React, { useState } from 'react'
import '../../style.scss'
import { FiChevronLeft } from 'react-icons/fi'

function QuestionFour({
  q4,
  ans,
  setAns,
  ansA,
  ansB,
  ansC,
  ansD,
  nextHandler,
}) {
  return (
    <>
      {/* <div className="quiz__back" role="button">
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div> */}
      {console.log('ans after 3', ans)}
      <div>
        <div className="quiz__question-number"> 4/5 </div>
        <p className="quiz__question">{q4}</p>
        <div className="quiz__divider">
          <div className="quiz__divider-line"></div>
          <div className="quiz__divider-diamond"></div>
        </div>
        <div className="quiz__answers">
          <button
            className="quiz__answer"
            onClick={() => {
              ans[0] += 1
              let newAns = ans
              setAns(newAns)
              nextHandler()
            }}
          >
            {ansA[3]}
          </button>
          <button
            className="quiz__answer"
            onClick={() => {
              ans[1] += 1
              let newAns = ans
              setAns(newAns)
              nextHandler()
            }}
          >
            {ansB[3]}{' '}
          </button>
          <button
            className="quiz__answer"
            onClick={() => {
              ans[2] += 1
              let newAns = ans
              setAns(newAns)
              nextHandler()
            }}
          >
            {ansC[3]}{' '}
          </button>
          <button
            className="quiz__answer"
            onClick={() => {
              ans[3] += 1
              let newAns = ans
              setAns(newAns)
              nextHandler()
            }}
          >
            {ansD[3]}{' '}
          </button>
        </div>
      </div>
    </>
  )
}
export default QuestionFour
