import React, { useState } from 'react'
import { imgPath } from '../../config/index'

import './style.scss'

// components
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
      <div className="home__wrapper">
        {/* eslint-disable */}
        <img className="home__bg-rose" src={imgPath + '/images/home/rose.svg'} alt="rose" />
        <img className="home__bg-lemon" src={imgPath + '/images/home/lemon.png'} alt="lemon" />
        <img className="home__bg-peach" src={imgPath + '/images/home/peach.svg'} alt="peach" />
        {/* eslint-enable */}
        <div className="home__backdrop">
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
        </div>
      </div>
    </>
  )
}

export default Home
