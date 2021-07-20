import React from 'react'
import './style.css'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import OrderCourseItem from '../orderProduct'

function MemberLeftCard() {
  return (
    <>
      <div className="memberOrderCourse__detailOrderBox">
        <div className="memberOrderCourse__detailTitleBox">
          <p className="memberOrderCourse__detailTitle">官方商品</p>
          <button className="memberOrderCourse__goBackBtn">
            <FiArrowLeft size={30} />
          </button>
        </div>
        <div className="memberOrderCourse__detailNumberBox">
          <div className="memberOrderCourse__detailNumberTitle">
            <h5>課程編號</h5>
          </div>
          <div className="memberOrderCourse__detailNumber">
            <h5>20210608168LCR</h5>
          </div>
        </div>
        <hr className="memberOrderCourse__detailTopLine" />
        <div className="memberOrderCourse__detailBox">
          <div className="memberOrderCourse__detailLeftBox">
            <div className="memberOrderCourse__detailItemTitle">
              <h2 className="memberOrderCourse__orderTitle">課程內容</h2>
            </div>
            <OrderCourseItem />
            <div className="memberOrderCourse__numAndPrice">
              <div className="memberOrderCourse__numOfPeople">
                <h4 className="memberOrderCourse__numOfPeopleTitle">人數</h4>
                <h4 className="memberOrderCourse__peopleNumber">1 人</h4>
              </div>
              <div className="memberOrderCourse__price">
                <h4 className="memberOrderCourse__priceTitle">課程費用</h4>
                <h4 className="memberOrderCourse__priceNumber">NT$ 1,200</h4>
              </div>
            </div>
          </div>
          <div className="memberOrderCourse__detailRightBox">
            <div className="memberOrderCourse__rightTopBox">
              <div className="memberOrderCourse__receiveBox">
                <h2 className="memberOrderCourse__receiveTitle">會員資訊</h2>
                <h3 className="memberOrderCourse__receiveName receiveText">
                  姓名: 哭肉狗狗
                </h3>
                <h3 className="memberOrderCourse__receiveAccount receiveText">
                  帳號: testaccount
                </h3>
                <h3 className="memberOrderCourse__receivePhone receiveText">
                  行動電話: 0912 345 678
                </h3>
              </div>
            </div>
            <div className="memberOrderCourse__rightBottomBox">
              <div className="memberOrderCourse__courseBox">
                <h2 className="memberOrderCourse__courseTitle">上課資訊</h2>
                <div className="memberOrderCourse__courseDetailBox">
                  <h3 className="memberOrderCourse__courseTime courseText">
                    上課時間
                  </h3>
                  <h3 className="memberOrderCourse__courseTime courseText">
                    2021-12-31 13:00 ~ 18:30
                  </h3>
                  <h3 className="memberOrderCourse__coursePlace courseText">
                    上課地點
                  </h3>
                  <h3 className="memberOrderCourse__coursePlace courseText">
                    台北市大安區和平東路一段1234號10樓 (大安和平店)
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberLeftCard
