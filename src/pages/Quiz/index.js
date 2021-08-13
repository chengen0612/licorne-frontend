import React, { useState } from 'react'
import './style.scss'
import { baseUrl } from '../../config'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

function Quiz() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  const closeSidebar = () => {
    setSidebarIsOpen(false)
    document.body.style.width = '100%'
  }

  function openSidebar() {
    setSidebarIsOpen(true)
    const scrollbarWidth = window.innerWidth - document.body.offsetWidth
    document.body.style.overflow = 'hidden'
    document.body.style.width = `calc(100% - ${scrollbarWidth}px)`
  }

  return (
    <>
      <Sidebar sidebarIsOpen={sidebarIsOpen} closeSidebar={closeSidebar} />
      <div className="pageWrapper">
        <section className="quiz">
          <div className="quiz__info">
            <div className="quiz__info-title">
              <h3>尋找你的專屬香氣</h3>
            </div>
            <p className="quiz__info-intro">
              外在形象是每個人一輩子都必須面對的課題 <br />
              人類對不同氣味會作出直接的反應 <br />
              很多人會在不知不覺中 <br />
              利用嗅覺認知建立對人或事直觀且深刻的印象 <br />
              你是否了解你給人最主觀的印象呢？ <br />
              藉由這個簡單的測驗，來尋找專屬於你的香味吧！
            </p>
            <div className="quiz__begin">
              <button
                className="quiz__begin-btn"
                onClick={() => {
                  openSidebar()
                }}
              >
                開始
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="quiz__index-img-box">
        <img
          className="quiz__index-img"
          src={baseUrl + '/images/quiz/home-quiz.jpg'}
          alt=""
        />
      </div>
      <article className="quiz__guide">
        <h5 className="quiz__guide-text">
          香水是令人愉悅的 <br />
          小小的一瓶香水能讓人擺脫糟糕的心情
          <br />
          幾滴自己喜愛的香水味能讓你心頭的陰霾一掃而空 <br />
          只留下一片明媚與晴朗
          <br />
        </h5>
        {/* 客製化 */}
        <div className="quiz__guide-items">
          <div className="quiz__guide-item">
            <Link to="/custom/entrance" className="quiz__guide-item-link">
              <div className="quiz__guide-item-box">
                <img
                  className="quiz__guide-img-custom"
                  src={baseUrl + '/images/quiz/home-custom.jpg'}
                  alt="custom"
                />
              </div>
            </Link>
            <h4 className="quiz__guide-item-text">香水客製化</h4>
          </div>
          <div className="quiz__guide-divider"></div>
          {/* 課程 */}
          <div className="quiz__guide-item">
            <Link to="/course" className="quiz__guide-item-link">
              <div className="quiz__guide-item-box">
                <img
                  className="quiz__guide-img-course"
                  src={baseUrl + '/images/quiz/home-course.jpg'}
                  alt="course"
                />
              </div>
            </Link>
            <h4 className="quiz__guide-item-text">工作坊課程</h4>
          </div>
          <div className="quiz__guide-divider"></div>
          {/* 排行榜 */}
          <div className="quiz__guide-item">
            <Link to="/bestseller" className="quiz__guide-item-link">
              <div className="quiz__guide-item-box">
                <img
                  className="quiz__guide-img-bestseller"
                  src={baseUrl + '/images/quiz/home-bestseller.jpg'}
                  alt="course"
                />
              </div>
            </Link>
            <h4 className="quiz__guide-item-text">熱銷排行榜</h4>
          </div>
        </div>
      </article>
    </>
  )
}
export default Quiz
