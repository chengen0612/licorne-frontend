import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Direction from './Direction'

function App() {
  return (
    <>
      <Router>
        <Route path="*">
          <Direction />
        </Route>
      </Router>
    </>
  )
}

export default App
