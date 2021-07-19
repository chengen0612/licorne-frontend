import React, { useState } from 'react'
import '../../styles/global.css'
import './style.css'
import { FiX } from 'react-icons/fi'
import MyCartNoContnt from './childComponent/MyCartNoContent'
import MyCartCartContainer from './childComponent/MyCartCartContainer'
import MyCartFavContainer from './childComponent/MyCartFavContainer'

function MyCart() {
  const [sidebarStatus, setSidebarStatus] = useState(true)

  return (
    <>
      <div className="cj-blackscreen"></div>

      <div
        className={
          sidebarStatus ? 'cj-sidebar' : 'cj-sidebar cj-sidebar--close'
        }
      >
        <div className="cj-sidebar__x pr-4">
          <div>
            <FiX
              role="button"
              className="feather-m"
              onClick={() => setSidebarStatus(!sidebarStatus)}
            />
          </div>
        </div>

        <div className="cj-sidebar__switch">
          <div>
            <p role="button">收藏清單</p>
          </div>

          <div>
            <p role="button">購物籃</p>
          </div>
        </div>

        <div className="cj-sidebar__space"></div>
        {/* <MyCartNoContnt /> */}
        {/* <MyCartCartContainer /> */}
        <MyCartFavContainer />
      </div>
    </>
  )
}

export default MyCart
