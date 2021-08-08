import React from 'react'

function ProgressNote(props) {
  const { note, currentNote } = props

  return (
    <>
      <div
        className={
          note === currentNote
            ? 'cust__progress-note active'
            : 'cust__progress-note'
        }
      >
        {note}
      </div>
    </>
  )
}

export default ProgressNote
