import React from 'react'
import Header from '../../src/app/Components/Header'
import Home from '../../src/app/Components/Home'
import About from '../../src/app/Components/About'
import Service from '../../src/app/Components/Service'
import Digit from './Components/Digit'
import Footer from './Components/Footer'

const page = () => {
  return (
    <div>
      <Header/>
       <Home/> 
  
       <About/> 
     <Digit/> 
      <Service/>
      <Footer/>
    </div>
  )
}

export default page
