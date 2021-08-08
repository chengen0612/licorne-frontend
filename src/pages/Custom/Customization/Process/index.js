import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { FiX, FiRefreshCw, FiSkipBack, FiCheckSquare } from 'react-icons/fi'
import myswal from '../../../../utils/sweetalert'

import './style.scss'

import SidebarSeries from './SidebarSeries'
import SidebarItems from './SidebarItems'
import ProgressNote from './ProgressNote'
import Beaker from './Beaker'

function Process(props) {
  // pass data of finished product
  const { setProductDetail } = props

  // static resource
  const noteList = ['前調', '中調', '後調']

  // store data from server
  const [itemsData, setItemsData] = useState([])
  const [seriesData, setSeriesData] = useState([])

  // states effect screen
  const [displaySerie, setDisplaySerie] = useState('')
  const [description, setDescription] = useState('')
  const [selectedItems, setSelectedItems] = useState([])
  const [selectedSeries, setSelectedSeries] = useState([])
  const [imageSrcs, setImageSrcs] = useState([])
  const [currentNote, setCurrentNote] = useState(noteList[0])

  // get data
  async function getDataFromServer() {
    const url = 'http://localhost:6005/custom'
    const request = new Request({
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const reponse = await fetch(url, request)
    const data = await reponse.json()
    // console.log(data)

    setItemsData(data.ingredientData)
    setSeriesData(data.fragranceData)
  }

  // set data after first loading
  useEffect(() => {
    getDataFromServer()
  }, [])

  // handle description
  useEffect(() => {
    if (!displaySerie) return setDescription('')
    const response = seriesData.filter((item) => item.id === displaySerie)
    setDescription(response[0].description_zh)
  }, [displaySerie])

  // handle progress bar
  useEffect(() => {
    const count = Math.min(selectedItems.length, 2)
    setCurrentNote(noteList[count])
  }, [selectedItems])

  // alert after finish process
  const missionComplete = () => {
    myswal.popUpMessage('恭喜完成製作！')
  }

  // refresh choices
  const resetExecutor = () => {
    setSelectedItems([])
    setSelectedSeries([])
    setImageSrcs([])
  }

  // back to previous step
  const gobackExecuter = () => {
    const [lastItem, ...otherItems] = selectedItems.reverse()
    setSelectedItems(otherItems.reverse())
    const [lastSerie, ...otherSeries] = selectedSeries.reverse()
    setSelectedSeries(otherSeries.reverse())
    const [lastImage, ...otherImages] = imageSrcs.reverse()
    setImageSrcs(otherImages.reverse())
  }

  // pass product data
  const completeExecuter = () => {
    if (selectedItems.length !== 3) return

    /* eslint-disable*/
    const topNote = itemsData.filter((item) => item.id === selectedItems[0])[0]
    const middleNote = itemsData.filter((item) => item.id === selectedItems[1])[0]
    const baseNote = itemsData.filter((item) => item.id === selectedItems[2])[0]
    const serie = seriesData.filter((item) => item.id === selectedSeries[0])[0]
    /* eslint-enable*/

    const productCode =
      topNote.ingredient_id + middleNote.ingredient_id + baseNote.ingredient_id

    const result = {
      noteIdList: selectedItems,
      topNote: {
        title: topNote.name_zh,
        ingredientId: topNote.ingredient_id,
        price: topNote.price,
      },
      middleNote: {
        title: middleNote.name_zh,
        ingredientId: middleNote.ingredient_id,
        price: middleNote.price,
      },
      baseNote: {
        title: baseNote.name_zh,
        ingredientId: baseNote.ingredient_id,
        price: baseNote.price,
      },
      serieId: selectedSeries[0],
      serieName: serie.name_zh,
      serieDescription: serie.description_zh,
      productCode: productCode,
      productImage: serie.bottle_img,
      color: serie.color,
    }

    setProductDetail(result)
  }

  return (
    <>
      <div className="cust">
        {/* background blob */}
        <div className="cust__pink-blob"></div>
        <div className="cust__orange-blob"></div>
        <div className="cust__yellow-blob"></div>
        {/* background blob end */}
        {/* progress bar */}
        <div className="cust__progress-bar">
          {noteList.map((value) => (
            <ProgressNote note={value} currentNote={currentNote} />
          ))}
        </div>
        {/* progress bar end */}
        <Link to="/" draggable="false">
          <FiX className="cust__close-btn" />
        </Link>
        <article className="cust__description">
          {description && (
            <>
              <p className="cust__description__title">成分說明</p>
              <span className="cust__description__content">{description}</span>
            </>
          )}
        </article>
        {selectedItems.length < 3 ? (
          <span className="cust__notice">{'請選擇' + currentNote}</span>
        ) : (
          missionComplete()
        )}
        <Beaker
          setDisplaySerie={setDisplaySerie}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          selectedSeries={selectedSeries}
          setSelectedSeries={setSelectedSeries}
          imageSrcs={imageSrcs}
          setImageSrcs={setImageSrcs}
        />
        <aside className="cust__sidebar-wrapper">
          {displaySerie && (
            <SidebarItems data={itemsData} displaySerie={displaySerie} />
          )}
          <SidebarSeries
            data={seriesData}
            displaySerie={displaySerie}
            setDisplaySerie={setDisplaySerie}
            selectedItems={selectedItems}
            selectedSeries={selectedSeries}
          />
        </aside>
        <button className="cust__btn-reset" onClick={resetExecutor}>
          <FiRefreshCw /> 重做
        </button>
        <button className="cust__btn-goback" onClick={gobackExecuter}>
          {/* TODO pop up message after click*/}
          <FiSkipBack /> 退回
        </button>
        <button
          className={
            selectedItems.length === 3
              ? 'cust__btn-complete active'
              : 'cust__btn-complete'
          }
          onClick={completeExecuter}
        >
          <FiCheckSquare /> 完成
        </button>
      </div>
    </>
  )
}

export default Process
