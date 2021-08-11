import React from 'react'
import '../../style.scss'

function QuestionThree({
  q3,
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
      <div>
        <div className="quiz__question-number"> 3/5 </div>
        <p className="quiz__question">{q3}</p>
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
            {ansA[2]}
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
            {ansB[2]}{' '}
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
            {ansC[2]}{' '}
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
            {ansD[2]}{' '}
          </button>
        </div>
      </div>
    </>
  )
}
export default QuestionThree
