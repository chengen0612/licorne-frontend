import React, { useState, useEffect } from 'react'
// import { imgPath } from '../../config'
import { FiX } from 'react-icons/fi'

function CourseOrder() {
  const [courseItems, setCourseItems] = useState([])
  async function getCourseInfoFromServer() {
    const url = 'http://localhost:6005/checkout'
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
    console.log('courseProduct', courseProduct)
    setCourseItems(courseProduct)
  }

  useEffect(() => {
    getCourseInfoFromServer()
  }, [])

  const handleDelete = (id) => {
    const newCourseItems = courseItems.filter((v, i) => {
      return v.id !== id
    })
    console.log('current courseItems', newCourseItems)
    setCourseItems(newCourseItems)
  }

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
      {courseItems.map((courseItem, i) => {
        return (
          <React.Fragment key={i}>
            <div className="checkout__course-box-list p-4">
              <input
                className="checkout__course-box-checkbox"
                type="checkbox"
              />
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
                  {courseItem.package}
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
                {courseItem.quantity}
              </span>
              <span className="checkout__course-box-product-subtotal">
                NT $1200
              </span>
              {/* TODO: delete product detail */}
              <FiX
                className="feather-s"
                role="button"
                onClick={() => {
                  handleDelete(courseItem.id)
                }}
              />
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default CourseOrder
