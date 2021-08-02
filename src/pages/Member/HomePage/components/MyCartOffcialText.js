// Official Product 內層
import React from 'react'
import '../../../../styles/global.css'
import '../style.css'
import { FiHeart } from 'react-icons/fi'

function MyCartOffcialItem({
  id,
  officialProducts,
  setOfficialProducts,
  img_id,
  name_zh,
  name_en,
  price,
  volume,
  quantity,
  series_name,
}) {
  return (
    <>
      <div className="memberHomePage__productList__MyCartOffcialText">
        <p>
          {series_name}系列 {name_zh}
        </p>
        <p>x {quantity}</p>
      </div>
    </>
  )
}

export default MyCartOffcialItem
