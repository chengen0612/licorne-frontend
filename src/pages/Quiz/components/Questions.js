import React, { useState, useEffect } from 'react'
import '../style.scss'
import { FiChevronLeft } from 'react-icons/fi'
import axios from 'axios'
import Start from './Start'
import QuestionOne from './Questions/QuestionOne'
import QuestionTwo from './Questions/QuestionTwo'
import QuestionThree from './Questions/QuestionThree'
import QuestionFour from './Questions/QuestionFour'
import QuestionFive from './Questions/QuestionFive'

function Question({ page, setPage, returnHandler }) {
  // QuestionOne
  const [q1, setQ1] = useState([])
  const [a1, setA1] = useState([])
  const [b1, setB1] = useState([])
  const [c1, setC1] = useState([])
  const [d1, setD1] = useState([])

  // QuestionTwo
  const [q2, setQ2] = useState([])
  const [a2, setA2] = useState([])
  const [b2, setB2] = useState([])
  const [c2, setC2] = useState([])
  const [d2, setD2] = useState([])

  // QuestionThree
  const [q3, setQ3] = useState([])
  const [a3, setA3] = useState([])
  const [b3, setB3] = useState([])
  const [c3, setC3] = useState([])
  const [d3, setD3] = useState([])

  // QuestionFour
  const [q4, setQ4] = useState([])
  const [a4, setA4] = useState([])
  const [b4, setB4] = useState([])
  const [c4, setC4] = useState([])
  const [d4, setD4] = useState([])

  // QuestionFive
  const [q5, setQ5] = useState([])
  const [a5, setA5] = useState([])
  const [b5, setB5] = useState([])
  const [c5, setC5] = useState([])
  const [d5, setD5] = useState([])

  const getDataFromServer = async () => {
    const url = 'http://localhost:6005/quiz'
    const response = await axios.get(url)
    const quiz = response.data
    console.log('quiz', quiz)

    /* questions */
    const questions = quiz.question
    const question = questions.map((v, i) => {
      return v.topic
    })

    console.log('questions', questions)
    setQ1(question[0])
    setQ2(question[1])
    setQ3(question[2])
    setQ4(question[3])
    setQ5(question[4])

    const answers = quiz.answer
    const questsArr = answers.map((v, i) => {
      return v.topic
    })
    const answer = answers.map((v, i) => {
      return v.answer
    })
    console.log('answers', answer)
    // console.log('questions', questsArr)

    // returns index of the first answer in array of questions
    const index1 = questsArr.findIndex((quest) => quest === question[0])
    const index2 = questsArr.findIndex((quest) => quest === question[1])
    const index3 = questsArr.findIndex((quest) => quest === question[2])
    const index4 = questsArr.findIndex((quest) => quest === question[3])
    const index5 = questsArr.findIndex((quest) => quest === question[4])

    console.log('index', index1, index2, index3, index4, index5)
    /* answers */
    // QuestionOne
    const a1 = answer[index1]
    const b1 = answer[index1 + 1]
    const c1 = answer[index1 + 2]
    const d1 = answer[index1 + 3]
    setA1(a1)
    setB1(b1)
    setC1(c1)
    setD1(d1)

    // QuestionTwo
    const a2 = answer[index2]
    const b2 = answer[index2 + 1]
    const c2 = answer[index2 + 2]
    const d2 = answer[index2 + 3]
    setA2(a2)
    setB2(b2)
    setC2(c2)
    setD2(d2)

    // QuestionThree
    const a3 = answer[index3]
    const b3 = answer[index3 + 1]
    const c3 = answer[index3 + 2]
    const d3 = answer[index3 + 3]
    setA3(a3)
    setB3(b3)
    setC3(c3)
    setD3(d3)

    // QuestionFour
    const a4 = answer[index4]
    const b4 = answer[index4 + 1]
    const c4 = answer[index4 + 2]
    const d4 = answer[index4 + 3]
    setA4(a4)
    setB4(b4)
    setC4(c4)
    setD4(d4)

    // QuestionFive
    const a5 = answer[index5]
    const b5 = answer[index5 + 1]
    const c5 = answer[index5 + 2]
    const d5 = answer[index5 + 3]
    setA5(a5)
    setB5(b5)
    setC5(c5)
    setD5(d5)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  // change page between different questions
  const [change, setChange] = useState(0)

  // 往前到下一題
  const nextHandler = () => {
    setChange(change + 1)
  }

  // 往回到上一題
  const backHandler = () => {
    setChange(change - 1)
  }

  return (
    <>
      {/* {console.log('change', change)}
      {console.log('page', page)} */}
      <div
        className="quiz__back"
        role="button"
        onClick={() => {
          if (change === 0) {
            returnHandler()
          } else {
            backHandler()
          }
        }}
      >
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div>
      {change === 4 ? (
        <QuestionFive
          q5={q5}
          a5={a5}
          b5={b5}
          c5={c5}
          d5={d5}
          nextHandler={nextHandler}
        />
      ) : change === 3 ? (
        <QuestionFour
          q4={q4}
          a4={a4}
          b4={b4}
          c4={c4}
          d4={d4}
          nextHandler={nextHandler}
        />
      ) : change === 2 ? (
        <QuestionThree
          q3={q3}
          a3={a3}
          b3={b3}
          c3={c3}
          d3={d3}
          nextHandler={nextHandler}
        />
      ) : change === 1 ? (
        <QuestionTwo
          q2={q2}
          a2={a2}
          b2={b2}
          c2={c2}
          d2={d2}
          nextHandler={nextHandler}
        />
      ) : (
        <QuestionOne
          q1={q1}
          a1={a1}
          b1={b1}
          c1={c1}
          d1={d1}
          nextHandler={nextHandler}
        />
      )}
    </>
  )
}
export default Question
