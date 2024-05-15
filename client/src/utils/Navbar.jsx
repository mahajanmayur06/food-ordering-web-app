import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="bg-gray-800">
            <ul className="flex items-center justify-end p-4 w-1/2 mx-auto space-x-4">
                <NavItem to="/" label="Home" currentPath={location.pathname} />
                <NavItem to="/orders" label="My Orders" currentPath={location.pathname} />
                <NavItem to="/restaurant" label="Add Restaurant" currentPath={location.pathname} />
                <NavItem to="/cart" label="Go to Cart" currentPath={location.pathname} />
                <NavItem to="/login" label="Login" currentPath={location.pathname} />
            </ul>
        </nav>
    );
};

const NavItem = ({ to, label, currentPath }) => {
    const isActive = currentPath === to;
    const activeClassName = isActive ? 'bg-gray-600 text-white' : 'hover:bg-gray-600 hover:text-white';

    return (
        <li>
            <Link to={to} className={`text-white ${activeClassName} px-4 py-2 rounded-md`}>{label}</Link>
        </li>
    );
};

export default Navbar;
