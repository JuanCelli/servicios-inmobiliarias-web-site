import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/sobremi' element={<Inicio />}/>
            <Route path='/sesiones' element={<Inicio/>}/>
            <Route path='/contacto' element={<Inicio/>}/>
            <Route path='/novedades' element={<Inicio/>}/>
          </Routes>
          <Footer/>
          {/* <ArrowUp/> */}
      </BrowserRouter>
    </>
  )
}

export default App
