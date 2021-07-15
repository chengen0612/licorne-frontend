import React from 'react';
import { imgPath } from '../../../config';

function CourseExhibition() {
  return (
    <>
      <div className="diffuser__content">
        <div className="diffuser__box">
          <img src={imgPath + '/images/course/course-perfume1.jpg'} alt="" />
        </div>

        <aside className="diffuser__aside">
          <h1 className="title">氣味限定展覽</h1>
          <p className="title_content">各種驚奇香氛待你一「聞」究竟</p>
          <p className="course__ready mt-4">展覽籌備中，敬請期待</p>
        </aside>
      </div>
    </>
  );
}
export default CourseExhibition;
