import React from 'react'
import '../../../../styles/global.css'
import '../../style.css'
import MyCartFavCustomItem from './MyCourseItem'

function MyCourseFav({ courseCollectDatas, setCourseCollectDatas }) {
  console.log(courseCollectDatas.id)
  return (
    <>
      <div className="">
        {courseCollectDatas.map((courseCollectData, key) => {
          return (
            <div key={courseCollectData.id} className="">
              <MyCartFavCustomItem
                courseCollectDatas={courseCollectDatas}
                setCourseCollectDatas={setCourseCollectDatas}
                id={courseCollectData.id}
                course_id={courseCollectData.course_id}
                course_name_ch={courseCollectData.course_name_ch}
                course_img={courseCollectData.course_img}
                course_description_ch={courseCollectData.course_description_ch}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MyCourseFav
