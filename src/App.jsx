import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/ui/Navbar'
import { lazy } from 'react'

const Home = lazy (()=>import("./pages/home/Home"))
const Login = lazy (()=>import("./pages/login/Login"))
const Layout = lazy (()=>import("./components/layout/Layout"))

const Banner = lazy (()=>import("./components/layout/Banner"))

const Register = lazy (()=>import("./pages/register/Register"))


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/layout' element={<Layout/>} />

      <Route path='/banner' element={<Banner/>} />
        <Route path='/register' element={<Register/>} />

    </Routes>
    
    </>
  )
}

export default App
