import React from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'

// 共通元件
import Header from '../components/Header'

// 分頁元件
import Course from '../pages/Course'
// import CourseList from '../pages/Course/CourseList'
// import CourseExhibition from '../pages/Course/CourseExhibition'
// import CourseDiffuser from '../pages/Course/CourseDiffuser'

function SwitchCourse() {
  return (
    <>
      <Switch>
        {/* <Route path="/course/list">
          <CourseList />
        </Route> */}
        {/* <Route path="/course/exhibition">
          <CourseExhibition />
        </Route> */}
        {/* <Route path="/course/diffuser">
          <CourseDiffuser />
        </Route> */}
        <Route path="/course">
          <Course />
        </Route>
      </Switch>
    </>
  )
}

export default SwitchCourse
