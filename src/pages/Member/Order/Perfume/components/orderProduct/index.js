import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import { baseUrl } from '../../../../../../config'

function MemberLeftCard(props) {
  const { name_zh, name_en, img_id, seriesName, price, volume, quantity } =
    props

  // add comma to price
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return (
    <>
      <div className="memberOrderPerfume__productBox">
        <div className="memberOrderPerfume__productImageBox">
          <img
            className="memberOrderPerfume__productImage"
            src={baseUrl + img_id}
            alt=""
          />
        </div>
        <div className="memberOrderPerfume__productNameBox">
          <h5 className="memberOrderPerfume__productNameTitle cnName">
            {name_zh}
          </h5>
          <h6 className="memberOrderPerfume__productNameTitle enName">
            {name_en}
          </h6>
          <h6 className="memberOrderPerfume__productNameTitle series">
            {seriesName}
          </h6>
        </div>
        <div className="memberOrderPerfume__productCapacityBox">
          <h5 className="memberOrderPerfume__productCapacity">{volume}</h5>
        </div>
        <div className="memberOrderPerfume__productCountBox">
          <h5 className="memberOrderPerfume__productCount">x {quantity}</h5>
        </div>
        <div className="memberOrderPerfume__productPriceBox">
          <h5 className="memberOrderPerfume__productPrice">
            NT${numberWithCommas(price * quantity)}
          </h5>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
