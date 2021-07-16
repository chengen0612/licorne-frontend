import React from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'

// 共通元件
import Header from '../components/Header'

// 分頁元件
import Course from '../pages/Course'
import CourseList from '../pages/Course/CourseList/CourseList'
import CourseExhibition from '../pages/Course/CourseList/CourseExhibition'
import CourseImgDiffuser from '../pages/Course/CourseList/CourseImgDiffuser'

function SwitchCourse() {
  return (
    <>
      <Switch>
        <Route path="/course/list">
          <Header />
          <CourseList />
        </Route>
        <Route path="/course/exhibition">
          <Header />
          <CourseExhibition />
        </Route>
        <Route path="/course/diffuser">
          <Header />
          <CourseImgDiffuser />
        </Route>
        <Route path="/course">
          <Header />
          <Course />
        </Route>
      </Switch>
    </>
  )
}

export default SwitchCourse
