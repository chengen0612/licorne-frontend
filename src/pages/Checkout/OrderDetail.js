import React, { useState, useEffect, useContext } from 'react'
import { FiEdit } from 'react-icons/fi'
import AddressEditModal from './components/AddressEditModal'
import Backdrop from './components/Backdrop'
// import { OfficialTotalContext } from './OfficialOrder'

function OrderDetail({ officialTotal, customTotal, courseTotal }) {
  const total = officialTotal + customTotal + courseTotal
  const [memberName, setMemberName] = useState([])
  const [memberPhone, setMemberPhone] = useState([])
  const [memberAddress, setMemberAddress] = useState([])
  const [recipientName, setRecipientName] = useState([])
  const [recipientPhone, setRecipientPhone] = useState([])
  const [recipientAddress, setRecipientAddress] = useState([])

  const [showModal, setShowModal] = useState()

  function showModalHandler() {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  function closeModalHandler() {
    setShowModal(false)
    document.body.style.overflow = 'visible'
  }

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
    console.log('member info', data)
    // setMembers(data)
    const memberName = data[0].member_name
    console.log('name', memberName)
    setMemberName(memberName)
    setRecipientName(memberName)
    const memberPhone = data[0].member_phone
    console.log('phone', memberPhone)
    setMemberPhone(memberPhone)
    setRecipientPhone(memberPhone)
    const memberAddress = data[0].member_address
    console.log('address', memberAddress)
    setMemberAddress(memberAddress)
    setRecipientAddress(memberAddress)
  }

  useEffect(() => {
    getMemberInfoFromServer()
  }, [])

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
            <div className="checkout__order-box-delivery-edit-wrapper d-flex justify-content-between">
              <span className="checkout__order-box-recipient">
                {/* 哭肉狗狗 */}
                {memberName}
              </span>
              <FiEdit
                className="feather-s"
                role="button"
                onClick={showModalHandler}
              />
            </div>

            <span className="checkout__order-box-recipient-phone">
              {/* (+886) 912 345 678 */}
              {memberPhone}
            </span>
            <span className="checkout__order-box-recipient-address">
              {/* 29850桃園市桃園區中正路100巷100號 */}
              {memberAddress}
            </span>
            <span className="checkout__order-box-buyer">訂購人：同收件人</span>
            {/* </React.Fragment>
              )
            })} */}
          </div>
          {showModal && <Backdrop onClick={closeModalHandler} />}
          {showModal && (
            <AddressEditModal
              onClose={closeModalHandler}
              memberName={memberName}
              memberPhone={memberPhone}
              memberAddress={memberAddress}
              setMemberName={setMemberName}
              setMemberPhone={setMemberPhone}
              setMemberAddress={setMemberAddress}
              setRecipientName={setRecipientName}
              setRecipientPhone={setRecipientPhone}
              setRecipientAddress={setRecipientAddress}
            />
          )}
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
              {/* NT$ 26,190 */}
              NT$ {total}
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
            <span className="checkout__order-box-total-price">
              {' '}
              NT$ {total}
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-center pb-4">
          {/* TODO: disabled when cart is empty */}
          <button className="checkout__checkoutBtn" type="submit">
            確認結帳
          </button>
        </div>
      </div>
    </>
  )
}

export default OrderDetail
