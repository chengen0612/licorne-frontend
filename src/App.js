import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// 共通元件
import Header from './components/Header'
import SecondaryFooter from './components/SecondaryFooter'

// 獨立分頁
import Home from './pages/Home'
import Bestseller from './pages/Bestseller'
import Checkout from './pages/Checkout'
import LoginAndRegister from './pages/LoginAndRegister'
import Payment from './pages/Payment'
import Member from './pages/Member'
import Official from './pages/Official'
import OfficialProd from './pages/OfficialProd'
import Quiz from './pages/Quiz'

// 分頁子路由器
// import SwitchMember from './routes/SwitchMember'
// import SwitchOfficial from './routes/SwitchOfficial'
import SwitchCourse from './routes/SwitchCourse'
import SwitchCustom from './routes/SwitchCustom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* middleware */}
          <Route path="/course">
            <SwitchCourse />
          </Route>
          <Route path="/custom">
            <SwitchCustom />
          </Route>

          {/* direct path */}
          <Route path="/official/:id">
            <Header />
            <OfficialProd />
            <SecondaryFooter />
          </Route>
          <Route path="/official">
            <Official />
          </Route>
          <Route path="/bestseller">
            <Header />
            <Bestseller />
            <SecondaryFooter />
          </Route>
          <Route path="/quiz">
            <Header />
            <Quiz />
          </Route>
          <Route path="/checkout/payment">
            <Payment />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <SecondaryFooter />
          </Route>
          <Route path="/member">
            <Header />
            <Member />
          </Route>
          <Route path="/login">
            <Header />
            <LoginAndRegister />
            <SecondaryFooter />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          {/* abandoned */}
          {/* switch member */}
          {/* <Route path="/member">
            <SwitchMember />
          </Route> */}
          {/* switch official */}
          {/* <Route path="/official">
            <SwitchOfficial />
          </Route> */}
        </Switch>
      </Router>
    </>
  )
}

export default App
