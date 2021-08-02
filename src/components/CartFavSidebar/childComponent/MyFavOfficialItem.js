import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import { FiShoppingBag } from 'react-icons/fi'

function MyFavOfficialItem({
  officialFavorites,
  setOfficialFavorites,
  id,
  name_zh,
  name_en,
  price,
  img_id,
  series_name,
  volume,
}) {
  return (
    <>
      <div className="cj-sidebar__fav__item__official-img">
        <img src={img_id} alt="" />
      </div>
      <div className="cj-sidebar__fav__item__official-desc">
        <p>{name_zh}</p>
        <p>
          {name_en}
          <br />
          {series_name}系列
        </p>
        <div>
          {volume === '100ml' ? (
            <p>瓶裝 100ML</p>
          ) : volume === '50ml' ? (
            <p>瓶裝 50ML</p>
          ) : (
            <p>資料不符合</p>
          )}
        </div>
        <p>NT$ {price}</p>
        <p
          onClick={() => {
            const newOfficialFavorites = officialFavorites.filter((v, i) => {
              return v.id !== id
            })
            setOfficialFavorites(newOfficialFavorites)
          }}
        >
          刪除
        </p>
      </div>
      <div className="cj-sidebar__fav__item__official-btn">
        <div>
          <FiShoppingBag />
        </div>
      </div>
    </>
  )
}

export default MyFavOfficialItem
