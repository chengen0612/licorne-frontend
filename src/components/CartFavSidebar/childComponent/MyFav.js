import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import MyFavOfficialItem from './MyFavOfficialItem'

function MyFav({ favOrCart, officialFavorites, setOfficialFavorites }) {
  return (
    <>
      <div
        className="cj-sidebar__fav"
        style={{ display: favOrCart === 'Fav' ? 'block' : 'none' }}
      >
        {officialFavorites.length > 0 ? (
          ''
        ) : (
          <p className="cj-sidebar__cart__no-item-message">
            收藏清單中沒有任何商品
          </p>
        )}

        {officialFavorites.map((officialFavorite, key) => {
          return (
            <div key={officialFavorite.id} className="cj-sidebar__fav__item">
              <MyFavOfficialItem
                officialFavorites={officialFavorites}
                setOfficialFavorites={setOfficialFavorites}
                id={officialFavorite.id}
                name_zh={officialFavorite.name_zh}
                name_en={officialFavorite.name_en}
                price={officialFavorite.price}
                img_id={officialFavorite.img_id}
                series_name={officialFavorite.series_name}
                volume={officialFavorite.volume}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MyFav
