// src/About.js

import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
    return (
        <div className="about-container">
            <div className="image-container">
                <img src="/head.png" alt="Profile" className="profile-image" />
            </div>
            <div className="bio">
            <h1 style={{ color: "aliceblue" }}>About Me</h1>
            <p>
                    
An imaginative responsible and adaptive person who is highly interested to explore new dimensions and work on new ideas. Adventurous explorer, fueled by a boundless curiosity to unravel new realms and pioneer fresh concepts. With an unwavering commitment to integrity, I immerse myself in every task, driven by an insatiable enthusiasm to conquer challenges. Imersing in problem-solving across the diverse landscapes of Java, Python, and C, I navigate the intricate webs of code with finesse.
 Yet, my journey doesn't halt there; I venture into the vibrant universe of web development, crafting digital symphonies with HTML, CSS, JavaScript, React and the dynamic backend Django framework.<br></br>
Beyond the realms of technology, my thirst for knowledge extends to the realms of physics, where I eagerly delve into the mysteries of the cosmos, thirsting for understanding and enlightenment. With each endeavor, I embrace adaptability, embracing the ever-shifting tides of innovation and evolution, poised to soar to new heights and chart uncharted territories.
                    {/* You can add more content about yourself here */}
                </p>
            </div>
        </div>
    );
};

export default About;
