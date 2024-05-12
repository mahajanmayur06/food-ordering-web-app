import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/orders'}><li>My Orders</li></Link>
                <Link to={'/menu'}><li>Menu</li></Link>
                <Link to={'/cart'}><li>Go to Cart</li></Link>
                <Link to={'/login'}><li>Login</li></Link>
            </ul>
        </div>
    )
}

export default Navbar