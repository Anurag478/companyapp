
import React from 'react'
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home'

export default function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>

      </Routes>
  
    </BrowserRouter>
  )
}