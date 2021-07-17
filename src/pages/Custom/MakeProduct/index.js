import React, { useState, useEffect } from 'react'

import {
  FiX,
  FiRefreshCw,
  FiSkipBack,
  FiCheckSquare,
  FiHeart,
  FiShoppingBag,
  FiUpload,
} from 'react-icons/fi'

import '../style.scss'
import items_data from './data/sidebar_items.json'
import series_data from './data/sidebar_series.json'

import SidebarSeries from './SidebarSeries'
import SidebarItems from './SidebarItems'
import ProgressBar from './ProgressBar'

function MakeProduct(props) {
  const { setProductDetail } = props
  const [displaySeries, setDisplaySeries] = useState('')
  const [description, setDescription] = useState('')
  const [selectedItems, setSelectedItems] = useState([])
  const [selectedSeries, setSelectedSeries] = useState([])
  const [noteStatus, setNoteStatus] = useState([false, false, false])

  // handle description
  useEffect(() => {
    if (!displaySeries) return setDescription('')
    const response = series_data.filter((item) => item.id === displaySeries)
    setDescription(response[0].description_zh)
  }, [displaySeries])

  // handle progress bar
  useEffect(() => {
    let count = selectedItems.length
    if (count >= 2) count = 2
    const newProgressBar = [false, false, false]
    newProgressBar[count] = true
    setNoteStatus(newProgressBar)
  }, [selectedItems])

  // refresh choices
  const resetExecutor = () => {
    setSelectedItems([])
    setSelectedSeries([])
  }

  // back to previous step
  const gobackExecuter = () => {
    const [lastItem, ...otherItems] = selectedItems.reverse()
    setSelectedItems(otherItems)
    const [lastSerie, ...otherSeries] = selectedSeries.reverse()
    setSelectedSeries(otherSeries)
  }

  // set product data
  const completeExecuter = () => {
    if (selectedItems.length !== 3) return

    const topNote = items_data.filter((item) => item.id === selectedItems[0])
    const middleNote = items_data.filter((item) => item.id === selectedItems[1])
    const baseNote = items_data.filter((item) => item.id === selectedItems[2])
    const serie = series_data.filter((item) => item.id === selectedSeries[0])

    const result = {
      noteList: selectedItems,
      topNote: { title: topNote[0].name_zh, price: topNote[0].price },
      middleNote: { title: middleNote[0].name_zh, price: middleNote[0].price },
      baseNote: { title: baseNote[0].name_zh, price: baseNote[0].price },
      serieId: selectedSeries[0],
      serieName: serie[0].name_zh,
      serieDescription: serie[0].description_zh,
      productImage: serie[0].product_img,
    }

    setProductDetail(result)
  }

  return (
    <>
      <div className="custom">
        <ProgressBar noteStatus={noteStatus} />
        <FiX className="custom__close-btn" />
        <article className="description">
          {description && (
            <>
              <p className="description__title">成分說明</p>
              <span className="description__content">{description}</span>
            </>
          )}
        </article>
        <div className="custom__bottle"></div>
        <aside className="custom__sidebar-wrapper">
          {displaySeries && (
            <SidebarItems
              data={items_data}
              displaySeries={displaySeries}
              setDisplaySeries={setDisplaySeries}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              selectedSeries={selectedSeries}
              setSelectedSeries={setSelectedSeries}
            />
          )}
          <SidebarSeries
            data={series_data}
            displaySeries={displaySeries}
            setDisplaySeries={setDisplaySeries}
            selectedItems={selectedItems}
            selectedSeries={selectedSeries}
          />
        </aside>
        <button className="btn custom__btn-reset" onClick={resetExecutor}>
          <FiRefreshCw className="feather-m custom__icon" />
          重做
        </button>
        <button className="btn custom__btn-goback" onClick={gobackExecuter}>
          <FiSkipBack />
          退回
        </button>
        <button className="btn custom__btn-complete" onClick={completeExecuter}>
          <FiCheckSquare />
          完成
        </button>
      </div>
    </>
  )
}

export default MakeProduct
