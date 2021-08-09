import React, { useState, useEffect } from 'react'
import './style.css'
import { FiEdit, FiHeart } from 'react-icons/fi'
import authentication from '../../../utils/authentication'

//最右邊的購物明細
import CheakList from './CheakList'
import MyCartCart from './components/MyCartCart'
import MyCartMake from './components/MyCartMake'

function MemberHomePage(favOrCart, setFavOrCart) {
  const [dataLoading, setDataLoading] = useState(false)
  const [officialProducts, setOfficialProducts] = useState([]) // an array holding the data of official products
  const [totalAmountOfficial, setTotalAmountOfficial] = useState(0) // a number, sum of each (official product qty) x (official product price)
  const [customProducts, setCustomProducts] = useState([])
  const [totalAmountCustom, setTotalAmountCustom] = useState(0)
  const [customCollectDatas, setCustomCollectDatas] = useState([])
  const [courseProducts, setCourseProducts] = useState([])
  const [totalAmountCourse, setTotalAmountCourse] = useState(0)
  const [collectDatas, setCollectDatas] = useState([])

  // 計算總金額的函式
  function calculateTotal() {
    //計算總金額函式
    let officialTotal = 0
    let customTotal = 0
    let sumOfTotals = 0
    for (let officialProduct of officialProducts) {
      officialTotal += officialProduct.quantity * officialProduct.price
    }
    for (let customProduct of customProducts) {
      customTotal += customProduct.quantity * customProduct.price
    }
    sumOfTotals = officialTotal + customTotal
    setTotalAmountOfficial(sumOfTotals)
  }

  // 官方產品 API
  async function getOfficialProductFromServer() {
    setDataLoading(true)

    const executor = async (token) => {
      const urlCart = 'http://localhost:6005/member/official'
      const requestCart = new Request(urlCart, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'appliaction/json',
          Authorization: 'Bearer ' + token,
        }),
      })
      const responseCart = await fetch(requestCart)
      const officialProduct = await responseCart.json()
      console.log('官方產品：', officialProduct)
      setOfficialProducts(officialProduct)
    }
    authentication(executor)
  }

  //客製化產品 API
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
  // 取得組合資料
  async function getCustomCollectFromServer() {
    const executor = async (token) => {
      const urlCollect = 'http://localhost:6005/member/customCollect'

      const requestCollect = new Request(urlCollect, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'appliaction/json',
          Authorization: 'Bearer ' + token,
        }),
      })
      const responseCollect = await fetch(requestCollect)
      const customCollectDatas = await responseCollect.json()
      setCustomCollectDatas(customCollectDatas)
    }
    authentication(executor)
  }

  useEffect(() => {
    calculateTotal()
  }, [officialProducts, customProducts])

  useEffect(() => {
    getOfficialProductFromServer()
    getCustomProductFromServer()
    getCustomCollectFromServer()
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [])

  const loading = (
    <>
      <div className="d-flex justify-content-center memberData_loading">
        <div id="spinner-border" className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  const display = (
    <>
      <div className="memberHomePage__rightCard">
        <div className="memberHomePage__topBox">
          <div className="memberHomePage__cartTitle">
            <h2>購物籃</h2>
            <div className="memberHomePage__cartBox">
              <MyCartCart
                // favOrCart={favOrCart}
                //
                officialProducts={officialProducts}
                setOfficialProducts={setOfficialProducts}
                //
                customProducts={customProducts}
                setCustomProducts={setCustomProducts}
                totalAmountCustom={totalAmountCustom}
                //
                // courseProducts={courseProducts}
                // setCourseProducts={setCourseProducts}
                // totalAmountCourse={totalAmountCourse}
                //
                // setTotalAmountOfficial={setTotalAmountOfficial} maybe not nessaccery? Observe a while!
                // calculateTotal={calculateTotal} maybe not nessaccery? Observe a while!
              />
            </div>
          </div>
          <CheakList
            officialProducts={officialProducts}
            setOfficialProducts={setOfficialProducts}
            totalAmountOfficial={totalAmountOfficial}
            customProducts={customProducts}
            setCustomProducts={setCustomProducts}
            totalAmountCustom={totalAmountCustom}
          />
        </div>

        <div className="memberHomePage__makeTitle">
          <h2>您的組合紀錄</h2>
          <div className="memberHomePage__makeBox">
            <MyCartMake
              customCollectDatas={customCollectDatas}
              setCustomCollectDatas={setCustomCollectDatas}
              setCustomProducts={setCustomProducts}
            />
          </div>
        </div>
      </div>
    </>
  )
  return <>{dataLoading ? loading : display}</>
}

export default MemberHomePage
