import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        password: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit'); 
        setFormData({
            username: '',
            name: '',
            password: '',
            email: ''
        });   
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                    {formData.username ? (
                        <>
                            Register as <span className="text-green-500">{formData.username}</span>
                        </>
                    ) : (
                        'Register'
                    )}
                </button>
                <p className="text-center text-gray-700 mt-4">
                    Already registered? 
                    <button onClick={() => navigateLogin()} className="text-indigo-600 hover:underline focus:outline-none focus:underline ml-1">
                        Login
                    </button>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
