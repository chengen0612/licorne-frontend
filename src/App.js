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
import MyCart from './components/MyCart'

// 共通元件
import Header from './components/Header'
import SecondaryFooter from './components/SecondaryFooter'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/bestseller">
            <Header />
            <Bestseller />
            <SecondaryFooter />
          </Route>
          <Route path="/course">
            <Header />
            <Course />
            <SecondaryFooter />
          </Route>
          <Route path="/custom">
            <Custom />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <SecondaryFooter />
          </Route>
          <Route path="/member">
            <Header />
            <Member />
            <SecondaryFooter />
          </Route>
          <Route path="/official">
            <Header />
            <Official />
            <SecondaryFooter />
          </Route>
          <Route path="/login">
            <Header />
            <LoginAndRegister />
            <SecondaryFooter />
          </Route>
          <Route exact path="/">
            <Header />
            {/*  */}
            {/*  */}
            <MyCart />
            {/*  */}
            {/*  */}
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
