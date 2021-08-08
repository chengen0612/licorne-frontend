import React from 'react'

function Beaker(props) {
  const {
    imageSrcs,
    setImageSrcs,
    setDisplaySerie,
    selectedItems,
    setSelectedItems,
    selectedSeries,
    setSelectedSeries,
  } = props

  // litsen to drop event
  const dropHandler = (e) => {
    try {
      const obj = JSON.parse(e.dataTransfer.getData('data'))
      const src = obj.imageSrc
      const itemId = obj.itemId
      const fragranceId = obj.fragranceId
      setImageSrcs([...imageSrcs, src])
      mainHandler(itemId, fragranceId)
    } catch {}
  }

  const cancelDefault = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const mainHandler = (iId, fId) => {
    setSelectedItems([...selectedItems, iId])
    setSelectedSeries([...selectedSeries, fId])
    // 關閉材料選單
    setDisplaySerie('')
  }

  return (
    <>
      <div
        className="cust__beaker"
        onDrop={dropHandler}
        onDragEnd={cancelDefault}
        onDragOver={cancelDefault}
      >
        {imageSrcs.length > 0 &&
          imageSrcs.map((value, i) => {
            return (
              <img
                key={i}
                className={'cust__beaker__img' + i}
                src={value}
                alt=""
              />
            )
          })}
      </div>
    </>
  )
}

export default Beaker
