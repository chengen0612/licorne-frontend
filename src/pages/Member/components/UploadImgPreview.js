import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './UploadImgPreview.scss'

import { BsUpload } from 'react-icons/bs'
import { TiDelete } from 'react-icons/ti'

function UploadImgPreview(props) {
  // 上傳時使用的form欄位名稱
  const { name } = props

  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState('')

  const fileInputRef = useRef(null)

  // 當檔案有變化時，更新preview網址
  useEffect(() => {
    if (!selectedFile) {
      setPreview('')
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // component unmounted時，清除記憶體
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    setSelectedFile(e.target.files[0])
  }

  const resetFile = (event) => {
    event.preventDefault()
    // 清除所選的檔案，fileInputRef
    fileInputRef.current.value = null
    setSelectedFile(null)
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <label className="custom-file-upload">
          <input
            id="upload_img"
            type="file"
            className="input-file"
            name={name}
            onChange={onSelectFile}
            ref={fileInputRef}
          />
          <BsUpload /> 選擇檔案
        </label>
      </div>
      {preview && (
        <div style={{ textAlign: 'center' }}>
          <div className="img_wrp">
            <img className="preview-img" src={preview} alt="" />
            <TiDelete
              size="48px"
              color="red"
              onClick={resetFile}
              title="重置"
              className="close"
            />
          </div>
        </div>
      )}
    </>
  )
}

UploadImgPreview.propTypes = {
  name: PropTypes.string.isRequired,
}

export default UploadImgPreview
