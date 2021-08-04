import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import sense from './imgs/home-course1.jpeg'
import diffuser from './imgs/home-course2.jpg'
import perfume from './imgs/home-course3.jpg'

function HomeCourse() {
  return (
    <section className="course">
      <div className="course__text">
        <div className="course__title">工作方體驗課程</div>
        <div className="course__sentence">
          Licorne
          提供有世界級名師指導的優質體驗課程。課程結束還可以拿到國際認證證書，有趣又好玩！
        </div>
      </div>
      <div className="course__cards">
        <div className="course__card">
          {/* TODO: change to Link? */}
          <Link className="course__card-link" to="/course/exhibition">
            {/* FIXME: unnatural transition */}
            <div className="course__card-image-wrapper">
              {/* TODO: find new photo */}
              <img className="course__card-image" src={sense} alt="" />
              <span className="course__card-image-text">
                各種驚奇香氛
                <br />
                在此待你一「聞」究竟
              </span>
            </div>
            <div className="course__card-text">
              <div className="course__card-title">氣味限定展覽</div>
              <span className="course__card-price">NT$ 500 起</span>
            </div>
          </Link>
        </div>
        <div className="course__card">
          {/* TODO: change to Link? */}
          <Link className="course__card-link" to="/course/diffuser">
            {/* FIXME: unnatural transition */}
            <div className="course__card-image-wrapper">
              <img className="course__card-image" src={diffuser} alt="" />
              <span className="course__card-image-text">
                讓濃郁香氣
                <br />
                將心中的憂慮祛除一空
              </span>
            </div>
            <div className="course__card-text">
              <div className="course__card-title">擴香製作體驗</div>
              <span className="course__card-price">NT$ 1280 起</span>
            </div>
          </Link>
        </div>
        <div className="course__card">
          {/* TODO: change to Link? */}
          <Link className="course__card-link" to="/course/list">
            {/* FIXME: unnatural transition */}
            <div className="course__card-image-wrapper">
              <img className="course__card-image" src={perfume} alt="" />
              <span className="course__card-image-text">
                隨心所欲地
                <br />
                調配出你的氣味與風格
              </span>
            </div>
            <div className="course__card-text">
              <div className="course__card-title">香水調製工作坊</div>
              <span className="course__card-price">NT$ 2400 起</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeCourse
