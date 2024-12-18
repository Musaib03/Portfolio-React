import React from 'react';
import MeteorShowerBackground from './MeteorShowerBackground'; // Ensure correct path to MeteorShowerBackground
import TxtRotate from './TxtRotate'; // Import TxtRotate for typewriter effect
import '../App.css'; // Import your CSS

const Home = () => {
    return (
        <>
        <MeteorShowerBackground>
        </MeteorShowerBackground>

            <div className="content">
                <span className="tagline">Welcome to my Portfolio</span>
                {/* <span className="tagline">Aise takta hai aasnmaan ko tu...<br></br>Koi Rehta hai aasmaan hai kya</span> */}

                <h1>
                    {`Hi! I'm Musaib Maqbool `}
                    <br></br>
                    {`I'm  `}
                    <TxtRotate
                        rotateWords={["Web Developer", "Content Writer", "UI Designer", "Entrepreneur"]}
                        period={1500} // Time to pause before deleting the text
                    />
                </h1>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p> */}
            </div>
        </>
    );
};

export default Home;
