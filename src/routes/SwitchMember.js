import React from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'

// 共通元件
import Header from '../components/Header'

// 分頁元件
import Member from '../pages/Member'
// import MemberData from '../pages/Member/MemberData'
// import MemberFavorites from '../pages/Member/MemberFavorites'
// import MemberOrder from '../pages/Member/MemberOrder'

function SwitchMember() {
  return (
    <>
      <Switch>
        {/* <Route path="/member/data">
          <Header />
          <MemberData />
        </Route> */}
        {/* <Route path="/member/favorites">
          <Header />
          <MemberFavorites />
        </Route> */}
        {/* <Route path="/member/order">
          <Header />
          <MemberOrder />
        </Route> */}
        <Route path="/member">
          <Header />
          <Member />
        </Route>
      </Switch>
    </>
  )
}

export default SwitchMember
