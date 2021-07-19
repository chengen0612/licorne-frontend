import React, { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'

function AddressEditModal(props) {
  const [members, setMembers] = useState([])
  // const [username, setUsername] = useState('哭肉狗狗')
  // const [phone, setPhone] = useState('+886 912 345 678')
  // const [address, setAddress] = useState('29850 桃園市桃園區中正路100巷100號')
  // const [recipient, setRecipient] = useState('哭肉狗狗')
  // const [recipientPhone, setRecipientPhone] = useState('+886 912 345 678')
  // const [recipientAddress, setRecipientAddress] = useState('29850 桃園市桃園區中正路100巷100號')
  const [same, setSame] = useState(true)

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
    setMembers(memberInfo)
  }

  useEffect(() => {
    getMemberInfoFromServer()
  }, [])

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
      {members.map((v, i) => {
        const member = v[0]
        return (
          <form className="d-flex flex-column p-4">
            <span className="checkout__address-edit-modal-title pb-2">
              訂購人
            </span>
            <label className="checkout__address-edit-modal-label" htmlFor="">
              姓名
              <input
                name="username"
                type="text"
                key={member.id}
                defaultValue={member.member_name}
                // onChange={(e) => {
                //   setUsername(e.target.value)
                // }}
                required
              />
            </label>
            <label className="checkout__address-edit-modal-label" htmlFor="">
              電話
              <input
                name="phone"
                type="text"
                key={member.id}
                defaultValue={member.member_phone}
                // onChange={(e) => {
                //   setPhone(e.target.value)
                // }}
                required
              />
            </label>
            <label className="checkout__address-edit-modal-label" htmlFor="">
              地址
              <input
                name="address"
                type="text"
                key={member.id}
                defaultValue={member.member_address}
                // onChange={(e) => {
                //   setAddress(e.target.value)
                // }}
                required
              />
            </label>
            <span className="checkout__address-edit-modal-title">收件人</span>
            <label className="checkout__address-edit-modal-label" htmlFor="">
              姓名
              <input
                name="recipient"
                type="text"
                key={member.id}
                defaultValue={member.member_name}
                // onChange={(e) => {
                //   setRecipient(e.target.value)
                // }}
                required
              />
            </label>
            <label className="checkout__address-edit-modal-label" htmlFor="">
              電話
              <input
                name="recipientPhone"
                type="text"
                key={member.id}
                defaultValue={member.member_phone}
                // onChange={(e) => {
                //   setRecipientPhone(e.target.value)
                // }}
                required
              />
            </label>
            <label className="checkout__address-edit-modal-label" htmlFor="">
              地址
              <input
                name="recipientAddress"
                type="text"
                key={member.id}
                value={member.member_receive}
                // onChange={(e) => {
                //   setRecipientAddress(e.target.value)
                // }}
                required
              />
            </label>
            <label className="checkbox-label" htmlFor="">
              <input
                type="checkbox"
                checked={same}
                // onChange={(e) => {
                //   setSame(e.target.checked)
                // }}
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
        )
      })}
    </div>
  )
}

export default AddressEditModal
