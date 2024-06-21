import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Products';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
//Routes Route

function App() {

  return (
    <div>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
     </Routes>
    
    </div>
  )
}

export default App
