import React, { useState, useEffect } from 'react'
import './CourseList.css'
import { imgPath } from '../../../config'
import authentication from '../../../utils/authentication'
import CourseContent from './CourseContent'
import CourseForm from './CourseForm'

const infoBtnClassName = 'infoBtnClassName'
const defaultClassName = 'info_btnCheck'

function CourseList() {
  const [infoBtn, setInfoBtn] = useState(true)

  const [click, setClick] = useState('info_btnCheck')
  const [clickInfo, setClickInfo] = useState('infoBtnClassName')
  // 接收資料庫傳來的資料，並讓資料可以設定
  const [title, setTitle] = useState('')
  const [titleInfo, setTitleInfo] = useState('')
  const [placeLatLng, setPlaceLatLng] = useState([])
  const [img, setImg] = useState()

  //切換下方資訊狀態
  const clickInfoBtn = (changeClassName, unChangeClassName) => (e) => {
    setInfoBtn(true)
    setClickInfo(changeClassName)
    setClick(unChangeClassName)
  }

  const clickDescription = (changeClassName, unChangeClassName) => (e) => {
    setInfoBtn(false)
    setClick(changeClassName)
    setClickInfo(unChangeClassName)
  }

  //-------------------------接收後端資料
  async function getCourseFromServer() {
    const url = `http://localhost:6005/course`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // title 標題 、TitleInfo 標題說明
    setTitle(data.name[0].course_name_ch)
    setTitleInfo(data.name[0].course_title_ch)
    setImg(data.name[0].course_img)

    setPlaceLatLng(data.place)
  }
  // 用生命週期接收後端資料
  useEffect(() => {
    getCourseFromServer()
  }, [])

  //--------------------------
  const courseCollect = {
    title: title,
    info: titleInfo,
    img: img,
  }

  //-------------------------將收藏送至資料庫
  async function sentCollect() {
    const executor = async (token) => {
      const url = `http://localhost:6005/getCollect`

      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(courseCollect),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: 'Bearer ' + token,
        }),
      })
      const response = await fetch(request)
      const data = await response.json()
      console.log('收藏成功!', data)
    }

    authentication(executor)
  }
  //-------------------------------------------------

  return (
    <>
      <div className="content">
        <div className="box">
          <img src={imgPath + img} alt="" />
        </div>

        <aside>
          <h1 className="title">{title}</h1>
          <p className="title_content">{titleInfo}</p>

          <CourseForm placeLatLng={placeLatLng} sentCollect={sentCollect} />
        </aside>
      </div>
      <section className="course_info">
        <div className="content_down">
          <ul className="info_btn">
            <li>
              <span
                role="button"
                className={clickInfo}
                onClick={clickInfoBtn(infoBtnClassName, defaultClassName)}
              >
                課程內容
              </span>
            </li>
            <li>
              <span
                role="button"
                className={click}
                onClick={clickDescription(infoBtnClassName, defaultClassName)}
              >
                報名須知
              </span>
            </li>
          </ul>
        </div>
        <hr className="line" />
        <CourseContent infoBtn={infoBtn} />
      </section>
    </>
  )
}

export default CourseList
