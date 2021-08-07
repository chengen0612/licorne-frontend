import React, { useState, useEffect } from 'react'
import '../style.scss'
import { FiChevronLeft } from 'react-icons/fi'
import axios from 'axios'
import QuestionOne from './Questions/QuestionOne'
import QuestionTwo from './Questions/QuestionTwo'
import QuestionThree from './Questions/QuestionThree'
import QuestionFour from './Questions/QuestionFour'
import QuestionFive from './Questions/QuestionFive'

function Question({ page, setPage, returnHandler, newAns }) {
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

    /* answers */
    const ansA = questions.map((v, i) => {
      return v.A
    })
    console.log('ansA', ansA)
    setAnsA(ansA)

    const ansB = questions.map((v, i) => {
      return v.B
    })
    console.log('ansB', ansB)
    setAnsB(ansB)

    const ansC = questions.map((v, i) => {
      return v.C
    })
    console.log('ansC', ansC)
    setAnsC(ansC)

    const ansD = questions.map((v, i) => {
      return v.D
    })
    console.log('ansD', ansD)
    setAnsD(ansD)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  // change pages between different questions
  const [change, setChange] = useState(0)

  // 往前到下一題
  const nextHandler = () => {
    setChange(change + 1)
  }

  // 往回到上一題
  const backHandler = () => {
    setChange(change - 1)
  }

  // question states
  const [q1, setQ1] = useState([])
  const [q2, setQ2] = useState([])
  const [q3, setQ3] = useState([])
  const [q4, setQ4] = useState([])
  const [q5, setQ5] = useState([])
  // answer states
  const [ansA, setAnsA] = useState([])
  const [ansB, setAnsB] = useState([])
  const [ansC, setAnsC] = useState([])
  const [ansD, setAnsD] = useState([])

  // count answers
  const [ans, setAns] = useState([0, 0, 0, 0])

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
            // FIXME: return to previous array result
            setAns([0, 0, 0, 0])
            console.log('ans in return button', ans)
          }
        }}
      >
        <FiChevronLeft className="feather-s" />
        <span className="quiz__back-text">返回</span>
      </div>
      {change === 4 ? (
        <QuestionFive
          q5={q5}
          ans={ans}
          setAns={setAns}
          ansA={ansA}
          ansB={ansB}
          ansC={ansC}
          ansD={ansD}
          nextHandler={nextHandler}
          // countHandler={countHandler}
        />
      ) : change === 3 ? (
        <QuestionFour
          q4={q4}
          ans={ans}
          setAns={setAns}
          ansA={ansA}
          ansB={ansB}
          ansC={ansC}
          ansD={ansD}
          nextHandler={nextHandler}
        />
      ) : change === 2 ? (
        <QuestionThree
          q3={q3}
          ans={ans}
          setAns={setAns}
          ansA={ansA}
          ansB={ansB}
          ansC={ansC}
          ansD={ansD}
          nextHandler={nextHandler}
        />
      ) : change === 1 ? (
        <QuestionTwo
          q2={q2}
          ans={ans}
          setAns={setAns}
          ansA={ansA}
          ansB={ansB}
          ansC={ansC}
          ansD={ansD}
          nextHandler={nextHandler}
        />
      ) : (
        <QuestionOne
          q1={q1}
          ans={ans}
          setAns={setAns}
          ansA={ansA}
          ansB={ansB}
          ansC={ansC}
          ansD={ansD}
          nextHandler={nextHandler}
        />
      )}
    </>
  )
}
export default Question
