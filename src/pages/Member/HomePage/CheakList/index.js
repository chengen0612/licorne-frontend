import React from 'react'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import MyCartOffcialText from '../components/MyCartOffcialText'
import MyCartCustomText from '../components/MyCartCustomText'
import { Link, useHistory } from 'react-router-dom'
import swal from 'sweetalert'

function CheakList({
  officialProducts,
  setOfficialProducts,
  totalAmountOfficial,
  //
  customProducts,
  setCustomProducts,
  totalAmountCustom,
}) {
  function goPayCheck() {
    swal('前往結帳頁...', {
      buttons: false,
      timer: 1200,
    })
    setTimeout(() => {
      goPay()
    }, 1200)
  }

  const history = useHistory()
  function goPay() {
    history.push('/checkout')
  }

  // add comma to price
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <>
      <div className="memberHomePage__cheakListBox">
        <div className="memberHomePage__totalBox">
          <h5 className="memberHomePage__totalAmount">總金額：</h5>
          <h5 className="memberHomePage__totalNumber">
            NT$<p>{numberWithCommas(totalAmountOfficial)}</p>
          </h5>
        </div>
        <hr className="memberHomePage__cheakListLine"></hr>
        <div className="memberHomePage__productList">
          {officialProducts.map((officialProduct, key) => {
            return (
              <div key={officialProduct.id} className="memberHomePage__product">
                <MyCartOffcialText
                  name_zh={officialProduct.name_zh}
                  series_name={officialProduct.series_name}
                  quantity={officialProduct.quantity}
                />
              </div>
            )
          })}
          {customProducts.map((customProduct, key) => {
            return (
              <div key={customProduct.id} className="memberHomePage__product">
                <MyCartCustomText
                  cust_id={customProduct.cust_id}
                  fragrance_name={customProduct.fragrance_name}
                  quantity={customProduct.quantity}
                />
              </div>
            )
          })}
        </div>
        <div className="memberHomePage__goPay">
          <button
            className="memberHomePage__goPayBtn"
            onClick={() => {
              goPayCheck()
            }}
          >
            前往結帳
          </button>
        </div>
      </div>
    </>
  )
}

export default CheakList
