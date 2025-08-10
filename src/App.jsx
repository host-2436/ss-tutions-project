import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home' 
import StudentForm from './pages/StudentForm'
import TutorForm from './pages/TutorForm'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student-form' element={<StudentForm/>}/>
        <Route path='/tutor-form' element={<TutorForm/>}/>
      </Routes>
    </div>
  )
}

export default App
