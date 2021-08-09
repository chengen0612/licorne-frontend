import React from 'react'
import { useHistory } from 'react-router-dom'
import '../style.css'
import { imgPath } from '../../../config'
import { FiRotateCcw } from 'react-icons/fi'

function Results({ result }) {
  const history = useHistory()
  const handleRedirection = () => history.push('/official')
  return (
    <>
      {result === 0 && <Tea handleRedirection={handleRedirection} />}
      {result === 1 && <Animal handleRedirection={handleRedirection} />}
      {result === 2 && <Nature handleRedirection={handleRedirection} />}
      {result === 3 && <Cocktail handleRedirection={handleRedirection} />}
    </>
  )
}
export default Results

// A
const Tea = ({ handleRedirection }) => {
  return (
    <>
      <div className="quiz__restart" role="button">
        <FiRotateCcw className="feather-s" />
        <span className="quiz__restart-text">重測</span>
      </div>
      <h4 className="quiz__result">茗茶系列</h4>
      <div className="quiz__result-img-wrapper">
        <img
          className="quiz__result-img"
          src={imgPath + '/images/quiz/result_tea.jpeg'}
          alt=""
        />
      </div>
      <p className="quiz__result-text">
        適合您的系列為茗茶系列香水， <br />
        來自各種最高級的茶品原料充滿清新的經典香氣， <br />
        融合了台灣獨特茶種，茗茶香水無疑是最適合您的香水。
      </p>
      <button className="quiz__start-btn" onClick={handleRedirection}>
        前往香氣
      </button>
    </>
  )
}

const Animal = ({ handleRedirection }) => {
  return (
    <>
      <div className="quiz__restart" role="button">
        <FiRotateCcw className="feather-s" />
        <span className="quiz__restart-text">重測</span>
      </div>
      <h4 className="quiz__result">動物系列</h4>
      <div className="quiz__result-img-wrapper">
        <img
          className="quiz__result-img"
          src={imgPath + '/images/quiz/result_animal.jpeg'}
          alt=""
        />
      </div>
      <p className="quiz__result-text">
        適合您的系列為動物系列香水，充滿動物野性和性感的誘惑力香氣。 <br />
        動物香水無疑是最適合您的香水。
      </p>
      <button className="quiz__start-btn" onClick={handleRedirection}>
        前往香氣
      </button>
    </>
  )
}

// C
const Nature = ({ handleRedirection }) => {
  return (
    <>
      <div className="quiz__restart" role="button">
        <FiRotateCcw className="feather-s" />
        <span className="quiz__restart-text">重測</span>
      </div>
      <h4 className="quiz__result">大自然系列</h4>
      <div className="quiz__result-img-wrapper">
        <img
          className="quiz__result-img"
          src={imgPath + '/images/quiz/result_nature.jpg'}
          alt=""
        />
      </div>
      <p className="quiz__result-text">
        適合您的系列為大自然系列香水，擁抱高山森林的遼闊， <br />
        體驗山林的清新香氣是最適合您的香水。
      </p>
      <button className="quiz__start-btn" onClick={handleRedirection}>
        前往香氣
      </button>
    </>
  )
}

// D
const Cocktail = ({ handleRedirection }) => {
  return (
    <>
      <div className="quiz__restart" role="button">
        <FiRotateCcw className="feather-s" />
        <span className="quiz__restart-text">重測</span>
      </div>
      <h4 className="quiz__result">調酒系列</h4>
      <div className="quiz__result-img-wrapper">
        <img
          className="quiz__result-img"
          src={imgPath + '/images/quiz/result_cocktail.jpeg'}
          alt=""
        />
      </div>
      <p className="quiz__result-text">
        適合您的系列為調酒系列香水，酒吧特有氛的吸引香氛， <br />
        融合了各種經典不敗的獨特酒款原料。
        <br />
        調酒香水無疑是最適合您的香水。
      </p>
      <button className="quiz__start-btn" onClick={handleRedirection}>
        前往香氣
      </button>
    </>
  )
}
