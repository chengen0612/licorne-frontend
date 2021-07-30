import React, { useState, useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import AddressEditModal from './components/AddressEditModal'
import Backdrop from './components/Backdrop'

function OrderDetail() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    async function getMemberInfoFromServer() {
      // 連接的伺服器資料網址
      const url = 'http://localhost:6005/checkout/member'

      // 注意header資料格式要設定，伺服器才知道是json格式
      const request = new Request(url, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      const response = await fetch(request)
      const data = await response.json()
      console.log('memberInfo', data)
      setMembers(data)
    }
    getMemberInfoFromServer()
  }, [setMembers])

  const [showModal, setShowModal] = useState()
  function showModalHandler() {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  function closeModalHandler() {
    setShowModal(false)
    document.body.style.overflow = 'visible'
  }

  return (
    <>
      <div className="checkout__order-box-top pl-4 pt-3 pb-3">
        <span className="checkout__order-box-title">訂單明細</span>
      </div>
      <div className="checkout__order-box-details">
        <div className="checkout__order-box-delivery pr-4 pl-4 pt-3 pb-4">
          <span className="checkout__order-box-delivery-title">運送方式</span>
          <div className="checkout__order-box-delivery-labels">
            <label htmlFor="" className="checkout__order-box-delivery-address">
              <input
                className="radio"
                type="radio"
                name="delivery"
                defaultChecked="checked"
              />
              指定地址
            </label>
            <label htmlFor="" className="checkout__order-box-delivery-store">
              <input className="radio" type="radio" name="delivery" />
              店鋪自取
            </label>
          </div>
          <div className="checkout__order-box-delivery-edit-bg d-flex flex-column p-3 mt-2 mb-2">
            {members.map((member) => {
              return (
                <React.Fragment key={member.id}>
                  <div className="checkout__order-box-delivery-edit-wrapper d-flex justify-content-between">
                    <span className="checkout__order-box-recipient">
                      {/* 哭肉狗狗 */}
                      {member.member_name}
                    </span>
                    <FiEdit
                      className="feather-s"
                      role="button"
                      onClick={showModalHandler}
                    />
                  </div>

                  <span className="checkout__order-box-recipient-phone">
                    {/* (+886) 912 345 678 */}
                    {member.member_phone}
                  </span>
                  <span className="checkout__order-box-recipient-address">
                    {/* 29850桃園市桃園區中正路100巷100號 */}
                    {member.member_address}
                  </span>
                  <span className="checkout__order-box-buyer">
                    訂購人：同收件人
                  </span>
                </React.Fragment>
              )
            })}
          </div>
          {showModal && <Backdrop onClick={closeModalHandler} />}
          {showModal && <AddressEditModal onClose={closeModalHandler} />}
        </div>
        <div className="checkout__order-box-payment pr-4 pl-4 pb-4">
          <span className="checkout__order-box-payment-title">付款方式</span>
          <div className="checkout__order-box-payment-labels">
            <label className="checkout__order-box-payment-card">
              <input
                className="radio"
                type="radio"
                name="payment"
                defaultChecked="checked"
              />
              信用卡
            </label>
            <label className="checkout__order-box-payment-cash">
              <input className="radio" type="radio" name="payment" />
              貨到付款
            </label>
          </div>
        </div>
        <div className="checkout__order-box-amount pr-4 pl-4 pb-4">
          <span className="checkout__order-box-amount-title">訂購金額</span>
          <div className="checkout__order-box-subtotal pt-2 pl-4 pr-4 pb-2">
            <span className="checkout__order-box-subtotal-text">商品總計</span>
            <span className="checkout__order-box-subtotal-price">
              NT$ 26,190
            </span>
          </div>
          <div className="checkout__order-box-delivery-fee pl-4 pr-4">
            <span className="checkout__order-box-delivery-fee-text">運費</span>
            <span className="checkout__order-box-delivery-fee-price">
              NT$ 0
            </span>
          </div>
          <hr className="checkout__order-box-divider" />
          <div className="checkout__order-box-total pl-4 pr-4">
            <span className="checkout__order-box-total-text">結帳金額：</span>
            <span className="checkout__order-box-total-price">NT$ 26,190</span>
          </div>
        </div>
        <div className="d-flex justify-content-center pb-4">
          {/* TODO: disabled when cart is empty */}
          <button className="checkout__checkoutBtn">確認結帳</button>
        </div>
      </div>
    </>
  )
}

export default OrderDetail