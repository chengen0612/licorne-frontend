import React, { useState } from 'react'
import DeliveryRadio from './DeliveryRadio'
import { FiEdit } from 'react-icons/fi'
import AddressEditModal from './AddressEditModal'
import Backdrop from './Backdrop'

function DeliveryMethod() {
  const [delivery, setDelivery] = useState('指定地址')
  const deliveryList = ['指定地址', '來店自取']

  const [showModal, setShowModal] = useState()
  function showModalHandler() {
    setShowModal(true)
  }
  function closeModalHandler() {
    setShowModal(false)
  }

  return (
    <>
      <div className="checkout__order-box-delivery pr-4 pl-4 pt-3 pb-4">
        <span className="checkout__order-box-delivery-title">運送方式</span>
        <div className="checkout__order-box-delivery-labels">
          {deliveryList.map((v, i) => {
            return (
              <DeliveryRadio
                key={i}
                value={v}
                checkedValue={delivery}
                setCheckedValue={setDelivery}
              />
            )
          })}
        </div>
        <div className="checkout__order-box-delivery-edit-bg d-flex flex-column p-3 mt-2 mb-2">
          <div className="checkout__order-box-delivery-edit-wrapper d-flex justify-content-between">
            <span className="checkout__order-box-recipient">哭肉狗狗</span>
            <FiEdit
              className="feather-s"
              role="button"
              onClick={showModalHandler}
            />
          </div>
          <span className="checkout__order-box-recipient-phone">
            (+886) 912 345 678
          </span>
          <span className="checkout__order-box-recipient-address">
            29850桃園市桃園區中正路100巷100號
          </span>
          <span className="checkout__order-box-buyer">訂購人：同收件人</span>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && <AddressEditModal onClose={closeModalHandler} />}
      </div>
    </>
  )
}

export default DeliveryMethod
