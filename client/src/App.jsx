import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './utils/Header'
import { Home } from './pages/Home'
import MyOrders from './utils/MyOrders'
import Cart from './pages/Cart'
import Menu from './pages/Menu'
import Navbar from './utils/Navbar'
import Login from './pages/Login'
import SignUp from './utils/SignUp'

function App() {

    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>
                <Routes>
                    <Route path='/' element={< Home/>}/>
                    <Route path='/orders' element={< MyOrders/>}/>
                    <Route path='/cart' element={< Cart/>}/>
                    <Route path='/menu' element={< Menu/>}/>
                    <Route path='/login' element={< Login/>}/>
                    <Route path='/signup' element={< SignUp/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
