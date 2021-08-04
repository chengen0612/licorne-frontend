import React, { useState, useEffect } from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { imgPath } from '../../../../config'
import { Link } from 'react-router-dom'
import MyCourseFav from '../components/MyCourseFav'

function FavoriteCourse(props) {
  const [dataLoading, setDataLoading] = useState(false)
  const [courseCollectDatas, setCourseCollectDatas] = useState([])
  const { rightCard, setRightCard } = props

  async function getCourseCollectFromServer() {
    setDataLoading(true)
    const urlCollect = 'http://localhost:6005/member/favorites/course'
    const requestCollect = new Request(urlCollect, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const responseCollect = await fetch(requestCollect)
    const courseCollectDatas = await responseCollect.json()
    setCourseCollectDatas(courseCollectDatas)
    console.log('課程資訊：', courseCollectDatas)
  }
  // 一開始就會開始載入資料
  useEffect(() => {
    getCourseCollectFromServer()
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [])

  const loading = (
    <>
      <div className="d-flex justify-content-center memberData_loading">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  const display = (
    <>
      <div className="memberFavorites__rightCard">
        <div className="memberFavorites__favoritesBtn">
          <button
            onClick={() => {
              setRightCard('香水')
            }}
            className="memberFavorites__perfumebtn favoritesBtn"
          >
            香水
          </button>
          <button
            onClick={() => {
              setRightCard('課程')
            }}
            id={rightCard === '課程' ? 'favorActive' : ''}
            className="memberFavorites__coursebtn favoritesBtn"
          >
            課程
          </button>
        </div>
        {/* {courseCollectDatas.length > 0 && courseCollectDatas[0].id} */}

        <div className="memberFavorites__courseBox">
          {courseCollectDatas.length > 0 && (
            <MyCourseFav
              courseCollectDatas={courseCollectDatas}
              setCourseCollectDatas={setCourseCollectDatas}
            />
          )}
        </div>
      </div>
    </>
  )

  return <>{dataLoading ? loading : display}</>
}

export default FavoriteCourse
