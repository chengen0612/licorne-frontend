import React from 'react'
import '../style.scss'
import { imgPath } from '../../../config'
import { FiChevronRight } from 'react-icons/fi'

function OtherProduct() {
  const product = [
    {
      name_zh: '莫西多',
      name_en: 'Mojito',
      fragrance: '調酒香氛系列',
      price: '2,500',
    },
  ]
  return (
    <>
      {product.map((item, index) => {
        return (
          <>
            <div className="official__product-wrapper" key={index}>
              <div className="official__product-img-wrapper">
                <img
                  className="official__product-img"
                  src={imgPath + '/images/official/cocktail_100ml.png'}
                  alt=""
                />
              </div>
              <div className="official__product">
                <span className="official__product-zh">{item.name_zh} </span>
                <span className="official__product-en">{item.name_en}</span>
                <span className="official__product-fragrance">
                  {item.fragrance}
                </span>
                <span className="official__product-price">
                  NT$ {item.price}{' '}
                </span>
                <span className="official__product-view-more">
                  查看詳情 <FiChevronRight />{' '}
                </span>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default OtherProduct
