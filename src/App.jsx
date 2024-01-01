import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './page/home/Home'
import Write from './page/write/Write'
import SettingPage from './page/settings/SettingPage'
import Register from './page/register/Register'
import Login from './page/login/Login'
import { Route, Routes } from 'react-router-dom'
import PostPage from './page/SinglePost/PostPage'
import Single from './component/single/Single'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/post' element={<PostPage/>} />
        <Route path='/new' element={<Write/>} />
        <Route path='/setting' element={<SettingPage/>} />
      </Routes>
    </>
  )
}

export default App