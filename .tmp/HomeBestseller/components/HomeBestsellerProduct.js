import React from 'react'

function HomeBestsellerProduct(props) {
  const { Nopicture, picture, code, price } = props
  return (
    <div className="popular__oneProduct">
      <div className="popular__NoBox">
        {/* TODO: 標題文字離產品卡太近，看能不能把拉開間距或把數字調小 完成 */}
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
        {/* TODO: hover效果未完成，請參考 Figma 晚點做還沒完成 */}
        <button className="popular__buyBtn  mt-3">訂購</button>
      </div>
    </div>
  )
}
export default HomeBestsellerProduct
