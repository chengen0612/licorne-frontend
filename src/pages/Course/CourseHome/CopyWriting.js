import React from 'react'
import { Link } from 'react-router-dom'

function CopyWriting(props) {
  const { mouseEnterHandler, CopyWritingContent, title, linkColor, linkPath } =
    props
  console.log(linkPath)
  return (
    <>
      <div className="Text" onMouseEnter={mouseEnterHandler}>
        <div className="Title">{title}</div>
        <p className="article">{CopyWritingContent}</p>
        <Link className={linkColor} to={linkPath}>
          查看更多
        </Link>
      </div>
    </>
  )
}
export default CopyWriting
