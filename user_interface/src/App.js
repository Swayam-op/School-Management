import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Tools/Navbar';

import './App.css';
import StudentRegistration from './components/Form/StudentRegistration';
import Database from './pages/Database';
import ClassDetails from './pages/ClassDetails';
import SignIn from './components/Form/SignIn';
const App = () => {
  return (
    <>
   
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='register' element={<StudentRegistration/>}/>
        <Route path='databases' element={<Database/>}/>
        <Route path='databases/:classId' element={<ClassDetails/>}/>
        <Route path = 'signin' element={<SignIn/>} />
    </Routes>
    </>
  )
}

export default App