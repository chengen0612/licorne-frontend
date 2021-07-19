import React, { useState, useEffect } from 'react'
// import { imgPath } from '../../config'
import { FiX } from 'react-icons/fi'

function CourseOrder() {
  const [courseItems, setCourseItems] = useState([])
  const [courseQuantities, setCourseQuantities] = useState([])
  const [coursePackages, setCoursePackages] = useState([])
  async function getCourseInfoFromServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/checkout'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    const courseProduct = data.course
    const courseQuantity = data.courseQuantity
    const coursePackage = data.coursePackage
    console.log(courseProduct)
    console.log(courseQuantity)
    console.log(coursePackage)
    // 設定資料
    setCourseItems(courseProduct)
    setCourseQuantities(courseQuantity)
    setCoursePackages(coursePackage)
  }

  useEffect(() => {
    getCourseInfoFromServer()
  }, [])

  return (
    <>
      <div className="checkout__course-box-top pl-4 pt-3 pb-2">
        <label className="checkout__course-box-title">
          <input
            className="checkout__course-box-checkbox-all"
            type="checkbox"
          />
          工作坊課程 <span>({courseItems.length})</span>
        </label>
      </div>
      {courseItems.map((v, i) => {
        const courseItem = v[0]
        return (
          <div className="checkout__course-box-list p-4" key={courseItem.id}>
            <input className="checkout__course-box-checkbox" type="checkbox" />
            <div className="checkout__course-box-img-wrapper">
              <img
                className="checkout__course-box-img"
                // src={imgPath + '/images/course/perfume.jpeg'}
                src={courseItem.img_id}
                alt=""
              />
            </div>
            <div className="checkout__course-box-details w-25 pl-4">
              <span className="checkout__course-box-name-zh">
                {/* 香水調製工作坊 */}
                {courseItem.course_name_ch}
              </span>
              <span className="checkout__course-box-product-package">
                {/* 一日體驗 */}
                {coursePackages}
              </span>
              <span className="checkout__course-box-product-date">
                {/* 2021/06/22 */}
                {courseItem.course_date}
              </span>
              <span className="checkout__course-box-product-time">
                {/* 09:00 - 17:00 */}
                {courseItem.course_time_period}
              </span>
              <span className="checkout__course-box-product-place">
                {/* 高雄小港店 */}
                {courseItem.course_place}
              </span>
            </div>
            <span className="checkout__course-box-product-price">
              {/* NT $1200 */}
              NT$ {courseItem.course_price}
            </span>
            <span className="checkout__course-box-product-quantity">
              {/* 單人 */}
              {courseQuantities}
            </span>
            <span className="checkout__course-box-product-subtotal">
              NT $1200
            </span>
            {/* TODO: delete product detail */}
            <FiX className="feather-s" role="button" />
          </div>
        )
      })}
    </>
  )
}

export default CourseOrder
