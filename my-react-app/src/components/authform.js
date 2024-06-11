import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './AuthForm.css';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="form-box">
            {isLogin ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
        </div>
    );
}

export default AuthForm;
