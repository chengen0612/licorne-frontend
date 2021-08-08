import React from 'react'
import { imgPath } from '../../../../config'

function SidebarItems(props) {
  const { data, displaySerie } = props

  const seriesItems = data.filter((item) => {
    return item.fragrance_id === displaySerie
  })

  // start drag event and set data
  const handleDragStart = (e, iId, fId) => {
    e.stopPropagation()
    const imageSrc = e.target.currentSrc
    const data = { itemId: iId, fragranceId: fId, imageSrc: imageSrc }
    e.dataTransfer.setData('data', JSON.stringify(data))
  }

  const handleDrag = (e) => {
    e.preventDefault()
    // e.stopPropagation()
  }

  return (
    <>
      <ul className="cust__items-menu">
        {seriesItems.map((item, i) => {
          return (
            <li key={item.id}>
              <img
                className="cust__items-image"
                src={imgPath + item.ingredient_img}
                alt={item.name_zh}
                draggable="true"
                onDragStart={(e) =>
                  handleDragStart(e, item.id, item.fragrance_id)
                }
                onDrag={handleDrag}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default SidebarItems
