function checkIsFav() {
  for (let theOtherSideData of theOtherSideDatas) {
    if (theOtherSideData.id === thisSideData.id) {
      return true
    }
  }
  return false
}

// officialFavorites --> theOtherSideDatas

function switchIsFav() {
  if (checkIsFav() === true) {
    const newTheOtherSideDatas = theOtherSideDatas.filter((v, i) => {
      return v.id !== id
    })
    setTheOtherSideDatas(newTheOtherSideDatas)
  } else {
    let theOtherSideDatasCopy = [...theOtherSideDatas]
    theOtherSideDatasCopy.push(thisSideData)
    setTheOtherSideDatas(theOtherSideDatasCopy)
  }
}




function checkIsInCart() {
  for (let theOtherSideData of theOtherSideDatas) {
    if (theOtherSideData.id === thisSideData.ID) {
      return true
    }
  }
  return false
}

function switchIsInCart() {
  if (checkIsInCart() === true) {
    const newTheOtherSideDatas = theOtherSideDatas.filter((v, i) => {
      return v.id !== id
    })
    setTheOtherSideDatas(newTheOtherSideDatas)
  } else {
    let theOtherSideDatasCopy = [...theOtherSideDatas]
    theOtherSideDatasCopy.push(thisSideData)
    setTheOtherSideDatas(theOtherSideDatasCopy)
  }
}



<div
className={
  checkIsInCart()
    ? 'cj-sidebar__fav__item__official-btn__circle--active'
    : 'cj-sidebar__fav__item__official-btn__circle'
}
onClick={() => {
  switchIsInCart()
}}
>
<FiShoppingBag className="cj-sidebar__fav__item__official-btn__FiShoppingBag" />
</div>