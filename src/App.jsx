import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// react router dom
import { Routes, Route } from "react-router-dom"


// components
import { Login } from './components/Login'
import { Home } from "./components/Home"
import { PinDetails } from './components/pinDetails'
import { Pins } from "./components/container/Pins"

function App() {

  return (
    <>
      <Routes>

        <Route path='login' element={<Login />} />
        <Route path="/*" element={<Pins />} />
      </Routes>
    </>
  )
}

export default App
