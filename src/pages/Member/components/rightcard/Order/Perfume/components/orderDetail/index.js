import React from 'react'
import './style.css'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import MemberOrderProduct from '../orderProduct'

function MemberLeftCard() {
  return (
    <>
      <div className="memberOrder__detailOrderBox">
        <div className="memberOrder__detailTitleBox">
          <p className="memberOrder__detailTitle">官方商品</p>
          <button className="memberOrder__goBackBtn">
            <FiArrowLeft size={30} />
          </button>
        </div>
        <div className="memberOrder__detailNumberBox">
          <div className="memberOrder__detailNumberTitle">
            <h5>訂單編號</h5>
          </div>
          <div className="memberOrder__detailNumber">
            <h5>20210608168LCR</h5>
          </div>
        </div>
        <hr className="memberOrder__detailTopLine" />
        <div className="memberOrder__detailBox">
          <div className="memberOrder__detailLeftBox">
            <div className="memberOrder__detailItemTitle">
              <h2 className="memberOrder__orderTitle">訂單內容</h2>
            </div>
            <div className="memberOrder__orderTopItem orderItem">
              <MemberOrderProduct />
            </div>
            <div className="memberOrder__orderBottomItem orderItem">
              <MemberOrderProduct />
            </div>
          </div>
          <div className="memberOrder__detailRightBox">
            <div className="memberOrder__rightTopBox">
              <div className="memberOrder__receiveBox">
                <h2 className="memberOrder__receiveTitle">收件資訊</h2>
                <h3 className="memberOrder__receiveName receiveText">
                  哭肉狗狗
                </h3>
                <h3 className="memberOrder__receiveAddress receiveText">
                  桃園市桃園區中正路100巷100號101樓
                </h3>
                <h3 className="memberOrder__receivePhone receiveText">
                  0912 345 678
                </h3>
              </div>
            </div>
            <div className="memberOrder__rightBottomBox">
              <div className="memberOrder__statusBox">
                <h2 className="memberOrder__statusTitle">訂單狀態</h2>
                <div className="memberOrder__statusIconBox">
                  <div className="memberOrder__statusCircle">
                    <FiCheck size={26} className="memberOrder__statusConfirm" />
                  </div>
                  <div className="memberOrder__statusLine leftLine"></div>
                  <div className="memberOrder__statusCircle">
                    <FiCheck size={26} className="memberOrder__statusConfirm" />
                  </div>
                  <div className="memberOrder__statusLine middleLine"></div>
                  <div className="memberOrder__statusCircle">
                    <FiCheck size={26} className="memberOrder__statusConfirm" />
                  </div>
                  <div className="memberOrder__statusLine rightLine"></div>
                  <div className="memberOrder__statusCircle">
                    <FiCheck size={26} className="memberOrder__statusConfirm" />
                  </div>
                </div>
                <div className="memberOrder__statusNameBox">
                  <div className="memberOrder__statusName">
                    <h4 className="memberOrder__statusNameText processing">
                      處理中
                    </h4>
                  </div>
                  <div className="memberOrder__statusName">
                    <h4 className="memberOrder__statusNameText shipped">
                      已出貨
                    </h4>
                  </div>
                  <div className="memberOrder__statusName">
                    <h4 className="memberOrder__statusNameText transporting">
                      運送中
                    </h4>
                  </div>
                  <div className="memberOrder__statusName">
                    <h4 className="memberOrder__statusNameText completed">
                      已完成
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="memberOrder__detailBottomLine" />
        <div className="memberOrder__detailTotalBox">
          <div className="memberOrder__detailTotalTital">
            <h5>總計</h5>
          </div>
          <div className="memberOrder__detailTotalNumber">
            <h5>NT$ 7,300 </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
