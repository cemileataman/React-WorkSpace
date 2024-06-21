import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { courses } from './Data'
import Course from './components/Course'
import './css/Course.css'

function App() {

  return (
    <div>
      <Header/>
      <div className='course-main'>{
        courses?.map((course)=>(
          <Course key={course.id} course={course}/>//tanımladığımız course component de props olarak geçiyoruz.
        ))
      }</div>
      
    </div>
  )
}

export default App
