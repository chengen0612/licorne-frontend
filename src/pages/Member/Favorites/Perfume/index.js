import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import styled from 'styled-components'
import MyCartFav from '../components/MyCartFav'

function FavoritePerfume(props) {
  const [officialCollectDatas, setOfficialCollectDatas] = useState([])
  const [customCollectDatas, setCustomCollectDatas] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const { rightCard, setRightCard } = props

  async function getOfficialCollectFromServer() {
    setDataLoading(true)
    const urlCollect = 'http://localhost:6005/member/officialCollect'
    const jwtToken = localStorage.getItem('userId')
    const requestCollect = new Request(urlCollect, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
        Authorization: jwtToken,
      }),
    })
    const responseCollect = await fetch(requestCollect)
    const officialCollectDatas = await responseCollect.json()
    setOfficialCollectDatas(officialCollectDatas)
  }
  async function getCustomCollectFromServer() {
    const urlCollect = 'http://localhost:6005/member/customCollect'
    const jwtToken = localStorage.getItem('userId')
    const requestCollect = new Request(urlCollect, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
        Authorization: jwtToken,
      }),
    })
    const responseCollect = await fetch(requestCollect)
    const customCollectDatas = await responseCollect.json()
    setCustomCollectDatas(customCollectDatas)
    console.log('客製資訊：', customCollectDatas)
  }
  useEffect(() => {
    getOfficialCollectFromServer()
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
      <div className="memberFavorites__rightCard">
        <div className="memberFavorites__favoritesBtn">
          <button
            onClick={() => {
              setRightCard('香水')
            }}
            id={rightCard === '香水' ? 'favorActive' : ''}
            className="memberFavorites__perfumebtn favoritesBtn"
          >
            香水
          </button>
          <button
            onClick={() => {
              setRightCard('課程')
            }}
            className="memberFavorites__coursebtn favoritesBtn"
          >
            課程
          </button>
        </div>
        <div className="memberFavorites__perfumeBox">
          <div className="memberFavorites__perfumeLeftBox">
            <MyCartFav
              officialCollectDatas={officialCollectDatas}
              setOfficialCollectDatas={setOfficialCollectDatas}
              customCollectDatas={customCollectDatas}
              setCustomCollectDatas={setCustomCollectDatas}
            />
          </div>
        </div>
      </div>
    </>
  )
  return <>{dataLoading ? loading : display}</>
}

export default FavoritePerfume
