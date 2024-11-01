import React from 'react';
import './App.css'; // Import App.css for global styles
import Navbar from './Components/Navbar'; // Correct path to Navbar.js
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />

            {/* Other components and content can go here */}
        </div>
    );
}

export default App;
