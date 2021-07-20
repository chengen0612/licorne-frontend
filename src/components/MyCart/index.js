import React, { useState } from 'react'
import '../../styles/global.css'
import './style.css'
import { FiX } from 'react-icons/fi'
import MyCartNoContnt from './childComponent/MyCartNoContent'
import MyCartCartContainer from './childComponent/MyCartCartContainer'
import MyCartFavContainer from './childComponent/MyCartFavContainer'

function MyCart(prop) {
  // const [sidebarStatus, setSidebarStatus] = useState(XXX)

  const [favOrCart, setFavOrCart] = useState('Fav')
  const closeSidebar = prop.closeSidebar

  return (
    <>
      <div
        className={
          prop.sidebarIsOpen
            ? 'cj-blackscreen'
            : 'cj-blackscreen cj-blackscreen--close'
        }
      ></div>

      <div
        className={
          prop.sidebarIsOpen ? 'cj-sidebar' : 'cj-sidebar cj-sidebar--close'
        }
      >
        <div className="cj-sidebar__x pr-4">
          <div>
            <FiX
              role="button"
              className="feather-m"
              onClick={() => closeSidebar()}
            />
          </div>
        </div>

        <div className="cj-sidebar__switch">
          <div>
            <p
              role="button"
              onClick={() => setFavOrCart('Fav')}
              className={
                favOrCart === 'Fav' ? 'cj-sidebar__switch__text--active' : ''
              }
            >
              收藏清單
            </p>
          </div>

          <div>
            <p
              role="button"
              onClick={() => setFavOrCart('Cart')}
              className={
                favOrCart === 'Cart' ? 'cj-sidebar__switch__text--active' : ''
              }
            >
              購物籃
            </p>
          </div>
        </div>

        <div className="cj-sidebar__space"></div>
        {/* <MyCartNoContnt /> */}

        <MyCartCartContainer favOrCart={favOrCart} />
        <MyCartFavContainer favOrCart={favOrCart} />
      </div>
    </>
  )
}

export default MyCart
