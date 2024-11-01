import React from 'react';
import '../App.css';

const StarShowerBackground = ({ children }) => {
    return (
        <div className="meteor-shower-background">
            {children}
            {/* Create 100 stars with unique keys */}
            {Array.from({ length: 100 }).map((_, index) => (
                <div className="star" key={index} style={{
                    '--duration': `${Math.random() * 2 + 1}s`,
                    '--delay': `${Math.random() * 5}s`,
                    '--opacity': Math.random() * 0.6 + 0.3,
                    '--size': `${Math.random() * 4 + 2}px`,
                    '--left-start': `${Math.random() * 50}vw`,
                    '--top-start': `${Math.random() * -100}vh`,
                }}></div>
            ))}
        </div>
    );
};

export default StarShowerBackground;
