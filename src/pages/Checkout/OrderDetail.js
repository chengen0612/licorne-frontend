import React, { useState, useEffect } from 'react'
import myswal from '../../utils/sweetalert'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'
import Backdrop from './components/Backdrop'
import AddressEditModal from './components/AddressEditModal'
import StoreMapModal from './components/StoreMapModal'
import DeliveryRadio from './components/DeliveryRadio'
import PaymentRadio from './components/PaymentRadio'

const DeliveryMethod = ({
  memberName,
  memberPhone,
  memberAddress,
  recipientName,
  recipientPhone,
  recipientAddress,
  setRecipientName,
  setRecipientPhone,
  setRecipientAddress,
  placeLatLng,
  storeName,
  storeAddress,
  storePhone,
  storeLat,
  storeLng,
  setStoreName,
  setStorePhone,
  setStoreAddress,
}) => {
  const deliveryMethod = ['指定地址', '店鋪自取']
  const [checked, setChecked] = useState(true)
  const [checkedValue, setCheckedValue] = useState(deliveryMethod[0])

  // console.log('what is this', storeName[10])

  //預設顯示資訊
  const [stores, setStores] = useState([
    {
      course_place_name: '高雄民益店',
      course_place_address: '高雄市小港區民益路13號',
      course_place_phone: '07-8012255',
      course_place_lat: 22.5662669501168,
      course_place_lng: 120.34782427919656,
    },
  ])

  const initialData = {
    course_place_name: storeName[10],
    course_place_address: storeAddress[10],
    course_place_phone: storePhone[10],
    course_place_lat: storeLat[10],
    course_place_lng: storeLng[10],
  }

  const [data, updateData] = useState(initialData)

  function onPlaceChange(newStoreName, newStorePhone, newStoreAddress) {
    setStoreName(newStoreName)
    setStorePhone(newStorePhone)
    setStoreAddress(newStoreAddress)
    updateData({
      ...data,
      course_place_name: newStoreName,
      course_place_phone: newStorePhone,
      course_place_address: newStoreAddress,
    })
  }

  const [showModal, setShowModal] = useState('')

  function showModalHandler(option) {
    setShowModal(option)
    document.body.style.overflow = 'hidden'
  }

  function closeModalHandler() {
    setShowModal('')
    document.body.style.overflow = 'visible'
  }

  return (
    <>
      <div className="checkout__order-box-delivery-labels">
        <DeliveryRadio
          deliveryMethod={deliveryMethod}
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
        />
      </div>
      {/* 指定地址 */}
      {checkedValue === deliveryMethod[0] && (
        <div className="checkout__order-box-delivery-edit-bg p-3 mt-2 mb-2">
          <div className="checkout__order-box-delivery-edit-wrapper">
            <span className="checkout__order-box-recipient">
              {/* 哭肉狗狗 */}
              {/* send to db: 收件人姓名 */}
              {recipientName}
            </span>
            <FiEdit
              className="feather-s"
              role="button"
              onClick={() => showModalHandler(deliveryMethod[0])}
            />
          </div>
          <span className="checkout__order-box-recipient-phone">
            {/* 0912345678 */}
            {/* send to db: 收件人電話 */}
            {recipientPhone}
          </span>
          <span className="checkout__order-box-recipient-address">
            {/* 29850桃園市桃園區中正路100巷100號 */}
            {/* send to db: 收件人地址 */}
            {recipientAddress}
          </span>
          <span className="checkout__order-box-buyer">
            {/* send to db: 會員姓名 */}
            訂購人：{memberName}
          </span>
        </div>
      )}
      {/* 店鋪自取 */}
      {checkedValue === deliveryMethod[1] && (
        <>
          <div className="checkout__order-box-delivery-edit-bg p-3 mt-2 mb-2">
            <div className="checkout__order-box-delivery-edit-wrapper">
              <span className="checkout__order-box-recipient">
                {/* 高雄民益店 */}
                {storeName}
                {/* {data.course_place_name} */}
              </span>
              <FiEdit
                className="feather-s"
                role="button"
                onClick={() => {
                  showModalHandler(deliveryMethod[1])
                }}
              />
            </div>
            <span className="checkout__order-box-recipient-phone">
              {/* 07-8012255 */}
              {storeAddress}
              {/* {data.course_place_phone} */}
            </span>
            <span className="checkout__order-box-recipient-address">
              {/* 高雄市小港區民益路13號 */}
              {storePhone}
              {/* {data.course_place_address} */}
            </span>
            <span className="checkout__order-box-buyer">
              訂購人：{memberName}
            </span>
          </div>
        </>
      )}
      {showModal.length > 0 && <Backdrop onClick={closeModalHandler} />}
      {showModal === deliveryMethod[0] && (
        <AddressEditModal
          onClose={closeModalHandler}
          checked={checked}
          setChecked={setChecked}
          memberName={memberName}
          memberPhone={memberPhone}
          memberAddress={memberAddress}
          recipientName={recipientName}
          recipientPhone={recipientPhone}
          recipientAddress={recipientAddress}
          setRecipientName={setRecipientName}
          setRecipientPhone={setRecipientPhone}
          setRecipientAddress={setRecipientAddress}
        />
      )}
      {showModal === deliveryMethod[1] && (
        <StoreMapModal
          closeModalHandler={closeModalHandler}
          // setSelectForm={setPlace}
          onPlaceChange={onPlaceChange}
          // storeName={storeName}
          // storeAddress={storeAddress}
          // storePhone={storePhone}
          placeLatLng={placeLatLng}
          stores={stores}
          setStores={setStores}
        />
      )}
    </>
  )
}

function OrderDetail(props) {
  const { setAddress, officialTotal, customTotal, courseTotal, handleSubmit } =
    props
  const [memberName, setMemberName] = useState([])
  const [memberPhone, setMemberPhone] = useState([])
  const [memberAddress, setMemberAddress] = useState([])
  const [recipientName, setRecipientName] = useState([])
  const [recipientPhone, setRecipientPhone] = useState([])
  const [recipientAddress, setRecipientAddress] = useState([])

  // 會員資料
  async function getMemberInfoFromServer() {
    const token = localStorage.getItem('jwt')
    const url = 'http://localhost:6005/checkout/member'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // console.log('member info', data)

    const memberName = data[0].member_name
    // console.log('db member name', memberName)
    setMemberName(memberName)
    setRecipientName(memberName)

    const memberPhone = data[0].member_phone
    // console.log('db member phone', memberPhone)
    setRecipientPhone(memberPhone)
    setMemberPhone(memberPhone)

    const memberAddress = data[0].member_address
    // console.log('db member address', memberAddress)
    setMemberAddress(memberAddress)
    setRecipientAddress(memberAddress)
    setAddress(memberAddress)
  }

  useEffect(() => {
    getMemberInfoFromServer()
  }, [])

  // 店鋪資料
  const [placeLatLng, setPlaceLatLng] = useState([])
  const [storeName, setStoreName] = useState([])
  const [storeAddress, setStoreAddress] = useState([])
  const [storePhone, setStorePhone] = useState([])
  const [storeLat, setStoreLat] = useState([])
  const [storeLng, setStoreLng] = useState([])

  async function getStoreInfoFromServer() {
    const url = `http://localhost:6005/checkout/store`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    const stores = data.place
    // const storeName = stores.map((item, i) => {
    //   return item.course_place_name
    // })
    // const storeAddress = stores.map((item) => {
    //   return item.course_place_address
    // })
    // const storePhone = stores.map((item) => {
    //   return item.course_place_phone
    // })
    // const storeLat = stores.map((item) => {
    //   return item.course_place_lat
    // })
    // const storeLng = stores.map((item) => {
    //   return item.course_place_lng
    // })
    // console.log('store data', stores)
    // console.log('store name', storeName)
    // console.log('store address', storeAddress)
    // console.log('store phone', storePhone)
    // console.log('store lat', storeLat)
    // console.log('store lng', storeLng)
    setPlaceLatLng(stores)
    setStoreName('高雄民益店')
    setStoreAddress('高雄市小港區民益路13號')
    setStorePhone('07-8012255')
    setStoreLat('22.5662669501168')
    setStoreLng('120.34782427919656')
  }

  useEffect(() => {
    getStoreInfoFromServer()
  }, [])

  const productTotal = officialTotal + customTotal + courseTotal
  const deliveryFee = 0
  const total = productTotal + deliveryFee

  const history = useHistory()
  const paymentMethod = ['信用卡', '貨到付款']
  const [checkedValue, setCheckedValue] = useState(paymentMethod[0])
  // 重新導向
  const handleRedirect = async () => {
    if (checkedValue === paymentMethod[0]) {
      history.push('/checkout/payment')
    } else {
      await myswal.popUpMessage('訂購完成！')
      history.push('/member/order')
    }
  }

  return (
    <>
      <div className="checkout__order-box-top pl-4 pt-3 pb-3">
        <span className="checkout__order-box-title">訂單明細</span>
      </div>
      <div className="checkout__order-box-details">
        <div className="checkout__order-box-delivery pr-4 pl-4 pt-3 pb-4">
          <span className="checkout__order-box-delivery-title">運送方式</span>
          <DeliveryMethod
            memberName={memberName}
            memberPhone={memberPhone}
            memberAddress={memberAddress}
            recipientName={recipientName}
            recipientPhone={recipientPhone}
            recipientAddress={recipientAddress}
            setRecipientName={setRecipientName}
            setRecipientPhone={setRecipientPhone}
            setRecipientAddress={setRecipientAddress}
            placeLatLng={placeLatLng}
            storeName={storeName}
            storeAddress={storeAddress}
            storePhone={storePhone}
            storeLat={storeLat}
            storeLng={storeLng}
            setStoreName={setStoreName}
            setStorePhone={setStorePhone}
            setStoreAddress={setStoreAddress}
            setStoreLng={setStoreLng}
            setStoreLat={setStoreLat}
          />
        </div>
        {/* send to db: 付款方式（尚未完成） */}
        <div className="checkout__order-box-payment pr-4 pl-4 pb-4">
          <span className="checkout__order-box-payment-title">付款方式</span>
          <div className="checkout__order-box-payment-labels">
            <PaymentRadio
              checkedValue={checkedValue}
              setCheckedValue={setCheckedValue}
              paymentMethod={paymentMethod}
            />
          </div>
        </div>
        <div className="checkout__order-box-amount pr-4 pl-4 pb-4">
          <span className="checkout__order-box-amount-title">訂購金額</span>
          <div className="checkout__order-box-subtotal pt-2 pl-4 pr-4 pb-2">
            <span className="checkout__order-box-subtotal-text">商品總計</span>
            <span className="checkout__order-box-subtotal-price">
              {/* NT$ 26,190 */}
              NT$ {productTotal}
            </span>
          </div>
          <div className="checkout__order-box-delivery-fee pl-4 pr-4">
            <span className="checkout__order-box-delivery-fee-text">運費</span>
            <span className="checkout__order-box-delivery-fee-price">
              NT$ {deliveryFee}
            </span>
          </div>
          <hr className="checkout__order-box-divider" />
          <div className="checkout__order-box-total pl-4 pr-4">
            <span className="checkout__order-box-total-text">結帳金額：</span>
            <span className="checkout__order-box-total-price">
              {' '}
              {/* send to db: 訂單總金額 */}
              NT$ {total}
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-center pb-4">
          <button
            className="checkout__checkoutBtn"
            type="submit"
            disabled={total === 0}
            onClick={() => {
              // 訂單提交和導頁
              handleSubmit()
              handleRedirect()
            }}
          >
            確認結帳
          </button>
        </div>
      </div>
    </>
  )
}

export default OrderDetail
