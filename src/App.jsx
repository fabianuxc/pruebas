import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Articles } from './components/Articles'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
    <header>
      <Navbar />
    </header>
      <Articles />
    </>
  )
}

export default App
