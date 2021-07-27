import React from 'react'

function CopyWriting(props) {
  const { mouseEnterHandler, CopyWritingContent, title, linkColor } = props

  return (
    <>
      <div className="Text" onMouseEnter={mouseEnterHandler}>
        <div className="Title">{title}</div>
        <p className="article">{CopyWritingContent}</p>
        <a className={linkColor} href="#/">
          查看更多
        </a>
      </div>
    </>
  )
}
export default CopyWriting
