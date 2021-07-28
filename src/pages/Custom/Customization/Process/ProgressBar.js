import React from 'react'

function ProgressBar(props) {
  const { noteStatus } = props
  const note = ['前調', '中調', '後調']

  return (
    <>
      <div className="custom__progress-bar">
        {note.map((string, i) => {
          return (
            <div
              key={i}
              className={
                noteStatus[i]
                  ? 'custom__progress-note active'
                  : 'custom__progress-note'
              }
            >
              {string}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ProgressBar
