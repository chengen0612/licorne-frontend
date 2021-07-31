import React, { useState, useEffect } from 'react';
import { imgPath } from '../../../config';

function CourseExhibition() {
  // 接收資料庫傳來的資料，並讓資料可以設定
  const [title, setTitle] = useState('');
  const [titleInfo, setTitleInfo] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [img, setImg] = useState();
  //-------------------------接收title
  async function getCourseFromServer() {
    const url = `http://localhost:6005/course`;
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    });
    const response = await fetch(request);
    const data = await response.json();
    setTitle(data.name[2].course_name_ch);
    setTitleInfo(data.name[2].course_title_ch);
    setCourseDescription(data.name[2].course_description_ch);
    setImg(data.name[2].course_img);
  }

  useEffect(() => {
    getCourseFromServer();
  }, []);
  return (
    <>
      <div className="diffuser__content">
        <div className="diffuser__box">
          <img src={imgPath + img} alt="" />
        </div>

        <aside className="diffuser__aside">
          <h1 className="title">{title}</h1>
          <p className="title_content">{titleInfo}</p>
          <p className="course__ready mt-4">{courseDescription}</p>
        </aside>
      </div>
    </>
  );
}
export default CourseExhibition;
