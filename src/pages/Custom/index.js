import React, { useState } from 'react'

import MakeProduct from './MakeProduct'
import ShowProduct from './ShowProduct'

function Custom() {
  const [productDetail, setProductDetail] = useState({
    baseNote: { title: '青蕨', price: '430' },
    middleNote: { title: '茉莉花', price: '420' },
    noteIdList: ['1', '4', '10'],
    productId: 'LMJMFN',
    productImage: '/images/custom/fragrance_fruit.png',
    serieDescription:
      '果香調香氛包括以各類柑橘屬水果為主導的香水，以及眾多熱帶水果混合而成的香氛。 果香調香氛通常包含很多種熱帶水果。 桃子，梨，蘋果，李子​​，草莓等。 通常果香調香氛也會加入一些花香來做點綴，讓香氛變得更加美味誘人。',
    serieId: '1',
    serieName: '果香調',
    topNote: { title: '萊姆', price: '300' },
  })
  // console.log(Object.keys(productDetail))

  return (
    <>
      {Object.keys(productDetail).length === 0 ? (
        <MakeProduct setProductDetail={setProductDetail} />
      ) : (
        <ShowProduct productDetail={productDetail} />
      )}
    </>
  )
}

export default Custom
