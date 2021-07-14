import React, { useState } from 'react';
import { imgPath } from '../../../config';
import CourseDescription from './CourseDescription';

function CourseContent(props) {
  const { infoBtn } = props;
  return (
    <>
      <div className="copywriting_info">
        <div className="course_description">
          <CourseDescription infoBtn={infoBtn} />
        </div>
        <div className="course_photo">
          <div className="course_box">
            <img
              className="course_img1"
              src={imgPath + '/images/course/perfume1.jpg'}
              alt=""
            />
          </div>
          <p className="image_text">我是圖片說明文字</p>
          <div className="course_box">
            <img
              className="course_img2"
              src={imgPath + '/images/course/course-perfume2.jpg'}
              alt=""
            />
          </div>
          <p className="image_text">我是圖片說明文字</p>
        </div>
      </div>
    </>
  );
}
export default CourseContent;
