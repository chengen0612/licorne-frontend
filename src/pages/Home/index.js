import React, { useState } from 'react'

import HomeHero from './HomeHero'
import HomeCustomized from './HomeCustomized'
import HomeCourse from './HomeCourse'
import HomeBestseller from './HomeBestseller'
import HomeMap from './HomeMap'
import HomeFooter from './HomeFooter'
import HomeAside from './HomeAside'

function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
      <HomeHero setIsLoaded={setIsLoaded} />
      {isLoaded && (
        <>
          <HomeCustomized />
          <HomeCourse />
          <HomeBestseller />
          <HomeMap />
          <HomeFooter />
          <HomeAside />
        </>
      )}
    </>
  )
}

export default Home
