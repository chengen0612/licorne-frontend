import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiShoppingBag } from 'react-icons/fi'

function MyFavCourseItem({
  courseFavorites,
  courseFavorite,
  setCourseFavorites,
}) {
  return (
    <>
      <div className="cj-sidebar__cart__item__course-img">
        <img src={courseFavorite.course_img} alt="" />
      </div>
      <div className="cj-sidebar__cart__item__course-desc">
        <p>{courseFavorite.course_name_ch}</p>
        <p>
          {courseFavorite.package}
          <span> </span>
          {courseFavorite.people}
        </p>
        <p>
          {courseFavorite.date}
          <br />
          {courseFavorite.period}
        </p>
        <p>{courseFavorite.place}</p>
        <p>NT$ {courseFavorite.price}</p>
        <p
          role="button"
          onClick={() => {
            const newCourseFavorites = courseFavorites.filter((v, i) => {
              return v.course_id !== courseFavorite.course_id
            })
            setCourseFavorites(newCourseFavorites)
          }}
        >
          刪除{' '}
        </p>
      </div>
      <div className="cj-sidebar__fav__item__course-btn">
        <div>
          <FiShoppingBag />
        </div>
      </div>
    </>
  )
}

export default MyFavCourseItem
