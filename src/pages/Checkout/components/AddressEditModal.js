import React, { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'

function AddressEditModal(props) {
  const {
    memberName,
    memberPhone,
    memberAddress,
    setMemberName,
    setMemberPhone,
    setMemberAddress,
    setRecipientName,
    setRecipientPhone,
    setRecipientAddress,
  } = props

  const initialData = Object.freeze({
    memberName: { memberName },
    memberPhone: { memberPhone },
    memberAddress: { memberAddress },
    recipientName: { memberName },
    recipientPhone: { memberPhone },
    recipientAddress: { memberAddress },
  })

  const [data, updateData] = useState(initialData)

  const updateMemberName = (e) => {
    setMemberName(memberName)
    updateData({
      ...data,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    })
  }

  const updateMemberPhone = (e) => {
    setMemberPhone(memberPhone)
    updateData({
      ...data,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    })
  }

  const updateMemberAddress = (e) => {
    setMemberAddress(memberAddress)
    updateData({
      ...data,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    })
  }

  const updateRecipientName = (e) => {
    setRecipientName()
    updateData({
      ...data,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    })
  }

  const updateRecipientPhone = (e) => {
    setRecipientPhone()
    updateData({
      ...data,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    })
  }

  const updateRecipientAddress = (e) => {
    setRecipientAddress()
    updateData({
      ...data,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('edited member info', data)
    closeHandler()
    // ... submit to API or something
  }

  function closeHandler() {
    props.onClose()
    document.body.style.overflow = 'visible'
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
      <div className="d-flex flex-column p-4">
        <span className="checkout__address-edit-modal-title pb-2">訂購人</span>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          姓名
          <input
            className="checkout__input-text"
            name="memberName"
            type="text"
            defaultValue={memberName}
            onChange={updateMemberName}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          電話
          <input
            className="checkout__input-text"
            name="memberPhone"
            type="text"
            defaultValue={memberPhone}
            onChange={updateMemberPhone}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          地址
          <input
            className="checkout__input-text"
            name="memberAddress"
            type="text"
            defaultValue={memberAddress}
            onChange={updateMemberAddress}
            required
          />
        </label>
        <span className="checkout__address-edit-modal-title">收件人</span>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          姓名
          <input
            className="checkout__input-text"
            name="recipientName"
            type="text"
            defaultValue={memberName}
            onChange={updateRecipientName}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          電話
          <input
            className="checkout__input-text"
            name="recipientPhone"
            type="text"
            defaultValue={memberPhone}
            onChange={updateRecipientPhone}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          地址
          <input
            className="checkout__input-text"
            name="recipientAddress"
            type="text"
            defaultValue={memberAddress}
            onChange={updateRecipientAddress}
            required
          />
        </label>
        <label className="checkbox-label" htmlFor="">
          <input type="checkbox" />
          收件資訊同上
        </label>
        {/* input type="button" 如果跟modal衝到 */}
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
