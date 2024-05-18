import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './utils/Header'
import { Home } from './pages/Home'
import MyOrders from './utils/MyOrders'
import Cart from './pages/Cart'
import Restaurant from './pages/Restaurant'
import Login from './pages/Login'
import SignUp from './utils/SignUp'
import Footer from './utils/Footer'

function App() {

    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>
                <Routes>
                    <Route path='/' element={< Home/>}/>
                    <Route path='/orders' element={< MyOrders/>}/>
                    <Route path='/cart' element={< Cart/>}/>
                    <Route path='/restaurant' element={< Restaurant/>}/>
                    <Route path='/login' element={< Login/>}/>
                    <Route path='/signup' element={< SignUp/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
