import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { FiX, FiRefreshCw, FiSkipBack, FiCheckSquare } from 'react-icons/fi'

import './style.scss'
// import items_data from './data/sidebar_items.json'
// import series_data from './data/sidebar_series.json'

import SidebarSeries from './SidebarSeries'
import SidebarItems from './SidebarItems'
import ProgressBar from './ProgressBar'
import Beaker from './Beaker'

function Process(props) {
  // pass data of finished product
  const { setProductDetail } = props

  // store data from server
  const [itemsData, setItemsData] = useState([])
  const [seriesData, setSeriesData] = useState([])

  // states effect screen
  const [displaySeries, setDisplaySeries] = useState('')
  const [description, setDescription] = useState('')
  const [imageSrcs, setImageSrcs] = useState([])
  const [selectedItems, setSelectedItems] = useState([])
  const [selectedSeries, setSelectedSeries] = useState([])
  const [noteStatus, setNoteStatus] = useState([false, false, false])

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
    console.log(data)

    setItemsData(data.ingredientData)
    setSeriesData(data.fragranceData)
  }

  // set data after first loading
  useEffect(() => {
    getDataFromServer()
  }, [])

  // handle description
  useEffect(() => {
    if (!displaySeries) return setDescription('')
    const response = seriesData.filter((item) => item.id === displaySeries)
    setDescription(response[0].description_zh)
  }, [displaySeries])

  // handle progress bar
  useEffect(() => {
    const count = Math.min(selectedItems.length, 2)
    const newProgressBar = [false, false, false]
    newProgressBar[count] = true
    setNoteStatus(newProgressBar)
  }, [selectedItems])

  // refresh choices
  const resetExecutor = () => {
    setSelectedItems([])
    setSelectedSeries([])
    setImageSrcs([])
  }

  // back to previous step
  const gobackExecuter = () => {
    const [lastItem, ...otherItems] = selectedItems.reverse()
    setSelectedItems(otherItems)
    const [lastSerie, ...otherSeries] = selectedSeries.reverse()
    setSelectedSeries(otherSeries)
    const [lastImage, ...otherImages] = imageSrcs.reverse()
    setImageSrcs(otherImages)
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
      <div className="custom">
        {/* background blob */}
        <div className="pink-blob"></div>
        <div className="orange-blob"></div>
        <div className="yellow-blob"></div>
        {/* background blob end */}
        <ProgressBar noteStatus={noteStatus} />
        <Link to="/" draggable="false">
          <FiX className="close-btn" />
        </Link>
        <article className="description">
          {description && (
            <>
              <p className="description__title">成分說明</p>
              <span className="description__content">{description}</span>
            </>
          )}
        </article>
        <Beaker
          imageSrcs={imageSrcs}
          setDisplaySeries={setDisplaySeries}
          setImageSrcs={setImageSrcs}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          selectedSeries={selectedSeries}
          setSelectedSeries={setSelectedSeries}
        />
        <aside className="custom__sidebar-wrapper">
          {displaySeries && (
            <SidebarItems
              data={itemsData}
              displaySeries={displaySeries}
              // setDisplaySeries={setDisplaySeries}
              // selectedItems={selectedItems}
              // setSelectedItems={setSelectedItems}
              // selectedSeries={selectedSeries}
              // setSelectedSeries={setSelectedSeries}
            />
          )}
          <SidebarSeries
            data={seriesData}
            displaySeries={displaySeries}
            setDisplaySeries={setDisplaySeries}
            selectedItems={selectedItems}
            selectedSeries={selectedSeries}
          />
        </aside>
        <button className="custom__btn-reset" onClick={resetExecutor}>
          <FiRefreshCw /> 重做
        </button>
        <button className="custom__btn-goback" onClick={gobackExecuter}>
          {/* TODO pop up message after click*/}
          <FiSkipBack /> 退回
        </button>
        <button
          className={
            selectedItems.length === 3
              ? 'custom__btn-complete active'
              : 'custom__btn-complete'
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
