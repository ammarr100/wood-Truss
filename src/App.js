import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Animations from './Animations';
import Home from './Home'
import About_ from './Pages/About_';
import Contact_ from './Pages/Contact_';
import Products_ from './Pages/Products_';
import Services_ from './Pages/Services_';

const App = () => {
  return (
   <>
   <Animations/>
   <Routes>
          <Route exact path = '/' element = {<Home/>}></Route>
          <Route path = 'products' element = {<Products_/>}></Route>
          <Route path = '/services' element = {<Services_/>}></Route>
          <Route path = '/about' element = {<About_/>}></Route>
          <Route path = '/contact' element = {<Contact_/>}></Route>
          <Route path = '*' element = {<Home/>}></Route>
      </Routes>
   </>
  )
}

export default App