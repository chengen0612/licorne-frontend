import React, { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'

function AddressEditModal(props) {
  const [memberContacts, setMemberContacts] = useState([])
  // const [username, setUsername] = useState([])
  // const [phone, setPhone] = useState('+886 912 345 678')
  // const [address, setAddress] = useState('29850 桃園市桃園區中正路100巷100號')
  // const [recipient, setRecipient] = useState('哭肉狗狗')
  // const [recipientPhone, setRecipientPhone] = useState('+886 912 345 678')
  // const [recipientAddress, setRecipientAddress] = useState('29850 桃園市桃園區中正路100巷100號')
  async function getMemberInfoFromServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/checkout'

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
    const memberInfo = data.member
    console.log(memberInfo)
    // 設定資料
    setMemberContacts(memberInfo)
  }

  useEffect(() => {
    getMemberInfoFromServer()
  }, [])

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
      {memberContacts.map((memberContact, i) => {
        return (
          <form className="d-flex flex-column p-4" key={i}>
            <span className="checkout__address-edit-modal-title pb-2">
              訂購人
            </span>
            <label className="checkout__address-edit-modal-label" htmlFor="">
              姓名
              <input
                name="username"
                type="text"
                // key={memberContact.id}
                defaultValue={memberContact.member_name}
                // value={state.username}
                // onChange={handleChange}
                required
              />
            </label>
            <label className="checkout__address-edit-modal-label" htmlFor="">
              電話
              <input
                name="phone"
                type="text"
                // key={memberContact.id}
                defaultValue={memberContact.member_phone}
                // value={state.phone}
                // onChange={handleChange}
                required
              />
            </label>
            <label className="checkout__address-edit-modal-label" htmlFor="">
              地址
              <input
                name="address"
                type="text"
                // key={memberContact.id}
                defaultValue={memberContact.member_address}
                // value={state.address}
                // onChange={handleChange}
                required
              />
            </label>
            <span className="checkout__address-edit-modal-title">收件人</span>
            <label className="checkout__address-edit-modal-label" htmlFor="">
              姓名
              <input
                name="recipient"
                type="text"
                // key={memberContact.id}
                defaultValue={memberContact.member_name}
                // value={state.recipient}
                // onChange={handleChange}
                required
              />
            </label>
            <label className="checkout__address-edit-modal-label" htmlFor="">
              電話
              <input
                name="recipientPhone"
                type="text"
                // key={memberContact.id}
                defaultValue={memberContact.member_phone}
                // value={state.recipientPhone}
                // onChange={handleChange}
                required
              />
            </label>
            <label className="checkout__address-edit-modal-label" htmlFor="">
              地址
              <input
                name="recipientAddress"
                type="text"
                // key={memberContact.id}
                defaultValue={memberContact.member_receive}
                // value={state.recipientAddress}
                // onChange={handleChange}
                required
              />
            </label>
            <label className="checkbox-label" htmlFor="">
              <input type="checkbox" />
              收件資訊同上
            </label>
            <button
              className="checkout__address-edit-modal-btn align-self-end"
              type="submit"
            >
              更新地址
            </button>
          </form>
        )
      })}
    </div>
  )
}

export default AddressEditModal
