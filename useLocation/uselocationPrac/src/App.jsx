import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
    </>
  )
}

export default App