import React, { useState, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

// 共通元件
import Header from './components/Header'
import SecondaryFooter from './components/SecondaryFooter'
import Spinner from './components/Spinner'

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

function Location() {
  // states
  const location = useLocation()
  const [useHeader, setUseHeader] = useState(false)
  const [isAmount, setIsAmount] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // array to store pages not using header
  /* eslint-disable */
  const noSpinnerList = ['/custom/entrance', '/custom/introduction', '/custom/process', '/member', '/member/profile', '/member/order', '/member/favorites', '/official',]
  /* eslint-enable */

  useEffect(() => {
    setIsAmount(true)
  }, [])

  useEffect(() => {
    handleHeader()
    handleSpinner()
  }, [location])

  const handleHeader = () => {
    const params = location.pathname.split('/')[1]
    // params !== 'custom' ? setUseHeader(true) : setUseHeader(false)
    switch (params) {
      case 'custom':
      case 'official':
        setUseHeader(false)
        break
      default:
        setUseHeader(true)
        break
    }
  }

  const handleSpinner = () => {
    if (!isAmount) return
    const pathname = location.pathname
    const index = noSpinnerList.findIndex((value) => value === pathname)
    if (index > -1) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  const switchRoutes = () => {
    return (
      <>
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
            <OfficialProd />
            <SecondaryFooter />
          </Route>
          <Route path="/official">
            <Official />
          </Route>
          <Route path="/bestseller">
            <Bestseller />
            <SecondaryFooter />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/checkout/payment">
            <Payment />
          </Route>
          <Route path="/checkout">
            <Checkout />
            <SecondaryFooter />
          </Route>
          <Route path="/member">
            <Member />
          </Route>
          <Route path="/login">
            <LoginAndRegister />
            <SecondaryFooter />
          </Route>
          <Route exact path="/">
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
      </>
    )
  }

  return (
    <>
      {useHeader && <Header />}
      {isLoading ? <Spinner /> : switchRoutes()}
    </>
  )
}

export default Location
