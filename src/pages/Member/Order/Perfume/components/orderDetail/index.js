import React from 'react'
import './style.css'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import MemberOrderProduct from '../orderProduct'

function OrderPerfumeDetail() {
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
            <h5>20210608168LCR</h5>
          </div>
        </div>
        <hr className="memberOrderPerfume__detailTopLine" />
        <div className="memberOrderPerfume__detailBox">
          <div className="memberOrderPerfume__detailLeftBox">
            <div className="memberOrderPerfume__detailItemTitle">
              <h2 className="memberOrderPerfume__orderTitle">訂單內容</h2>
            </div>
            <div className="memberOrderPerfume__orderTopItem orderItem">
              <MemberOrderProduct />
            </div>
            <div className="memberOrderPerfume__orderBottomItem orderItem">
              <MemberOrderProduct />
            </div>
          </div>
          <div className="memberOrderPerfume__detailRightBox">
            <div className="memberOrderPerfume__rightTopBox">
              <div className="memberOrderPerfume__receiveBox">
                <h2 className="memberOrderPerfume__receiveTitle">收件資訊</h2>
                <h3 className="memberOrderPerfume__receiveName receiveText">
                  哭肉狗狗
                </h3>
                <h3 className="memberOrderPerfume__receiveAddress receiveText">
                  桃園市桃園區中正路100巷100號101樓
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
            <h5>NT$ 7,300 </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderPerfumeDetail
