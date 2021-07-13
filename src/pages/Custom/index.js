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

import { imgPath } from '../../config'

import './style.scss'
import series_data from './sidebar_series.json'
import items_data from './sidebar_items.json'

import SidebarSeries from './SidebarSeries'
import SidebarItems from './SidebarItems'
import ProgressBar from './ProgressBar'

function Custom() {
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

  return (
    <>
      <div className="custom">
        <ProgressBar noteStatus={noteStatus} />
        <FiX className="custom__close-btn" />
        <article className="description">
          <p className="description__title">成分說明</p>
          <span className="description__content">{description}</span>
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
        {/* <button className="btn custom__btn-reset">
          <FiRefreshCw className="feather-m custom__icon" />
          重做
        </button>
        <button className="btn custom__btn-goback">
          <FiSkipBack />
          退回
        </button>
        <button className="btn custom__btn-complete">
          <FiCheckSquare />
          完成
        </button> */}
      </div>
    </>
  )
}

export default Custom
