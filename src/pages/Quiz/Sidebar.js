import React from 'react'
import './style.css'
import { imgPath } from '../../config'

function Sidebar() {
  return (
    <>
      <div className="quizStart">
        <h3>氣味尋覓</h3>
        <div className="text_quiz">
          <p>
            張愛玲曾經說過「到人心裡的路是通過嗅覺，
            因為人類的靈魂是他們的氣味。」 你想知道你的靈魂的樣子嗎？
            接下來的心理測驗會是單選題，
            請閱讀完情境後，選擇一個最適合你的答案。
            請依照直覺作答，不要思考太久。
          </p>
        </div>

        <img src={imgPath + './images/quiz/quiz-start.jpg'} alt="" />
        <button className="quizStart_btn">開始測驗</button>
      </div>
    </>
  )
}
export default Sidebar
