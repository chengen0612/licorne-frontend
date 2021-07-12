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

import SidebarSeries from './SidebarSeries'
import SidebarItems from './SidebarItems'

function Custom() {
  const [checkedSeries, setCheckedSeries] = useState('')
  const [selectedItems, setSelectedItems] = useState([])

  const seriesClass = [
    'custom__series-fruit',
    'custom__series-flower',
    'custom__series-leaf',
    'custom__series-herb',
  ]

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
          {/* 材料選擇清單 */}
          {checkedSeries && <SidebarItems checkedSeries={checkedSeries} />}
          <ul className="custom__sidebar-series">
            {/* <li>
              <img
                className="custom__series-fruit"
                src={imgPath + '/images/custom/sidebar_fruit.png'}
                alt=""
              />
            </li>
            <li>
              <img
                className="custom__series-flower"
                src={imgPath + '/images/custom/sidebar_flower.png'}
                alt=""
              />
            </li>
            <li>
              <img
                className="custom__series-leaf"
                src={imgPath + '/images/custom/sidebar_leaf.png'}
                alt=""
              />
            </li>
            <li>
              <img
                className="custom__series-herb"
                src={imgPath + '/images/custom/sidebar_herb.png'}
                alt=""
              />
            </li> */}
            {series_data.map((item, i) => {
              return (
                <SidebarSeries
                  key={item.id}
                  data={item}
                  checkedSeries={checkedSeries}
                  setCheckedSeries={setCheckedSeries}
                  className={seriesClass[i]}
                />
              )
            })}
          </ul>
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
