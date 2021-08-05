import React, { useState, useEffect } from 'react'
import '../style.scss'
import { FiChevronLeft } from 'react-icons/fi'
import axios from 'axios'

function Question() {
  // const [questions, setQuestions] = useState([])
  const [answers, setAnswer] = useState([])
  const [opacity, setOpacity] = useState(1)
  // const styles = {
  //   opacity: opacity,
  // }
  const getDataFromServer = async () => {
    const url = 'http://localhost:6005/quiz'
    const response = await axios.get(url)
    const quiz = response.data
    const question = quiz.question
    const answer = quiz.answer
    console.log('quiz', quiz)
    console.log('question', question)
    console.log('answer', answer)
    setAnswer(answer)
  }

  useEffect(() => {
    getDataFromServer()
    // get data from server
    // set response to state
  }, [])

  return (
    <>
      <div className="quiz__back" role="button">
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div>
      <div>
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
        <div className="quiz__answers" onClick={() => setOpacity(0)}>
          <button className="quiz__answer">35歲 </button>
          <button className="quiz__answer">17歲</button>
          <button className="quiz__answer">22歲</button>
          <button className="quiz__answer">30歲</button>
        </div>
      </div>
    </>
  )
}
export default Question
