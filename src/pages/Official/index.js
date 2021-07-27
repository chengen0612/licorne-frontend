import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './product-list.css'
import CustomizedSlider from './components/filter/Pricefilter.js'
import Materialfilter from './components/filter/Materialfilter.js'
import Products from './components/product/Products.js'
import Labels from './components/product/Labels.js'
import Pages from './components/product/Pages.js'
import Header from '../../components/Header'
function Official() {
  const [products, setPrdoducts] = useState([]) //給商品顯示(出現有什麼商品)
  const [pages, setPages] = useState([]) //給頁面顯示用(出現有幾頁)
  const [materials, setMaterials] = useState([]) //給原料顯示用(出現有哪幾種原料)
  const [clickPage, setClickPage] = useState(1) //給點第幾頁用
  const [click, setClick] = useState(false) //用於點頁面，用於第二生命周期
  const [clickSeries, setClickSeries] = useState(0) //int//給系列搜尋用(出現指定系列商品頁面)
  const [clickSeriesBlock, setClickSeriesBlock] = useState(false) //給系列搜尋用，用於第二生命週期
  const [searchList, setSearchList] = useState([]) //用於原料搜尋，將點的原料放進陣列
  const [value, setValue] = React.useState([0, 100]) //給價格搜尋，將滑動條價格放進狀態
  const [searchMaterial, setSearchMaterial] = useState([]) //回傳的材料搜尋，將材料搜尋放進狀態
  const [clicksearch, setClicksearch] = useState(false)
  const [clickdelete, setClickDelete] = useState(false)
  const initialFormData = Object.freeze({
    priceValue: value,
    searchMaterial: searchList,
  })
  const [formData, updateFormData] = useState(initialFormData) //給表單
  //要送出的表單有價格區間、所選原料

  //滑動條改變就把新價格放進狀態
  const handleChange = (event, newValue) => {
    setValue(newValue)
    updateFormData({
      ...formData,
      priceValue: newValue,
    })
  }
  //點選原料將之放進searchlist
  const handleChangeBymaterial = (event) => {
    const value = event.target.value

    // 如果有包含這個值，就要移出陣列
    if (searchList.includes(value)) {
      //1. 先拷貝
      //2. 在拷貝陣列上修改
      const newsearchList = searchList.filter((v, i) => {
        return v !== value
      })
      //3. 設定回陣列
      setSearchList(newsearchList)
    }

    // 如果沒包含這個值，就要加入陣列
    if (!searchList.includes(value)) {
      setSearchList([...searchList, value])
    }
  }
  //擋住跳轉，將資料放進formData送出

  function handleDelete(id) {
    setClickDelete(true)
    const newSearchMaterial = [...searchMaterial]
    // console.log('id', id)

    const target = newSearchMaterial.filter((searchmaterial, i) => {
      // console.log('searchmaterial.id', searchmaterial.id)
      return searchmaterial.id !== id
    })
    // console.log(target)
    setSearchMaterial(target)

    let newSearchList = [...searchList]
    newSearchList.splice(id, 1)

    setSearchList(newSearchList)
    console.log(searchList)

    // postSearchToServer()
    // setSearchList()
    // console.log(searchMaterial)
  }

  // const handleDeletematerial = (key) => {
  // const newSearchMaterial = [...searchMaterial]
  // console.log(newSearchMaterial)
  // newSearchMaterial.filter((searchmaterial, i) => {
  //   return searchmaterial.id !== key
  // })
  // // console.log(searchMaterial)
  // setSearchMaterial(newSearchMaterial)
  // // setSearchList()
  // // console.log(searchMaterial)
  // }

  const handleSubmit = (e) => {
    //擋住跳轉
    e.preventDefault()
    postSearchToServer()
    setClickPage(1)
    setClicksearch(true)
    // console.log(formData)
    //送到伺服器
  }

  async function getPrdoductsFromServer() {
    // 連接的伺服器資料網址
    const url = `http://localhost:6005/official?page=${clickPage}`
    // http://localhost:6005/official?page=${clickPage}
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    // 設定資料
    let productdata = data.data
    setPrdoducts(productdata)
    // console.log(productdata)
    let pagenumbers = data.page
    //把拿到的page:int，轉換成對應int長度的陣列
    let pagearray = Array.from({ length: pagenumbers }, (_, i) => i + 1) //建立出[1,2,3,4]
    // console.log(pagearray)
    setPages(pagearray)
    let materialsTarget = data.material
    // console.log(materials)
    setMaterials(materialsTarget)
  }

  async function getSeriesproductFromServer() {
    const seriesId = clickSeries
    const url = `http://localhost:6005/series?page=${clickPage}&series=${seriesId}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    let productdata = data.data
    setPrdoducts(productdata)
    let pagenumbers = data.page //2

    let pagearray = Array.from({ length: pagenumbers }, (_, i) => i + 1)
    setPages(pagearray)
  }

  async function postSearchToServer() {
    //對價格區間跟所選原料做處理
    //price (str) 是一個價格區間 顯示成1000,2000
    //material (str) 是一個陣列，有兩種情況1.沒選原料是空陣列2.有選原料是陣列
    const price = value.join() //轉成字串
    const material = searchList.join() //有選原料轉成字串
    const url = `http://localhost:6005/search?page=${clickPage}&price=${price}&material=${material}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    let productdata = data.data
    setPrdoducts(productdata)
    let pagenumbers = data.page //2

    let pagearray = Array.from({ length: pagenumbers }, (_, i) => i + 1)
    setPages(pagearray)

    //"乳香,柑橘"
    let resMaterial = data.material
    //["乳香,柑橘"]
    resMaterial = resMaterial.split(',')
    //[{id:0,zh_name:"乳香"},{id:1,zh_name:"柑橘"}]
    let target = resMaterial.map((material, i) => {
      return { id: i, zh_name: material }
    })
    // console.log(target)
    // console.log(target)
    setSearchMaterial(target)
  }

  //使用第一生命周期載入資料
  useEffect(() => {
    getPrdoductsFromServer()
    postSearchToServer()
  }, [])
  //使用第二生命周期處理寫入FormData的異步問題
  useEffect(() => {
    updateFormData({
      ...formData,
      searchMaterial: searchList,
    })
  }, [searchList])
  useEffect(() => {
    if (clickdelete) {
      postSearchToServer()
    }
    setClickDelete(false)
  }, [searchList])
  //很怪問老師
  useEffect(() => {
    if (click) {
      getPrdoductsFromServer()
    }
  }, [clickPage, click])
  //很怪問老師
  useEffect(() => {
    if (clickSeriesBlock) {
      getSeriesproductFromServer()
      if (click) {
        getSeriesproductFromServer()
      }
    }
  }, [clickSeries, clickSeriesBlock, clickPage, click])

  useEffect(() => {
    if (clicksearch) {
      postSearchToServer()
      if (click) {
        postSearchToServer()
      }
    }
  }, [clicksearch, clickPage, click])

  return (
    <>
      <div>
        <Header />
        <aside className="product__asideright ">
          {/* 組件Series */}
          <div className="product__asider_total_box">
            <nav className="product__navbox">
              <ul>
                <li className="product__asidetext">
                  <div>
                    <button
                      onClick={() => {
                        setClickPage(1)
                        getPrdoductsFromServer()
                      }}
                    >
                      全系列
                    </button>
                  </div>
                </li>
                <div className="product__boxinborder"></div>
                <li className="product__asidetext">
                  <div>
                    <button
                      //很怪問老師
                      onClick={() => {
                        setClickPage(1)
                        setClickSeries(3)
                        setClickSeriesBlock(true)
                      }}
                    >
                      大自然系列
                    </button>
                  </div>
                </li>
                <div className="product__boxinborder"></div>
                <li className="product__asidetext">
                  <div>
                    <button
                      //很怪問老師
                      onClick={() => {
                        setClickPage(1)
                        setClickSeries(4)
                        setClickSeriesBlock(true)
                      }}
                    >
                      調酒系列
                    </button>
                  </div>
                </li>
                <div className="product__boxinborder"></div>
                <li className="product__asidetext">
                  <div>
                    <button
                      //很怪問老師
                      onClick={() => {
                        setClickPage(1)
                        setClickSeries(1)
                        setClickSeriesBlock(true)
                      }}
                    >
                      茗茶系列
                    </button>
                  </div>
                </li>
                <div className="product__boxinborder"></div>
                <li className="product__asidetext">
                  <div>
                    <button
                      onClick={() => {
                        setClickPage(1)
                        setClickSeries(2)
                        setClickSeriesBlock(true)
                      }}
                    >
                      動物系列
                    </button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          {/* 組件Series */}
          <div className="product__filter_title_box">
            <p className="product__filter_title">透過以下分類篩選</p>
          </div>
          <form>
            <div class="product__price_filter_box">
              <div class="product__price_filter">
                <p class="">預算</p>
                <div class="product__price_box">
                  {/* 組件CustomizedSlider */}
                  <CustomizedSlider
                    value={value}
                    setValue={setValue}
                    handleChange={handleChange}
                  />
                  {/* 組件CustomizedSlider */}
                </div>
              </div>
            </div>
            {/* 組件Materialfilter */}
            <div className="product__material_filter_box">
              <div className="product__material_filter">
                <p>材料</p>
                <div className="product__checkbox_group">
                  {materials &&
                    materials.map((material, i) => {
                      return (
                        <Materialfilter
                          key={material.id}
                          name_zh={material.name_zh}
                          searchList={searchList}
                          setSearchList={setSearchList}
                          handleChangeBymaterial={handleChangeBymaterial}
                        />
                      )
                    })}
                </div>
              </div>
            </div>
            {/* 組件Materialfilter */}
            <div className="product__search_box_box">
              <div className="product__search_box">
                <button type="submit" onClick={handleSubmit}>
                  查詢
                </button>
              </div>
            </div>
          </form>
        </aside>
        <main className="product__main__content">
          <div className="product__total__ptoductitems ">
            {/* <div className="watercolor-box">
            <figure className="watercolor1">
              <img className="leaves" src="/img/watercolor/Leaves.png" alt="" />
            </figure>
            <figure className="watercolor2">
              <img className="leaves" src="/img/watercolor/Leaves.png" alt="" />
            </figure>
          </div> */}
            {/* 組件Labels */}
            <div className="product__labels__box d-flex">
              {searchMaterial &&
                searchMaterial.map((material, i) => {
                  return (
                    <Labels
                      key={material.id}
                      id={material.id}
                      name={material.zh_name}
                      handleDelete={handleDelete}
                    />
                  )
                })}
              {/* <Labels /> */}
            </div>
            {/* 組件Labels */}
            {/* 組件Products */}
            <div className="d-flex products__items__box justify-content-center ">
              {products.map((product, i) => {
                return (
                  <Products
                    key={product.id}
                    img={product.img_id}
                    name_zh={product.name_zh}
                    price={product.price}
                    top={product.top}
                    middle={product.middle}
                    base={product.base}
                  />
                )
              })}
            </div>
            {/* 組件Products */}
            {/* 組件Pages */}
            <div className="d-flex justify-content-center">
              {/* <Pages /> */}
              {pages.map((page, i) => {
                return (
                  <Pages
                    key={i}
                    pagenumber={page}
                    setClickPage={setClickPage}
                    setClick={setClick}
                    click={click}
                  />
                )
              })}
            </div>
            {/* 組件Pages */}
          </div>
        </main>
      </div>
    </>
  )
}

export default Official
