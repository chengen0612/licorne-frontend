import React from 'react'
import './style.css'
// import { imgPath } from '../../config'
import { FiX } from 'react-icons/fi'
import Start from './components/Start'
import Question from './components/Question'
import Result from './components/Result'

function Sidebar({ sidebarIsOpen, closeSidebar }) {
  return (
    <>
      <div
        className={
          sidebarIsOpen
            ? 'quiz__backdrop'
            : 'quiz__backdrop quiz__backdrop-close'
        }
        onClick={() => {
          closeSidebar()
          document.body.style.overflow = 'visible'
        }}
      ></div>
      <div
        className={
          sidebarIsOpen ? 'quiz__sidebar' : 'quiz__sidebar quiz__sidebar-close'
        }
      >
        <div className="quiz__close">
          <FiX
            className="feather-m"
            role="button"
            onClick={() => {
              closeSidebar()
              document.body.style.overflow = 'visible'
            }}
          />
        </div>
        <Start />
        {/* <Question /> */}
        {/* <Result /> */}
      </div>
    </>
  )
}
export default Sidebar
