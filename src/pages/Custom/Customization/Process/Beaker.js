import React from 'react'

function Beaker(props) {
  const {
    imageSrcs,
    setImageSrcs,
    setDisplaySeries,
    selectedItems,
    setSelectedItems,
    selectedSeries,
    setSelectedSeries,
  } = props

  const dropHandler = (e) => {
    try {
      const obj = JSON.parse(e.dataTransfer.getData('data'))
      const src = obj.imageSrc
      const itemId = obj.itemId
      const fragranceId = obj.fragranceId
      setImageSrcs([...imageSrcs, src])
      setItems(itemId, fragranceId)
    } catch {}
  }

  const cancelDefault = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const setItems = (iId, fId) => {
    setSelectedItems([...selectedItems, iId])
    setSelectedSeries([...selectedSeries, fId])
    // 關閉材料選單
    setDisplaySeries('')
  }

  return (
    <>
      <div
        className="custom__beaker"
        onDrop={dropHandler}
        onDragEnd={cancelDefault}
        onDragOver={cancelDefault}
      >
        {imageSrcs.length > 0 &&
          imageSrcs.map((value, i) => {
            return (
              <img
                key={i}
                className={'custom__beaker__img' + i}
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
