import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'

function CheakList() {
  return (
    <>
      <div className="memberHomePage__cheakListBox">
        <div className="memberHomePage__totalBox">
          <h5 className="memberHomePage__totalAmount">總金額：</h5>
          <h5 className="memberHomePage__totalNumber">NT$7,500</h5>
        </div>
        <hr></hr>
        <div className="memberHomePage__productList">
          <ul>
            <li>
              <h6 className="memberHomePage__product">
                茗茶香氛系列 玉露綠茶 x2
              </h6>
            </li>
            <li>
              <h6 className="memberHomePage__product">動物香氛系列 夜鶯 x1</h6>
            </li>
            <li>
              <h6 className="memberHomePage__product">客製果香調香氛 x2</h6>
            </li>
          </ul>
        </div>
        <div className="memberHomePage__goPay">
          <button className="memberHomePage__goPayBtn">前往結帳</button>
        </div>
      </div>
    </>
  )
}

export default CheakList
