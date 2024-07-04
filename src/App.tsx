import React from 'react';
import './App.css';
import {FaGithub, FaLinkedin} from "react-icons/fa";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Portfolio</h1>
                <div className="socials-container">
                    <a href="https://www.linkedin.com/in/leonfru/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                    <a href="https://github.com/leon-fruet" target="_blank" rel="noreferrer"><FaGithub/></a>
                </div>
            </header>
        </div>
    );
}

export default App;
