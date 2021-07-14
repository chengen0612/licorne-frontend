import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'

function AddressEditModal(props) {
  const [username, setUsername] = useState('哭肉狗狗')
  const [phone, setPhone] = useState('+886 912 345 678')
  const [address, setAddress] = useState('29850 桃園市桃園區中正路100巷100號')
  const [recipient, setRecipient] = useState('哭肉狗狗')
  const [recipientPhone, setRecipientPhone] = useState('+886 912 345 678')
  const [recipientAddress, setRecipientAddress] = useState(
    '29850 桃園市桃園區中正路100巷100號'
  )
  const [same, setSame] = useState(true)

  function editHandler() {
    props.onEdit()
  }

  function closeHandler() {
    props.onClose()
  }

  return (
    <div className="checkout__address-edit-modal d-flex flex-column p-4">
      <FiX
        className="checkout__address-edit-modal-close align-self-end feather-s"
        role="button"
        onClick={closeHandler}
      />
      <span className="checkout__address-edit-modal-title align-self-center">
        編輯收件資訊
      </span>
      <form className="d-flex flex-column p-4">
        <span className="checkout__address-edit-modal-title pb-2">訂購人</span>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          姓名
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          電話
          <input
            name="phone"
            type="text"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          地址
          <input
            name="address"
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value)
            }}
            required
          />
        </label>
        <span className="checkout__address-edit-modal-title">收件人</span>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          姓名
          <input
            name="recipient"
            type="text"
            value={recipient}
            onChange={(e) => {
              setRecipient(e.target.value)
            }}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          電話
          <input
            name="recipientPhone"
            type="text"
            value={recipientPhone}
            onChange={(e) => {
              setRecipientPhone(e.target.value)
            }}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          地址
          <input
            name="recipientAddress"
            type="text"
            value={recipientAddress}
            onChange={(e) => {
              setRecipientAddress(e.target.value)
            }}
            required
          />
        </label>
        <label className="checkbox-label" htmlFor="">
          <input
            type="checkbox"
            checked={same}
            onChange={(e) => {
              setSame(e.target.checked)
            }}
          />
          收件資訊同上
        </label>
        <button
          className="checkout__address-edit-modal-btn align-self-end"
          onClick={editHandler}
        >
          更新地址
        </button>
      </form>
    </div>
  )
}

export default AddressEditModal
