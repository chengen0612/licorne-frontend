import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiHeart } from 'react-icons/fi'

function MyCartCourseItem({ courseProducts, courseProduct }) {
  // function removeQTY() {
  //   const newCustomProducts = [...customProducts]
  //   const index = newCustomProducts.findIndex((v, i) => {
  //     return v.id === id
  //   })
  //   if (index > -1 && quantity > 1) {
  //     newCustomProducts[index].quantity--
  //   }
  //   setCustomProducts(newCustomProducts)
  // }

  // function addQTY() {
  //   const newCustomProducts = [...customProducts]
  //   const index = newCustomProducts.findIndex((v, i) => {
  //     return v.id === id
  //   })
  //   if (index > -1) {
  //     newCustomProducts[index].quantity++
  //   }
  //   setCustomProducts(newCustomProducts)
  // }

  return (
    <>
      <div className="cj-sidebar__cart__item__course-img">
        <img src={courseProduct.course_img_id} alt="" />
        <div>
          <FiHeart className="feather-s" role="button" />
        </div>
      </div>
      <div className="cj-sidebar__cart__item__course-desc">
        <p>{courseProduct.course_name_ch}</p>
        <p>
          {courseProduct.package}
          <br />
          {courseProduct.date}
          <br />
          {courseProduct.period}
          <br />
          {courseProduct.place}
          <br />
          {courseProduct.people}
        </p>
        <p></p>
        <p>NT$ {courseProduct.price}</p>
        <p
        // role="button"
        // onClick={() => {
        //   const newCustomProducts = customProducts.filter((v, i) => {
        //     return v.id !== id
        //   })
        //   setCustomProducts(newCustomProducts)
        // }}
        >
          刪除{' '}
        </p>
      </div>
      <div className="cj-sidebar__cart__item__course-btn">
        <div
        // role="button"
        // onClick={() => {
        //   removeQTY()
        // }}
        >
          -
        </div>
        <p>{courseProduct.quantity}</p>
        <div
        // role="button"
        // onClick={() => {
        //   addQTY()
        // }}
        >
          +
        </div>
      </div>
    </>
  )
}

export default MyCartCourseItem
