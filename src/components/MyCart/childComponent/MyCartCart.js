import React from 'react'
import '../../../styles/global.css'
import '../style.css'
import MyCartOffcialItem from './MyCartOffcialItem'

function MyCartCart({
  favOrCart,
  officialProducts,
  setOfficialProducts,
  totalAmountOfficial,
}) {
  return (
    <div style={{ display: favOrCart === 'Cart' ? 'block' : 'none' }}>
      <div className="cj-sidebar__cart">
        {officialProducts.length > 0 ? '' : <h1>NO DATA</h1>}
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
