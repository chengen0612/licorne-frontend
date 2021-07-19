import React, { useState } from 'react';
import './CourseList.css';
import { imgPath } from '../../../config';
import CourseContent from './CourseContent';
import CourseForm from './CourseForm';

const infoBtnClassName = 'infoBtnClassName';
const defaultClassName = 'info_btnCheck';

function CourseList() {
  const [infoBtn, setInfoBtn] = useState(true);

  const [click, setClick] = useState('info_btnCheck');
  const [clickInfo, setClickInfo] = useState('infoBtnClassName');

  //切換下方資訊狀態
  const clickInfoBtn = (changeClassName, unChangeClassName) => (e) => {
    setInfoBtn(true);
    setClickInfo(changeClassName);
    setClick(unChangeClassName);
  };

  const clickDescription = (changeClassName, unChangeClassName) => (e) => {
    setInfoBtn(false);
    setClick(changeClassName);
    setClickInfo(unChangeClassName);
  };

  return (
    <>
      <div className="content">
        <div className="box">
          <img src={imgPath + '/images/course/course-perfume1.jpg'} alt="" />
        </div>

        <aside>
          <h1 className="title">香水調製工作坊</h1>
          <p className="title_content">調配屬於你的氣味與風格</p>

          <CourseForm />
        </aside>
      </div>
      <section className="course_info">
        <div className="content_down">
          <ul className="info_btn">
            <li>
              <a
                href="#/"
                className={clickInfo}
                onClick={clickInfoBtn(infoBtnClassName, defaultClassName)}
              >
                課程內容
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={click}
                onClick={clickDescription(infoBtnClassName, defaultClassName)}
              >
                報名須知
              </a>
            </li>
          </ul>

          {/* <div className="btn_group_down">
            <button className="btn">報名</button>
            <div className="loveBox">
              <FiHeart data-feather="heart" className="far" />
            </div>
          </div> */}
        </div>
        <hr className="line" />
        <CourseContent infoBtn={infoBtn} />
      </section>
    </>
  );
}

export default CourseList;
