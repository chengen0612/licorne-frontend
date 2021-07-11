import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Bestseller from './pages/Bestseller'
import Course from './pages/Course'
import Custom from './pages/Custom'
import Checkout from './pages/Checkout'
import Member from './pages/Member'
import Official from './pages/Official'
import LoginAndRegister from './pages/LoginAndRegister'

// 共通元件
import Header from './components/Header'

function App() {
  return (
    <Router>
      <>
        <Header />

        <Switch>
          <Route path="/bestseller">
            <Bestseller />
          </Route>
          <Route path="/course">
            <Course />
          </Route>
          <Route path="/custom">
            <Custom />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/member">
            <Member />
          </Route>
          <Route path="/official">
            <Official />
          </Route>
          <Route path="/login">
            <LoginAndRegister />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
