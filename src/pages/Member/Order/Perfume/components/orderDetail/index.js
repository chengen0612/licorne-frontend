import React, { useState, useEffect } from 'react'
import './style.css'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import MemberOrderProduct from '../orderProduct'
import axios from 'axios'

function OrderPerfumeDetail() {
  const [order, setOrder] = useState([])
  const [total, setTotal] = useState(0)
  const [address, setAddress] = useState('')
  const [orderId, setOrderId] = useState('')
  const getProductOrder = async () => {
    let url = `http://localhost:6005/memberOrder`
    const response = await axios.get(url)
    let product = await response.data.product
    let total = await response.data.total
    let address = await response.data.address
    let orderId = await response.data.order_id
    setOrder(product)
    setTotal(total)
    setAddress(address)
    setOrderId(orderId)
  }

  useEffect(() => {
    getProductOrder()
  }, [])

  return (
    <>
      <div className="memberOrderPerfume__detailOrderBox">
        <div className="memberOrderPerfume__detailTitleBox">
          <p className="memberOrderPerfume__detailTitle">官方商品</p>
          <button className="memberOrderPerfume__goBackBtn">
            <FiArrowLeft size={30} />
          </button>
        </div>
        <div className="memberOrderPerfume__detailNumberBox">
          <div className="memberOrderPerfume__detailNumberTitle">
            <h5>訂單編號</h5>
          </div>
          <div className="memberOrderPerfume__detailNumber">
            <h5>{orderId}</h5>
          </div>
        </div>
        <hr className="memberOrderPerfume__detailTopLine" />
        <div className="memberOrderPerfume__detailBox">
          <div className="memberOrderPerfume__detailLeftBox">
            <div className="memberOrderPerfume__detailItemTitle">
              <h2 className="memberOrderPerfume__orderTitle">訂單內容</h2>
            </div>
            {order.map((order, i) => {
              return (
                <div className="memberOrderPerfume__orderTopItem orderItem">
                  <MemberOrderProduct
                    key={i}
                    name_zh={order.name_zh}
                    name_en={order.name_en}
                    img_id={order.img_id}
                    seriesName={order.seriesName}
                    price={order.price}
                    volume={order.volume}
                    quantity={order.quantity}
                  />
                </div>
              )
            })}
            {/* <div className="memberOrderPerfume__orderBottomItem orderItem">
              <MemberOrderProduct />
            </div> */}
          </div>
          <div className="memberOrderPerfume__detailRightBox">
            <div className="memberOrderPerfume__rightTopBox">
              <div className="memberOrderPerfume__receiveBox">
                <h2 className="memberOrderPerfume__receiveTitle">收件資訊</h2>
                <h3 className="memberOrderPerfume__receiveName receiveText">
                  哭肉狗狗
                </h3>
                <h3 className="memberOrderPerfume__receiveAddress receiveText">
                  {address}
                </h3>
                <h3 className="memberOrderPerfume__receivePhone receiveText">
                  0912 345 678
                </h3>
              </div>
            </div>
            <div className="memberOrderPerfume__rightBottomBox">
              <div className="memberOrderPerfume__statusBox">
                <h2 className="memberOrderPerfume__statusTitle">訂單狀態</h2>
                <div className="memberOrderPerfume__statusIconBox">
                  <div className="memberOrderPerfume__statusCircle_one">
                    <FiCheck
                      size={26}
                      className="memberOrderPerfume__statusConfirm"
                    />
                  </div>
                  <div className="memberOrderPerfume__leftLine"></div>
                  <div className="memberOrderPerfume__statusCircle">
                    <FiCheck
                      size={26}
                      className="memberOrderPerfume__statusConfirm"
                    />
                  </div>
                  <div className="memberOrderPerfume__middleLine"></div>
                  <div className="memberOrderPerfume__statusCircle">
                    <FiCheck
                      size={26}
                      className="memberOrderPerfume__statusConfirm"
                    />
                  </div>
                  <div className="memberOrderPerfume__rightLine"></div>
                  <div className="memberOrderPerfume__statusCircle">
                    <FiCheck
                      size={26}
                      className="memberOrderPerfume__statusConfirm"
                    />
                  </div>
                </div>
                <div className="memberOrderPerfume__statusNameBox">
                  <div className="memberOrderPerfume__statusName">
                    <h4 className="memberOrderPerfume__statusNameText processing">
                      處理中
                    </h4>
                  </div>
                  <div className="memberOrderPerfume__statusName">
                    <h4 className="memberOrderPerfume__statusNameText shipped">
                      已出貨
                    </h4>
                  </div>
                  <div className="memberOrderPerfume__statusName">
                    <h4 className="memberOrderPerfume__statusNameText transporting">
                      運送中
                    </h4>
                  </div>
                  <div className="memberOrderPerfume__statusName">
                    <h4 className="memberOrderPerfume__statusNameText completed">
                      已完成
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="memberOrderPerfume__detailBottomLine" />
        <div className="memberOrderPerfume__detailTotalBox">
          <div className="memberOrderPerfume__detailTotalTital">
            <h5>總計</h5>
          </div>
          <div className="memberOrderPerfume__detailTotalNumber">
            <h5>NT$ {total} </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderPerfumeDetail
