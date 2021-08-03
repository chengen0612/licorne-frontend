import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'

function AddressEditModal(props) {
  const {
    checked,
    setChecked,
    memberName,
    memberPhone,
    memberAddress,
    recipientName,
    recipientPhone,
    recipientAddress,
    setRecipientName,
    setRecipientPhone,
    setRecipientAddress,
  } = props

  const initialData = {
    recipientName: recipientName,
    recipientPhone: recipientPhone,
    recipientAddress: recipientAddress,
  }

  const [data, updateData] = useState(initialData)

  console.log('recipient name', data.recipientName)
  console.log('recipient phone', data.recipientPhone)
  console.log('recipient address', data.recipientAddress)

  const updateRecipientName = (e) => {
    updateData({
      ...data,
      [e.target.name]: e.target.value.trimStart(),
    })
    // console.log('current recipientName', Object.values(data)[0])
  }

  const updateRecipientPhone = (e) => {
    updateData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    })
    // console.log('current recipientPhone', Object.values(data)[1])
  }

  const updateRecipientAddress = (e) => {
    updateData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    })
    // console.log('current recipientAddress', Object.values(data)[2])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('edited recipient info', data)
    setRecipientName(Object.values(data)[0])
    setRecipientPhone(Object.values(data)[1])
    setRecipientAddress(Object.values(data)[2])
    closeHandler()
    // ... submit to API or something
  }

  // const [checked, setChecked] = useState(true)

  function closeHandler() {
    props.onClose()
    document.body.style.overflow = 'visible'
  }

  function clearField() {
    data.recipientName = ''
    data.recipientPhone = ''
    data.recipientAddress = ''
  }

  function inputField() {
    data.recipientName = memberName
    data.recipientPhone = memberPhone
    data.recipientAddress = memberAddress
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
      {/* 訂購人 */}
      <div className="d-flex flex-column p-4">
        <span className="checkout__address-edit-modal-title pb-2">訂購人</span>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          姓名
          <input
            className="checkout__input-text"
            name="memberName"
            type="text"
            defaultValue={memberName}
            disabled
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          電話
          <input
            className="checkout__input-text"
            name="memberPhone"
            type="text"
            defaultValue={memberPhone}
            disabled
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          地址
          <input
            className="checkout__input-text"
            name="memberAddress"
            type="text"
            defaultValue={memberAddress}
            disabled
          />
        </label>
        {/* 收件人 */}
        {/* TODO: html5 validation for each input field */}
        <span className="checkout__address-edit-modal-title">收件人</span>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          姓名
          <input
            className="checkout__input-text"
            name="recipientName"
            type="text"
            value={data.recipientName}
            onInput={updateRecipientName}
            disabled={checked && memberName === data.recipientName}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          電話
          <input
            className="checkout__input-text"
            name="recipientPhone"
            type="text"
            value={data.recipientPhone}
            onChange={updateRecipientPhone}
            disabled={checked && memberPhone === data.recipientPhone}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          地址
          <input
            className="checkout__input-text"
            name="recipientAddress"
            type="text"
            value={data.recipientAddress}
            onChange={updateRecipientAddress}
            disabled={checked && memberAddress === data.recipientAddress}
            required
          />
        </label>
        <label className="checkbox-label" htmlFor="">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked)
            }}
            onClick={(e) => {
              e.target.checked ? inputField() : clearField()
            }}
          />
          收件資訊同上
        </label>
        {/* TODO: validation for when input field is empty */}
        <button
          className="checkout__address-edit-modal-btn align-self-end"
          type="submit"
          onClick={handleSubmit}
        >
          更新地址
        </button>
      </div>
    </div>
  )
}

export default AddressEditModal
