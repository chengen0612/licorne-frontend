import React from 'react'
import '../../../../styles/global.css'
import '../../style.css'
import MyCartFavItem from './MyCartFavItem'
import MyCartFavCustomItem from './MyCartFavCustomItem'

function MyCartFav({
  officialCollectDatas,
  setOfficialCollectDatas,
  customCollectDatas,
  setCustomCollectDatas,
}) {
  return (
    <>
      <div className="cj-sidebar__fav">
        {
          (officialCollectDatas,
          customCollectDatas.length > 0 ? (
            ''
          ) : (
            <h4 className="cj-sidebar__fav__no-item-message">
              收藏清單中沒有任何商品
            </h4>
          ))
        }

        {officialCollectDatas.map((officialCollectData, key) => {
          return (
            <div key={officialCollectData.id} className="cj-sidebar__fav__item">
              <MyCartFavItem
                officialCollectDatas={officialCollectDatas}
                setOfficialCollectDatas={setOfficialCollectDatas}
                id={officialCollectData.id}
                name_zh={officialCollectData.name_zh}
                name_en={officialCollectData.name_en}
                price={officialCollectData.price}
                img_id={officialCollectData.img_id}
              />
            </div>
          )
        })}
        {customCollectDatas.map((customCollectData, key) => {
          return (
            <div key={customCollectData.id} className="cj-sidebar__fav__item">
              <MyCartFavCustomItem
                customCollectDatas={customCollectDatas}
                setCustomCollectDatas={setCustomCollectDatas}
                id={customCollectData.id}
                top_zh={customCollectData.top_zh}
                mid_zh={customCollectData.mid_zh}
                base_zh={customCollectData.base_zh}
                cust_id={customCollectData.cust_id}
                price={customCollectData.price}
                bottle_img={customCollectData.bottle_img}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MyCartFav
