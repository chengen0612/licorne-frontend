import React from 'react'
import '../indexProduct.css'
function HomeBestsellerProduct(props) {
  const { Nopicture, picture, code, price } = props
  return (
    <div className="popular__oneProduct">
      <div className="popular__NoBox">
        <div className="popular__No">
          <img className="popular__NoImg" src={Nopicture} alt="" />
        </div>
      </div>
      <div>
        <div className="popular__customProduct ">
          <div>
            <figure className="popular__customImgBox">
              <img className="popular__customImg" src={picture} alt="" />
            </figure>
            <div>
              <h3 className="text-center popular__code">{code}</h3>
              <p className="text-center popular__price">NT ${price}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="popular__buyBtn  mt-3">訂購</button>
      </div>
    </div>
  )
}
export default HomeBestsellerProduct
