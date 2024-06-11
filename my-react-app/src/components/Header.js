import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo_SyncTeX.svg';
{/*import './Header.css';*/}
function Header() {
  return (
               
 <div className="wrapper">
 <div className="animation-container">
     <div className="typing-text">
        {/* anything ko bracket curly bhaye aaudaina */}
         <span>\begin(anything)</span>
     </div>
 </div>
 <nav className="nav">
    <div className="nav-logo">
        <img src="logo_SyncTeX.svg" alt="Logo"/>
        </div>
   <div className="nav-menu" id="navMenu">
         <ul>
             <li><a href="#" className="link features-button">Features</a></li>
         </ul>
     </div>
     <div className="nav-button">
         <button className="btn white-btn" id="loginBtn" onclick="login()">Sign In</button>
         <button className="btn" id="registerBtn" onclick="register()">Sign Up</button>
     </div>
     <div className="nav-menu-btn">
         <i className="bx bx-menu" onclick="myMenuFunction()"></i>
     </div>
 </nav>

 <div className="welcome-text">
 <h1>Welcome to SyncTex</h1>
 <p><span className="italic">Where LaTeX meets collaboration</span></p>
</div>
</div>

  );
  }
export default Header;