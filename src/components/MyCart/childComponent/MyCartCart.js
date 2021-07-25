import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import MyCartCartItem from './MyCartCartItem'

function MyCartCart({ favOrCart, productDatas, setProductDatas, totalAmount }) {
  return (
    <div style={{ display: favOrCart === 'Cart' ? 'block' : 'none' }}>
      <div className="cj-sidebar__cart">
        {/*  */}
        {productDatas.map((productData, key) => {
          return (
            <div key={productData.id} className="cj-sidebar__cart__item">
              <MyCartCartItem
                id={productData.id}
                productDatas={productDatas}
                setProductDatas={setProductDatas}
                img_id={productData.img_id}
                name_zh={productData.name_zh}
                name_en={productData.name_en}
                price={productData.price}
                volume={productData.volume}
                quantity={productData.productQuantity}
              />
            </div>
          )
        })}
      </div>

      <div className="cj-sidebar__cart__price">
        <div>
          <p>總金額：</p>
          <p>NT$ {totalAmount}</p>
        </div>
      </div>
      <div className="cj-sidebar__cart__checkout">
        <div>
          <p role="button">前往結帳</p>
        </div>
      </div>
    </div>
  )
}

export default MyCartCart
