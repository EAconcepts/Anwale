import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import logo from './assets/images/logo-black.png'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Home/>

      </BrowserRouter>
      
    </div>
  )
}

export default App
