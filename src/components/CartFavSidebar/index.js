import React, { useState, useEffect } from 'react'
import '../../styles/global.css'
import './style.css'
import { FiX } from 'react-icons/fi'
import MyCart from './childComponent/MyCart'
import MyFav from './childComponent/MyFav'

function CartFavSidebar({
  sidebarIsOpen,
  closeSidebar,
  favOrCart,
  setFavOrCart,
  officialProducts,
  setOfficialProducts,
  customProducts,
  setCustomProducts,
  courseProducts,
  setCourseProducts,
  officialFavorites,
  setOfficialFavorites,
  customFavorites,
  setCustomFavorites,
  courseFavorites,
  setCourseFavorites,
  calculateTotal,
  totalAmountOfficial,
  totalAmountCustom,
  totalAmountCourse,
}) {
  //

  return (
    <>
      <div
        className={
          sidebarIsOpen
            ? 'cj-blackscreen'
            : 'cj-blackscreen cj-blackscreen--close'
        }
        onClick={() => {
          closeSidebar()
          document.body.style.overflow = 'visible'
        }}
      ></div>
      <div
        className={
          sidebarIsOpen ? 'cj-sidebar' : 'cj-sidebar cj-sidebar--close'
        }
      >
        <div className="cj-sidebar__x pr-4">
          <div>
            <FiX
              role="button"
              className="feather-m"
              onClick={() => {
                closeSidebar()
                document.body.style.overflow = 'visible'
              }}
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
              onClick={() => {
                setFavOrCart('Cart')
                calculateTotal()
              }}
              className={
                favOrCart === 'Cart' ? 'cj-sidebar__switch__text--active' : ''
              }
            >
              購物籃
            </p>
          </div>
        </div>

        <div className="cj-sidebar__space"></div>
        <MyCart
          favOrCart={favOrCart}
          //
          officialProducts={officialProducts}
          setOfficialProducts={setOfficialProducts}
          totalAmountOfficial={totalAmountOfficial}
          officialFavorites={officialFavorites}
          setOfficialFavorites={setOfficialFavorites}
          //
          customProducts={customProducts}
          setCustomProducts={setCustomProducts}
          totalAmountCustom={totalAmountCustom}
          //
          courseProducts={courseProducts}
          setCourseProducts={setCourseProducts}
          totalAmountCourse={totalAmountCourse}
          //
          // setTotalAmountOfficial={setTotalAmountOfficial} maybe not nessaccery? Observe a while!
          // calculateTotal={calculateTotal} maybe not nessaccery? Observe a while!
          closeSidebar={closeSidebar} // 承恩加的
        />
        <MyFav
          favOrCart={favOrCart}
          officialFavorites={officialFavorites}
          setOfficialFavorites={setOfficialFavorites}
          officialProducts={officialProducts}
          setOfficialProducts={setOfficialProducts}
          //
          customFavorites={customFavorites}
          setCustomFavorites={setCustomFavorites}
          //
          courseFavorites={courseFavorites}
          setCourseFavorites={setCourseFavorites}
        />
      </div>
    </>
  )
}

export default CartFavSidebar
