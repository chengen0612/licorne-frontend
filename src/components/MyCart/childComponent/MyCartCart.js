import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import MyCartOffcialItem from './MyCartOffcialItem'
import MyCartCustomItem from './MyCartCustomItem'
import MyCartCourseItem from './MyCartCourseItem'

function MyCartCart({
  favOrCart,
  //
  officialProducts,
  setOfficialProducts,
  totalAmountOfficial,
  //
  customProducts,
  setCustomProducts,
  totalAmountCustom,
  //
  courseProducts,
  setCourseProducts,
  totalAmountCourse,
}) {
  return (
    <div style={{ display: favOrCart === 'Cart' ? 'block' : 'none' }}>
      <div className="cj-sidebar__cart">
        {officialProducts.length + customProducts.length > 0 ? (
          ''
        ) : (
          <p className="cj-sidebar__cart__no-item-message">
            購物籃中沒有任何商品
          </p>
        )}
        {/*  */}
        {officialProducts.map((officialProduct, key) => {
          return (
            <div key={officialProduct.id} className="cj-sidebar__cart__item">
              <MyCartOffcialItem
                id={officialProduct.id}
                officialProducts={officialProducts}
                setOfficialProducts={setOfficialProducts}
                img_id={officialProduct.img_id}
                name_zh={officialProduct.name_zh}
                name_en={officialProduct.name_en}
                price={officialProduct.price}
                volume={officialProduct.volume}
                quantity={officialProduct.quantity}
                series_name={officialProduct.series_name}
              />
            </div>
          )
        })}
        {/*  */}
        {customProducts.map((customProduct, key) => {
          return (
            <div key={customProduct.id} className="cj-sidebar__cart__item">
              <MyCartCustomItem
                customProducts={customProducts}
                id={customProduct.id}
                cust_id={customProduct.cust_id}
                price={customProduct.price}
                setCustomProducts={setCustomProducts}
                custom_ingredient={customProduct.custom_ingredient}
                fragrance_name={customProduct.fragrance_name}
                quantity={customProduct.quantity}
                bottle_img={customProduct.bottle_img}
              />
            </div>
          )
        })}
        {/*  */}
        {courseProducts.map((courseProduct, key) => {
          return (
            <div
              key={courseProduct.course_id}
              className="cj-sidebar__cart__item"
            >
              <MyCartCourseItem
                courseProducts={courseProducts}
                courseProduct={courseProduct}
              />
            </div>
          )
        })}
      </div>

      <div className="cj-sidebar__cart__price">
        <div>
          <p>總金額：</p>
          <p>NT$ {totalAmountOfficial}</p>
        </div>
      </div>
      <div className="cj-sidebar__cart__checkout">
        <div>
          <p role="button" onClick={() => {}}>
            前往結帳
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyCartCart
