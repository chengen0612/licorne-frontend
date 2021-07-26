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
        {collectDatas.length > 0 ? '' : <h1>NO DATA</h1>}

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
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MyCartFav
