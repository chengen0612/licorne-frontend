import React from 'react'
import ReactPlayer from 'react-player'
// import './style.css'
import video from './banner4.mp4'

function HomeHero(props) {
  const { setIsLoaded } = props
  return (
    <>
      <div className="header__page container-fluid p-0">
        <ReactPlayer
          url={video}
          playing={true}
          muted={true}
          loop={true}
          width={'fit-content'}
          height={'fit-content'}
          onReady={() => setIsLoaded(true)}
        />
      </div>
    </>
  )
}
export default HomeHero
