// src/App.jsx - O'ZGARMAS
import React from 'react'

import About from './components/About'

import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <About/>

      <Outlet/>

    </div>
  )
}

export default App