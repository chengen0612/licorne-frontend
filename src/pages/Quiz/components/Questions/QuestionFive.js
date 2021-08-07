import React, { useState } from 'react'
import '../../style.scss'
import { FiChevronLeft } from 'react-icons/fi'

function QuestionFive({
  q5,
  ans,
  setAns,
  ansA,
  ansB,
  ansC,
  ansD,
  nextHandler,
}) {
  const countHandler = () => {
    ans.indexOf(Math.max(...ans))
  }
  console.log('index of greatest value in ans', ans.indexOf(Math.max(...ans)))
  return (
    <>
      {/* <div className="quiz__back" role="button" onClick="">
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div> */}
      {console.log('ans after 4', ans)}
      <div>
        <div className="quiz__question-number"> 5/5 </div>
        <p className="quiz__question">{q5}</p>
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
            }}
          >
            {ansA[4]}
          </button>
          <button
            className="quiz__answer"
            onClick={() => {
              ans[1] += 1
              let newAns = ans
              setAns(newAns)
            }}
          >
            {ansB[4]}{' '}
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
            {ansC[4]}{' '}
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
            {ansD[4]}{' '}
          </button>
        </div>
      </div>
    </>
  )
}
export default QuestionFive
