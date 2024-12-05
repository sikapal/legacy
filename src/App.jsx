import React from 'react'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Clients from './components/Clients'
import About from './components/About'
import Products from './components/Products'
import OurServices from './components/OurServices'
import Footer from './components/MyFooter'
import OurTeam from './components/OurTeam'


function App() {

  return (
    <>
   <div className='w-full overflow-x-hidden'>
   <Header/>
    <Home/>
    <About/>
    <OurServices/>
    <Clients/>
    
    <Products/>
   
    <Footer/>
   </div>
  
    </>
  )
}

export default App
