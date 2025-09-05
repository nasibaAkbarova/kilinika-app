import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/ui/Navbar'
import { lazy } from 'react'

const Home = lazy (()=>import("./pages/home/Home"))
const Login = lazy (()=>import("./pages/login/Login"))
const Layout = lazy (()=>import("./components/layout/Layout"))

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/layout' element={<Layout/>} />
    </Routes>
    
    </>
  )
}

export default App
