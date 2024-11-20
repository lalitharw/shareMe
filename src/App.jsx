import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// react router dom
import { Routes, Route } from "react-router-dom"


// components
import { Login } from './components/Login'
import { Home } from "./components/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
