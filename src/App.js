import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// 共通元件
import Header from './components/Header'
import SecondaryFooter from './components/SecondaryFooter'

// 獨立分頁
import Home from './pages/Home'
import Bestseller from './pages/Bestseller'
import Custom from './pages/Custom'
import Introduction from './pages/Custom/Introduction'
import Checkout from './pages/Checkout'
import LoginAndRegister from './pages/LoginAndRegister'
import MyCart from './components/MyCart'
import Payment from './pages/Payment'

// 分頁集合
// import SwitchMember from './routes/SwitchMember'
// import SwitchOfficial from './routes/SwitchOfficial'
// import SwitchCourse from './routes/SwitchCourse'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/bestseller">
            <Header />
            <Bestseller />
            <SecondaryFooter />
          </Route>
          <Route path="/custom/introduction">
            <Introduction />
          </Route>
          <Route path="/custom">
            <Custom />
          </Route>
          <Route path="/checkout/payment">
            <Payment />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <SecondaryFooter />
          </Route>

          {/* switch member */}
          {/* <Route path="/member">
            <SwitchMember />
          </Route> */}

          {/* switch official */}
          {/* <Route path="/official">
            <SwitchOfficial />
          </Route> */}

          {/* switch course */}
          {/* <Route path="/course">
            <SwitchCourse />
          </Route> */}

          <Route path="/login">
            <Header />
            <LoginAndRegister />
            <SecondaryFooter />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
