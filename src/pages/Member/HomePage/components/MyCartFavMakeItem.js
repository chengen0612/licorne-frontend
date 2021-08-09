import React, { useState, useEffect } from 'react'
import '../../../../styles/global.css'
import '../../style.css'
import { FiShoppingBag } from 'react-icons/fi'
import swal from 'sweetalert'
import authentication from '../../../../utils/authentication'

function MyCartMakeItem({
  customCollectDatas,
  setCustomCollectDatas,
  setCustomProducts,
  id,
  cust_id,
  price,
  bottle_img,
  top_zh,
  mid_zh,
  base_zh,
}) {
  // const [values, setValues] = useState({ id })
  async function addToCart() {
    swal('成功加入購物車！', {
      button: false,
      timer: 1200,
    })
    const userData = { id }

    const executor = async (token) => {
      // 連接的伺服器資料網址
      const url = 'http://localhost:6005/member/cart'
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }),
      })

      console.log(JSON.stringify(userData))

      const response = await fetch(request)
      const data = await response.json()

      console.log('伺服器回傳的json資料', data)
      getCustomProductFromServer()
    }
    authentication(executor)
  }

  async function getCustomProductFromServer() {
    const executor = async (token) => {
      const urlCart = 'http://localhost:6005/member/custom'
      const requestCart = new Request(urlCart, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'appliaction/json',
          Authorization: 'Bearer ' + token,
        }),
      })
      const responseCustom = await fetch(requestCart)
      const customProduct = await responseCustom.json()
      setCustomProducts(customProduct)
      console.log('客製產品：', customProduct)
    }
    authentication(executor)
  }

  function askDelete() {
    swal({
      title: '確定要刪除嗎？',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: '刪除成功！',
          icon: 'success',
        })
        const newCollectDatas = customCollectDatas.filter((v, i) => {
          return v.id !== id
        })
        setCustomCollectDatas(newCollectDatas)
      }
    })
  }
  return (
    <>
      <div className="memberProduct__fav__item__img">
        <img src={bottle_img} alt="" />
      </div>
      <div className="memberProduct__fav__item__desc">
        <p>{cust_id}</p>
        <p>
          {top_zh}、{mid_zh}、{base_zh}
        </p>
        <p>NT$ {price}</p>
        <p
          role="button"
          onClick={() => {
            askDelete()
          }}
        >
          刪除
        </p>
      </div>
      <div className="memberProduct__fav__item__btn__box">
        <button
          className="memberProduct__fav__item__btn"
          onClick={() => {
            addToCart()
          }}
        >
          <FiShoppingBag />
        </button>
      </div>
    </>
  )
}

export default MyCartMakeItem
