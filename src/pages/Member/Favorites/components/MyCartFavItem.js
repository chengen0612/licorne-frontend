import React from 'react'
import '../../../../styles/global.css'
import '../../style.css'
import { FiShoppingBag } from 'react-icons/fi'
import swal from 'sweetalert'

function MyCartFavItem({
  officialCollectDatas,
  setOfficialCollectDatas,
  id,
  name_zh,
  name_en,
  price,
  img_id,
  series_name,
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
        const newCollectDatas = officialCollectDatas.filter((v, i) => {
          return v.id !== id
        })
        setOfficialCollectDatas(newCollectDatas)
      }
    })
  }
  return (
    <>
      <div className="memberProduct__fav__item__img">
        <img src={img_id} alt="" />
      </div>
      <div className="memberProduct__fav__item__desc">
        <p>{name_zh}</p>
        <p>
          {name_en}
          <br />
         {series_name}
        </p>
        <p>NT$ {price}</p>
        <p
          role="button"
          onClick={() => {
            askDelete()
          }}
        >
          刪除
        </p>
      </div>
      <div className="memberProduct__fav__item__btn__box">
        <button className="memberProduct__fav__item__btn">
          <FiShoppingBag />
        </button>
      </div>
    </>
  )
}

export default MyCartFavItem
