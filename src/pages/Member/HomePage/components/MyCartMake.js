import React from 'react'
import '../../../../styles/global.css'
import '../style.css'
import { FiHeart, FiShoppingBag } from 'react-icons/fi'
import { imgPath } from '../../../../config'
import MyCartMakeItem from './MyCartFavMakeItem'

function MyCartMake({
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
      {customCollectDatas.length > 0 ? (
        ''
      ) : (
        <h4 className="cj-sidebar__cart__no-item-message">沒有任何組合商品</h4>
      )}
      {customCollectDatas.map((customCollectData, key) => {
        return (
          <div key={customCollectData.id} className="cj-sidebar__make__item">
            <MyCartMakeItem
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
    </>
  )
}

export default MyCartMake
