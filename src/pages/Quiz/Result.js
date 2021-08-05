import React from 'react'
import './style.css'
import { imgPath } from '../../config'
import { FiRotateCcw } from 'react-icons/fi'
// import Start from './Start'

function Result() {
  return (
    <>
      <div className="quiz__restart" role="button">
        <FiRotateCcw className="feather-s" />
        <span className="quiz__restart-text">重測</span>
      </div>
      <h4 className="quiz__result">大自然系列</h4>
      <div className="quiz__result-img">
        <img
          className="quiz__img"
          src={imgPath + '/images/quiz/result_nature.jpg'}
          alt=""
        />
      </div>
      <p className="quiz__result-text">
        適合您的系列為大自然系列香水，擁抱高山森林的遼闊， <br />
        體驗山林的清新香氣是最適合您的香水。
      </p>
      <button className="quiz__start-btn">前往香氣</button>
    </>
  )
}
export default Result
