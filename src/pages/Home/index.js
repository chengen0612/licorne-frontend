import React from 'react'

import HomeHeader from './HomeHeader'
import HomeCustomized from './HomeCustomized'
import HomeCourse from './HomeCourse'
import HomeBestseller from './HomeBestseller'
import HomeMap from './HomeMap'
import HomeFooter from './HomeFooter'
import HomeAside from './HomeAside'

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeCustomized />
      <HomeCourse />
      <HomeBestseller />
      <HomeMap />
      <HomeFooter />
      <HomeAside />
    </>
  )
}

export default Home
