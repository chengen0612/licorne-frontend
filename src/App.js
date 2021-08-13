import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Paths from './Paths'
import Water from './utils/spring/Water'

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
            <Paths />
          </Route>
        </Router>
      )}
    </>
  )
}

export default App
