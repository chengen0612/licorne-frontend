import React from 'react'
import '../../../../styles/global.css'
import '../../style.css'
import { FiShoppingBag } from 'react-icons/fi'

function MyCartFavItem({
  officialCollectDatas,
  setOfficialCollectDatas,
  id,
  name_zh,
  name_en,
  price,
  img_id,
}) {
  return (
    <>
      <div className="cj-sidebar__fav__item__img">
        <img src={img_id} alt="" />
      </div>
      <div className="cj-sidebar__fav__item__desc">
        <p>{name_zh}</p>
        <p>
          {name_en}
          <br />
          XXXX系列
        </p>
        <p>NT$ {price}</p>
        <p
          onClick={() => {
            const newCollectDatas = officialCollectDatas.filter((v, i) => {
              return v.id !== id
            })
            setOfficialCollectDatas(newCollectDatas)
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

export default MyCartFavItem
