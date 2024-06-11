import React from 'react';
import './Register.css';

function Register({ toggleForm }) {
    return (
        <div className="register-container">
            <div className="register-message">Your account has been registered.</div>
            <div className="error-message"></div>
            <div className="top">
                <span>Have an account? <a href="#" onClick={toggleForm}>Login</a></span>
                <header>Sign Up</header>
            </div>
            <div className="two-forms">
                <div className="input-box">
                    <input type="text" className="input-field" placeholder="Firstname" />
                    <i className="bx bx-user"></i>
                </div>
                <div className="input-box">
                    <input type="text" className="input-field" placeholder="Lastname" />
                    <i className="bx bx-user"></i>
                </div>
            </div>
            <div className="input-box">
                <input type="text" className="input-field" placeholder="Email" />
                <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
                <input type="password" className="input-field" placeholder="Password" />
                <i className="bx bx-lock-alt"></i>
                <span className="toggle-password" onClick={() => console.log("Toggle Password")}>
                    <i className="bx bx-hide"></i>
                </span>
            </div>
            <div className="input-box">
                <button type="button" className="submit">Sign Up</button>
            </div>
            <div className="two-col">
                <div className="one">
                    <input type="checkbox" id="register-check" />
                    <label htmlFor="register-check"> Remember Me</label>
                </div>
            </div>
            <div className="google-container">
                <a href="#">
                    <button className="g-sign-in-button">
                        <div className="content-wrapper">
                            <div className="logo-wrapper">
                                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" />
                            </div>
                            <span className="text-container">
                                <span>Continue with Google</span>
                            </span>
                        </div>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Register;
