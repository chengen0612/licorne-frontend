import React from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'

// 共通元件
import Header from '../components/Header'
import SecondaryFooter from '../components/SecondaryFooter'

// 分頁元件
import Official from '../pages/Official'

function SwitchOfficial() {
  return (
    <>
      <Switch>
        {/* 系列篩選 */}
        <Route path="/official/tea">
          <Header />
          <Official />
        </Route>
        <Route path="/official/animal">
          <Header />
          <Official />
        </Route>
        <Route path="/official/nature">
          <Header />
          <Official />
        </Route>
        <Route path="/official/alcohol">
          <Header />
          <Official />
        </Route>
        <Route path="/official/all">
          <Header />
          <Official />
        </Route>
        {/* 各別頁面 */}
        <Route path="/official/:id?">
          <Header />
          <Official />
          <SecondaryFooter />
        </Route>
        {/* 入口畫面 */}
        <Route path="/official">
          <Header />
          <Official />
        </Route>
      </Switch>
    </>
  )
}

export default SwitchOfficial
