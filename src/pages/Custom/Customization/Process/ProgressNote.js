import React from 'react'

function ProgressNote(props) {
  const { note, currentNote } = props

  return (
    <>
      <div
        className={
          note === currentNote
            ? 'custom__progress-note active'
            : 'custom__progress-note'
        }
      >
        {note}
      </div>
    </>
  )
}

export default ProgressNote
