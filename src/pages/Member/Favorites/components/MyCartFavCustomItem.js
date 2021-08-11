import React from 'react'
import '../../../../styles/global.css'
import '../../style.css'
import { FiShoppingBag } from 'react-icons/fi'
import swal from 'sweetalert'

function MyCartFavCustomItem({
  customCollectDatas,
  setCustomCollectDatas,
  id,
  cust_id,
  price,
  bottle_img,
  top_zh,
  mid_zh,
  base_zh,
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
        const newCollectDatas = customCollectDatas.filter((v, i) => {
          return v.id !== id
        })
        setCustomCollectDatas(newCollectDatas)
      }
    })
  }

  // add comma to price
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <>
      <div className="memberProduct__fav__item__img">
        <img src={bottle_img} alt="" />
      </div>
      <div className="memberProduct__fav__item__desc">
        <p>{cust_id}</p>
        <p>
          {top_zh}、{mid_zh}、{base_zh}
        </p>
        <p>NT$ {numberWithCommas(price)}</p>
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

export default MyCartFavCustomItem
