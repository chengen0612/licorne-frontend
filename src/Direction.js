import React, { useState, useEffect } from 'react'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import myswal from './utils/sweetalert'

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

// 分頁路由表
import SwitchCourse from './routes/SwitchCourse'
import SwitchCustom from './routes/SwitchCustom'

function Direction() {
  // path
  const location = useLocation()
  const history = useHistory()
  const pathname = location.pathname
  // states
  const [useHeader, setUseHeader] = useState(false)
  const [didMount, setDidMount] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // array to store pages not using header or spinner
  /* eslint-disable */
  const noSpinnerList = ['/custom/entrance', '/custom/introduction', '/custom/process', '/member', '/member/profile', '/member/order', '/member/favorites', '/official',]
  const noHeaderList = ['/custom/entrance', '/custom/introduction', '/custom/process', '/checkout/payment']
  const authRequiredList = ['member', 'checkout']
  /* eslint-enable */

  useEffect(() => {
    setDidMount(true)
  }, [])

  // verify identity
  useEffect(() => {
    // require auth ?
    const params = pathname.split('/')[1]
    const index = authRequiredList.findIndex((value) => value === params)
    if (index === -1) return
    // logged or not
    const auth = localStorage.getItem('jwt')
    if (!auth) {
      history.push('/')
      myswal.pleaseLogin()
    }
  }, [location])

  useEffect(() => {
    handleHeader()
    handleSpinner()
  }, [location])

  const handleHeader = () => {
    const index = noHeaderList.findIndex((value) => value === pathname)
    index > -1 ? setUseHeader(false) : setUseHeader(true)
  }

  const handleSpinner = () => {
    if (!didMount) return
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
          {/* sub router */}
          <Route path="/course">
            <SwitchCourse />
          </Route>
          <Route path="/custom">
            <SwitchCustom />
          </Route>

          {/* current path */}
          <Route path="/official/:id">
            <OfficialProd />
            <SecondaryFooter />
          </Route>
          <Route path="/official">
            <Official />
          </Route>
          <Route path="/bestseller">
            <Bestseller />
          </Route>
          <Route path="/quiz">
            <Quiz />
            <SecondaryFooter />
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

export default Direction
