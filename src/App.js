import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Direction from './Direction'
import Water from './animations/Water'

function App() {
  const [didMount, setDidMount] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDidMount(true)
    }, 3000)
  }, [])

  return (
    <>
      {!didMount && <Water />}
      {didMount && (
        <Router>
          <Route path="*">
            <Direction />
          </Route>
        </Router>
      )}
    </>
  )
}

export default App
