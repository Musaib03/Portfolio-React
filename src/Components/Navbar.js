import React, { useState } from 'react'; // Import useState
import '../App.css'; // Make sure the path is correct based on your project structure

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track whether the navbar is open

    // Function to toggle the navbar open/close state
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>YourLogo</h1> {/* Replace with your logo image if needed */}
            </div>

            {/* Hamburger Menu for mobile view */}
            <div className="hamburger" onClick={toggleNavbar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Navbar Links */}
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#contact">Connect with Me</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
