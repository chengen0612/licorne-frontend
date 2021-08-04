import React from 'react'

function Beaker(props) {
  const { imageSrcs, setImageSrcs } = props

  const dropHandler = (e) => {
    const src = e.dataTransfer.getData('image/png')
    setImageSrcs([...imageSrcs, src])
  }

  const cancelDefault = (e) => {
    e.preventDefault()
    e.stopPropagation()
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
              <img className={'custom__beaker__img' + i} src={value} alt="" />
            )
          })}
      </div>
    </>
  )
}

export default Beaker
