import React from 'react'
import '../../../../styles/global.css'
import '../style.css'
import { FiHeart, FiShoppingBag } from 'react-icons/fi'
import { baseUrl } from '../../../../config'
import MyCartMakeItem from './MyCartFavMakeItem'

function MyCartMake({
  customCollectDatas,
  setCustomCollectDatas,
  setCustomProducts,
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
        <h4 className="memberProduct__cart__no-item-message">
          沒有任何組合商品
        </h4>
      )}
      {customCollectDatas.map((customCollectData, key) => {
        return (
          <div key={customCollectData.id} className="memberProduct__make__item">
            <MyCartMakeItem
              customCollectDatas={customCollectDatas}
              setCustomCollectDatas={setCustomCollectDatas}
              setCustomProducts={setCustomProducts}
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
