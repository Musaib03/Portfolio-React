import React from 'react';
import './App.css'; // Import App.css for global styles
import Navbar from './Components/Navbar'; // Correct path to Navbar.js
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />

            {/* Other components and content can go here */}
        </div>
    );
}

export default App;
