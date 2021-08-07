import React, { useState } from 'react'
import '../style.css'
import { imgPath } from '../../../config'

function Start({ hideOne, setHideOne }) {
  const [none, setNone] = useState('')

  const fadeOut = {
    display: none,
    transform: '1s',
  }

  const handleClick = () => {
    setHideOne(!hideOne)
    setNone('none')
  }

  return (
    <div className="" style={fadeOut}>
      <h3 className="quiz__start-title">氣味尋覓</h3>
      <p className="quiz__start-text">
        張愛玲曾經說過「到人心裡的路是通過嗅覺， <br />
        因為人類的靈魂是他們的氣味。」
        <br />
        你想知道你的靈魂的樣子嗎？ <br />
        接下來的心理測驗會是單選題， <br />
        請閱讀完情境後，選擇一個最適合你的答案。
        <br />
        請依照直覺作答，不要思考太久。
        <br />
      </p>
      <img
        className="quiz__img"
        src={imgPath + '/images/quiz/quiz-start.jpg'}
        alt=""
      />
      <div className="d-flex justify-content-center">
        <button className="quiz__start-btn" onClick={handleClick}>
          開始測驗
        </button>
      </div>
    </div>
  )
}
export default Start
