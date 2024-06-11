import React from 'react';
import './Login.css';

function Login({ toggleForm }) {
    return (
        <div className="login-container">
            <div className="success-message">You have been logged in.</div>
            <div className="error-message-login"></div>
            <div className="top">
                <span>Don't have an account? <a href="#" onClick={toggleForm}>Sign Up</a></span>
                <header>Login</header>
            </div>
            <div className="input-box">
                <input type="text" className="input-field" placeholder="Username or Email" />
                <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
                <input type="password" className="input-field" placeholder="Password" />
                <i className="bx bx-lock-alt"></i>
                <span className="toggle-password" onClick={() => console.log("Toggle Password")}>
                    <i className="bx bx-hide"></i>
                </span>
            </div>
            <div className="input-box">
                <button type="button" className="login-submit">Sign In</button>
            </div>
            <div className="two-col">
                <div className="one">
                    <input type="checkbox" id="login-check" />
                    <label htmlFor="login-check"> Remember Me</label>
                </div>
                <div className="two">
                    <label><a href="#">Forgot password?</a></label>
                </div>
            </div>
            <div className="google-container">
                <a href="#">
                    <div className="g-sign-in-button">
                        <div className="content-wrapper">
                            <div className="logo-wrapper">
                                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" />
                            </div>
                            <span className="text-container">
                                <span>Continue with Google</span>
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Login;
