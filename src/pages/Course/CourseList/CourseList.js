import React, { useState } from 'react';
import './CourseList.css';
import { imgPath } from '../../../config';
import { FiHeart, FiRotateCcw } from 'react-icons/fi';
import CourseContent from './CourseContent';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CourseList() {
  const [infoBtn, setInfoBtn] = useState(true);
  const [value, onChange] = useState(new Date());

  function clickInfoBtn() {
    setInfoBtn(true);
  }

  function clickDescription() {
    setInfoBtn(false);
  }

  return (
    <>
      <div className="content">
        <div className="box">
          <img src={imgPath + '/images/course/course-perfume1.jpg'} alt="" />
        </div>

        <aside>
          <h2 className="title">香水調製工作坊</h2>
          <p className="title_content">調配屬於你的氣味與風格</p>
          <div className="recheck__width d-flex justify-content-end">
            <button className="recheck_box">
              <FiRotateCcw data-feather="rotateccw" className="recheck__icon" />
              重選
            </button>
          </div>

          <div className="font">
            <div className="fontContent">
              <div className="block_select">
                <label className="labelText">地點</label>
                <button className="palce__select">請選擇店鋪</button>
              </div>

              <div className="block_select">
                <label className="labelText">方案</label>
                <div className="select-style">
                  <select>
                    <option value="">半日體驗</option>
                    <option value="">一日體驗</option>
                  </select>
                </div>
              </div>

              <div className="block_select">
                <label className="labelText">日期</label>
                {/* <div className="datebox"> */}
                <Calendar
                  onChange={onChange}
                  value={value}
                  calendarType={'US'}
                />
                {/* </div> */}
              </div>

              <div className="block_select">
                <label className="labelText">時間</label>
                <div className="select-style">
                  <select>
                    <option className="time">09:00 - 12:00</option>
                    <option className="time">14:00 - 17:00</option>
                  </select>
                </div>
                <label className="labelText">人數</label>
                <div className="select-style">
                  <select>
                    <option value="">單人 NT$ 1,200</option>
                    <option value="">雙人 NT$ 2,000</option>
                    <option value="">四人同行一人免費 NT$ 3,500</option>
                  </select>
                </div>
                <div className="btn_group">
                  <button className="btn">報名</button>
                  <div className="loveBox">
                    <FiHeart data-feather="heart" className="far" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <section className="course_info">
        <div className="content_down">
          <ul className="info_btn">
            <li>
              <a href="#/" onClick={clickInfoBtn}>
                課程內容
              </a>
            </li>
            <li>
              <a href="#/" onClick={clickDescription}>
                報名須知
              </a>
            </li>
          </ul>

          <div className="btn_group_down">
            <button className="btn">報名</button>
            <div className="loveBox">
              <FiHeart data-feather="heart" className="far" />
            </div>
          </div>
        </div>
        <hr className="line" />
        <CourseContent infoBtn={infoBtn} />
      </section>
    </>
  );
}

export default CourseList;
