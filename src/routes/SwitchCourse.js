import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// 共通元件
import Header from '../components/Header'

// 分頁元件
import Course from '../pages/Course'
import CourseList from '../pages/Course/CourseList/CourseList'
import CourseExhibition from '../pages/Course/CourseList/CourseExhibition'
import CourseImgDiffuser from '../pages/Course/CourseList/CourseImgDiffuser'

function SwitchCourse(props) {
  const path = props.location.pathname

  // state to store component
  const [display, setDisplay] = useState(<></>)

  // determine what to show on the screen
  useEffect(() => {
    const params = path.split('/').pop()
    let result = <></>

    switch (params) {
      case 'course':
        result = <Course />
        break
      case 'list':
        result = <CourseList />
        break
      case 'diffuser':
        result = <CourseImgDiffuser />
        break
      case 'exhibition':
        result = <CourseExhibition />
        break
      default:
        break
    }

    setDisplay(result)
  }, path)

  return (
    <>
      {display && (
        <>
          <Header />
          {display}
        </>
      )}
    </>
  )
}

export default withRouter(SwitchCourse)
