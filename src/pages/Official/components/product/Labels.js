import React, { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
function Labels(props) {
  const { name, key } = props
  return (
    <>
      <div className="products__labels d-flex align-items-center justify-content-center mr-5">
        <button>
          {name}
          <FiX size={20} className="products__labels__X mb-1" />
        </button>
      </div>
    </>
  )
}

export default Labels
