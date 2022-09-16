import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Tools/Navbar';

import './App.css';
import StudentRegistration from './components/Form/StudentRegistration';
import Database from './pages/Database';
const App = () => {
  return (
    <>
   
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='register' element={<StudentRegistration/>}/>
        <Route path='databases' element={<Database/>}/>
    </Routes>
    </>
  )
}

export default App