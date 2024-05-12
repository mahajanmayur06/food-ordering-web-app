import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './utils/Header'
import { Home } from './pages/Home'
import MyOrders from './utils/MyOrders'
import Cart from './pages/Cart'
import Menu from './pages/Menu'
import Navbar from './utils/Navbar'

function App() {

    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <Routes>
                    <Route path='/' element={< Home/>}/>
                    <Route path='/orders' element={< MyOrders/>}/>
                    <Route path='/cart' element={< Cart/>}/>
                    <Route path='/menu' element={< Menu/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
