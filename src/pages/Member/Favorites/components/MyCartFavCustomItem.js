import React from 'react'
import '../../../../styles/global.css'
import '../../style.css'
import { FiShoppingBag } from 'react-icons/fi'

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
  return (
    <>
      <div className="cj-sidebar__fav__item__img">
        <img src={bottle_img} alt="" />
      </div>
      <div className="cj-sidebar__fav__item__desc">
        <p>{cust_id}</p>
        <p>
          {top_zh}、{mid_zh}、{base_zh}
        </p>
        <p>NT$ {price}</p>
        <p
          onClick={() => {
            const newCollectDatas = customCollectDatas.filter((v, i) => {
              return v.id !== id
            })
            setCustomCollectDatas(newCollectDatas)
          }}
        >
          刪除
        </p>
      </div>
      <div className="cj-sidebar__fav__item__btn">
        <div>
          <FiShoppingBag />
        </div>
      </div>
    </>
  )
}

export default MyCartFavCustomItem
