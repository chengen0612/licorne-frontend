import React from 'react'
import '../../../../styles/global.css'
import '../../style.css'
import { FiShoppingBag } from 'react-icons/fi'
import { imgPath } from '../../../../config'
import swal from 'sweetalert'

function MyCourseItem({
  courseCollectDatas,
  setCourseCollectDatas,
  id,
  course_id,
  course_name_ch,
  course_img,
  course_description_ch,
}) {
  function askDelete() {
    swal({
      title: '確定要刪除嗎？',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: '刪除成功！',
          icon: 'success',
        })
        const newCollectDatas = courseCollectDatas.filter((v, i) => {
          return v.id !== id
        })
        setCourseCollectDatas(newCollectDatas)
      }
    })
  }
  return (
    <>
      <div className="memberFavorites__courseItem">
        <div className="memberFavorites__courseImage">
          <img className="memberFavorites__image" src={course_img} alt="" />
        </div>
        <div className="memberFavorites__couresText">
          <h2 className="memberFavorites__couresTitle">{course_name_ch}</h2>
          <p className="memberFavorites__couresInfo">{course_description_ch}</p>
        </div>
        <div className="memberFavorites__delAndSignup">
          <p
            className="memberFavorites__delBtn"
            onClick={() => {
              askDelete()
            }}
          >
            刪除
          </p>
          <input
            type="button"
            className="memberFavorites__signUp signUp1"
            value="報名"
          />
        </div>
      </div>
      <hr className="memberFavorites__line" />
    </>
  )
}

export default MyCourseItem
