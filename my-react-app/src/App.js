import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AuthForm from './components/authform';
import Features from './components/features';
import './App.css';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Routes>
                    <Route path="/" element={<AuthForm />} />
                    <Route path="/features" element={<Features />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
