import React from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'

// 共通元件
import Header from '../components/Header'

// 分頁元件
// import Member from '../pages/Member/HomePage'
// import MemberData from '../pages/Member/MemberData'
// import MemberFavoritesCourse from '../pages/Member/Favorites/Course'
// import MemberFavoritesPerfume from '../pages/Member/Favorites/Perfume'
// import MemberOrderCourse from '../pages/Member/Order/Course'
// import MemberOrderPerfume from '../pages/Member/Order/Perfume'

// organized
// import Member from '../pages/Member/Organized'
import Member from '../pages/Member'

function SwitchMember() {
  return (
    <>
      <Switch>
        {/* <Route path="/member/data">
          <Header />
          <MemberData />
        </Route>
        <Route path="/member/favorites/course">
          <Header />
          <MemberFavoritesCourse />
        </Route>
        <Route path="/member/favorites/perfume">
          <Header />
          <MemberFavoritesPerfume />
        </Route>
        <Route path="/member/order/perfume">
          <Header />
          <MemberOrderPerfume />
        </Route>
        <Route path="/member/order/course">
          <Header />
          <MemberOrderCourse />
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
