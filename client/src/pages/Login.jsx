import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup'); 
    };

    return (
        <div>
            <button onClick={() => handleSignUpClick()}>SignUp</button>
        </div>
    );
};

export default Login;
