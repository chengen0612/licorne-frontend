import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import MyCartFavItem from './MyCartFavItem'

function MyCartFav({ favOrCart, collectDatas, setCollectDatas }) {
  return (
    <>
      <div
        className="cj-sidebar__fav"
        style={{ display: favOrCart === 'Fav' ? 'block' : 'none' }}
      >
        {collectDatas.length > 0 ? (
          ''
        ) : (
          <p className="cj-sidebar__cart__no-item-message">
            收藏清單中沒有任何商品
          </p>
        )}

        {collectDatas.map((collectData, key) => {
          return (
            <div key={collectData.id} className="cj-sidebar__fav__item">
              <MyCartFavItem
                collectDatas={collectDatas}
                setCollectDatas={setCollectDatas}
                id={collectData.id}
                name_zh={collectData.name_zh}
                name_en={collectData.name_en}
                price={collectData.price}
                img_id={collectData.img_id}
                series_name={collectData.series_name}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MyCartFav
