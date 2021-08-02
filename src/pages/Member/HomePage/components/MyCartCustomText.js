import React from 'react'
import '../../../../styles/global.css'
import '../style.css'
import { FiHeart } from 'react-icons/fi'

function MyCartCustomItem({
  customProducts,
  id,
  cust_id,
  price,
  setCustomProducts,
  custom_ingredient,
  fragrance_name,
  quantity,
  bottle_img,
}) {
  return (
    <>
      <div className="memberHomePage__productList__MyCartCustomText">
        <p>
          {cust_id} {fragrance_name}
        </p>
        <p>x {quantity}</p>
      </div>
    </>
  )
}

export default MyCartCustomItem
