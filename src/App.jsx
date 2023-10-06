import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Landing = lazy(() => import('./pages/Landing'))
const CoursesPage = lazy(() => import('./pages/Courses'))
const CourseDetailsPage = lazy(() => import('./pages/CourseDetailsPage'));
const RegistrationForm = lazy(() => import('./pages/RegistrationForm'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
          <Route path="/register" element={<RegistrationForm/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App