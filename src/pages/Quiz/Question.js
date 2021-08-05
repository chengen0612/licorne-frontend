import React from 'react'
import './style.css'
import { FiChevronLeft } from 'react-icons/fi'
// import Start from './Start'

function Question() {
  return (
    <>
      <div className="quiz__back" role="button">
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div>
      <div className="quiz__question-number"> 1/5 </div>
      <p className="quiz__question">
        一個晴空萬里的日子，妳踏青去。
        <br />
        走著走著，前方出現一位女性，妳覺得她幾歲呢？
      </p>
      <div className="quiz__divider">
        <div className="quiz__divider-line"></div>
        <div className="quiz__divider-diamond"></div>
      </div>
      <div className="quiz__answers">
        <button className="quiz__answer">35歲</button>
        <button className="quiz__answer">17歲</button>
        <button className="quiz__answer">22歲</button>
        <button className="quiz__answer">30歲</button>
      </div>
    </>
  )
}
export default Question
