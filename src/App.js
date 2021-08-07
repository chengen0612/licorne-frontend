import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Direction from './Direction'
import Water from './animations/Water'

function App() {
  const [isAmount, setIsAmount] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsAmount(true)
    }, 3000)
  }, [])
  return (
    <>
      {!isAmount && <Water />}
      {isAmount && (
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
