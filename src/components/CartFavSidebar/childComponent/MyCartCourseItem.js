import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiHeart } from 'react-icons/fi'

function MyCartCourseItem({
  courseProducts,
  courseProduct,
  setCourseProducts,
}) {
  return (
    <>
      <div className="cj-sidebar__cart__item__course-img">
        <img src={courseProduct.course_img} alt="" />
        <div>{/* <FiHeart className="feather-s" role="button" /> */}</div>
      </div>
      <div className="cj-sidebar__cart__item__course-desc">
        <p>{courseProduct.course_name_ch}</p>
        <p>
          {courseProduct.package}
          <span> </span>
          {courseProduct.people}
        </p>
        <p>
          {courseProduct.date}
          <br />
          {courseProduct.period}
        </p>
        <p>{courseProduct.place}</p>
        <p>NT$ {courseProduct.price}</p>
        <p
          role="button"
          onClick={() => {
            const newCourseProducts = courseProducts.filter((v, i) => {
              return v.course_id !== courseProduct.course_id
            })
            setCourseProducts(newCourseProducts)
          }}
        >
          刪除{' '}
        </p>
      </div>
      <div className="cj-sidebar__cart__item__course-btn">
        <div>-</div>
        <p>{courseProduct.quantity}</p>
        <div>+</div>
      </div>
    </>
  )
}

export default MyCartCourseItem
