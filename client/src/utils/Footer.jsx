import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="mb-4">
                        <h3 className="text-white font-bold mb-2">About Us</h3>
                        <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-white font-bold mb-2">Quick Links</h3>
                        <ul className="text-gray-300">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-white font-bold mb-2">Contact Us</h3>
                        <p className="text-gray-300">123 Main Street, City, Country</p>
                        <p className="text-gray-300">Email: example@example.com</p>
                        <p className="text-gray-300">Phone: +1 234 567 890</p>
                    </div>
                </div>
                <hr className="border-gray-600 my-4" />
                <p className="text-center text-gray-300">© 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
