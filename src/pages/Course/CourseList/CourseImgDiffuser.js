import React from 'react';
import { imgPath } from '../../../config';

function CourseDiffuser() {
  return (
    <>
      <div className="diffuser__content">
        <div className="diffuser__box">
          <img src={imgPath + '/images/course/course_diffuser.jpg'} alt="" />
        </div>

        <aside className="diffuser__aside">
          <h1 className="title">擴香製作體驗</h1>
          <p className="title_content">裊裊霧氣，伴隨濃郁香氣充滿空間</p>
          <p className="course__ready mt-4">課程準備中，敬請期待</p>
        </aside>
      </div>
    </>
  );
}
export default CourseDiffuser;
