import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

function Checkbox({ id, handleClick, isChecked }) {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        onChange={handleClick}
        checked={isChecked}
      />
    </>
  )
}

function OfficialOrder({ setOfficialTotal }) {
  const [officialItems, setOfficialItems] = useState([])
  const [quantities, setQuantities] = useState([])
  const [symbolsArr] = useState(['e', 'E', '+', '-', '.'])

  async function getOfficialInfoFromServer() {
    const url = 'http://localhost:6005/checkout/official'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('official info', data)
    setOfficialItems(data)

    const quantities = data.map((item) => {
      return item.quantity
    })

    console.log('official quantities', quantities)
    setQuantities(quantities)
  }

  useEffect(() => {
    getOfficialInfoFromServer()
  }, [])

  const subtotals = officialItems.map((item, i) => {
    return +item.price * quantities[i]
  })

  const officialTotal = subtotals.reduce(function (a, b) {
    return a + b
  }, 0)
  setOfficialTotal(officialTotal)

  const handleDelete = (id) => {
    const newOfficialItems = officialItems.filter((v, i) => {
      return v.id !== id
    })
    console.log('current officialItems', newOfficialItems)
    setOfficialItems(newOfficialItems)
  }

  // const [isAllChecked, setIsAllChecked] = useState(false)
  // const [isChecked, setIsChecked] = useState([])

  // const handleSelectAll = (e) => {
  //   setIsAllChecked(!isAllChecked)
  //   setIsChecked(officialItems.map((officialItem) => officialItem.id))
  //   if (isAllChecked) {
  //     setIsChecked([])
  //   }
  // }

  // FIXME: single checkbox cannot be checked
  // const handleClick = (e) => {
  //   const { id, checked } = e.target
  //   setIsChecked([...isChecked, id])
  //   if (!checked) {
  //     setIsChecked(isChecked.filter((item) => item !== id))
  //   }
  // }
  // console.log('isChecked', isChecked)

  return (
    <>
      <div className="checkout__official-box-top pl-4 pt-3 pb-2">
        <label className="checkout__official-box-title">
          {/* <input
            className="checkout__official-box-checkbox-all"
            type="checkbox"
          /> */}
          {/* <Checkbox
            className="checkout__official-box-checkbox-all"
            id="selectAll"
            handleClick={handleSelectAll}
            isChecked={isAllChecked}
          /> */}
          官方商品 <span>({officialItems.length})</span>
        </label>
      </div>
      {officialItems.length === 0 && (
        <p className="checkout__box-none d-flex justify-content-center pt-4 pb-4">
          購物籃中沒有任何商品
        </p>
      )}
      {officialItems.map((officialItem, i) => {
        return (
          <React.Fragment key={officialItem.id}>
            <div className="checkout__official-box-list p-4">
              {/* <input
                className="checkout__official-box-checkbox"
                type="checkbox"
              /> */}
              {/* <Checkbox
                className="checkout__official-box-checkbox"
                key={officialItem.id}
                id={officialItem.id}
                handleClick={handleClick}
                isChecked={isChecked.includes(officialItem.id)}
              /> */}
              <Link to="/" className="checkout__official-box-img-wrapper">
                <img
                  className="checkout__official-box-img"
                  // src={
                  //   imgPath + '/images/official/animal_100ml.png'
                  // }
                  src={officialItem.img_id}
                  alt=""
                />
              </Link>
              <Link to="/" className="checkout__official-box-details w-25 pl-4">
                <span className="checkout__official-box-name-zh">
                  {/* 夜鶯 */}
                  {officialItem.name_zh}
                </span>
                <span className="checkout__official-box-product-name-en">
                  {/* Nightingale */}
                  {officialItem.name_en}
                </span>
                <span className="checkout__official-box-product-series">
                  {/* 動物香氛系列 */}
                  {officialItem.series_name}
                </span>
                <span className="checkout__official-box-product-volume">
                  {/* 100ML */}
                  {officialItem.volume}
                </span>
              </Link>
              <span className="checkout__official-box-product-price">
                {/* NT $2000 */}
                NT$ {officialItem.price}
              </span>
              <input
                className="checkout__box-quantity"
                type="number"
                min="1"
                name="quantity"
                value={quantities[i]}
                onInput={(e) => {
                  const newQuantities = quantities.map((quantity, index) => {
                    if (i === index) {
                      return +e.target.value
                    }
                    return quantity
                  })
                  // quantities[i] = +e.target.value
                  setQuantities(newQuantities)
                  console.log('current official quantities', quantities)
                }}
                onKeyDown={(e) =>
                  symbolsArr.includes(e.key) && e.preventDefault()
                }
              />
              <span className="checkout__official-box-product-subtotal">
                {/* NT $6000 */}
                NT$
                {subtotals[i]}
              </span>
              <FiX
                className="feather-s"
                role="button"
                onClick={() => {
                  handleDelete(officialItem.id)
                }}
              />
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default OfficialOrder
