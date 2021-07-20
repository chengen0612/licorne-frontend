import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import './style.css'

// components
import LeftCard from './LeftCard'
import HomePage from './HomePage'
import Profile from './Profile'
import Favorite from './Favorites'

function Member(props) {
  // because getting props from withRouter, it would update after any click on the buttons of the left card

  // get last word of pathname
  const pathname = props.location.pathname
  const condition = pathname.split('/').pop()

  // state to set component use for right part
  const [rightCard, setRightCard] = useState(null)

  // handle what to show on the right side
  useEffect(() => {
    let res = <></>
    switch (condition) {
      case 'profile':
        res = <Profile />
        break
      case 'order':
        res = <h1>order</h1>
        break
      case 'favorites':
        res = <Favorite />
        break
      case 'member':
      default:
        res = <HomePage />
        break
    }
    setRightCard(res)
  }, [condition])

  return (
    <>
      <div className="member-wrapper">
        <LeftCard />
        {rightCard}
      </div>
    </>
  )
}

export default withRouter(Member)
