import React, { useState } from 'react'

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

function Custom() {
  const [checkedSeries, setCheckedSeries] = useState('')
  const [selectedItems, setSelectedItems] = useState([])

  return (
    <>
      <div className="custom">
        <div className="custom__progress-bar">
          <div className="custom__progress-note">前調</div>
          <div className="custom__progress-note">中調</div>
          <div className="custom__progress-note">後調</div>
        </div>
        <FiX className="custom__close-btn" />
        <p className="custom__description"></p>
        <div className="custom__bottle"></div>
        <aside className="custom__sidebar-wrapper">
          {checkedSeries && (
            <SidebarItems data={items_data} checkedSeries={checkedSeries} />
          )}
          <SidebarSeries
            data={series_data}
            checkedSeries={checkedSeries}
            setCheckedSeries={setCheckedSeries}
          />
        </aside>
        <button className="btn custom__btn-reset">
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
        </button>
      </div>
    </>
  )
}

export default Custom
