import React from 'react'
import './style.css'
// import { imgPath } from '../../config'
import { FiX } from 'react-icons/fi'
import Start from './Start'
import Question from './Question'
import Result from './Result'

function Sidebar() {
  return (
    <>
      <div className="quiz__sidebar">
        <div className="quiz__close">
          <FiX className="feather-m" />
        </div>
        {/* <Start /> */}
        {/* <Question /> */}
        <Result />
      </div>
    </>
  )
}
export default Sidebar
