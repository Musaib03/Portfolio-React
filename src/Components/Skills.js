import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Skills.css'; // Add the CSS for the page
import MeteorShowerBackground from './MeteorShowerBackground'; // Ensure correct path to MeteorShowerBackground


const Skills = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const skills = [
        { name: 'JavaScript', description: 'As a skilled JavaScript developer, I harness the power of this dynamic language to create interactive and responsive web applications. I am well-versed in various frameworks and libraries, enabling me to enhance user experiences through client-side scripting and dynamic content manipulation. My passion for JavaScript drives me to stay updated with the latest trends and best practices in web development.' },
        { name: 'React', description: 'I specialize in React, a leading JavaScript library for building dynamic user interfaces. My experience in developing component-based applications enables me to create reusable UI components that enhance performance and maintainability. I am proficient in state management with tools like Redux, ensuring efficient data flow in complex applications.' },
        { name: 'Django', description: 'As a proficient Django developer, I leverage this powerful Python web framework to create robust and scalable web applications. With a focus on clean and efficient code, I utilize Djangos built-in features such as authentication, ORM, and a customizable admin interface. My experience in Django enables me to streamline development processes and deliver high-quality web solutions efficiently.' },
        { name: 'Problem Solving', description: 'I excel in problem-solving, approaching challenges with a critical and analytical mindset. My ability to dissect complex issues and explore multiple solutions empowers me to devise innovative strategies for overcoming obstacles. I thrive in dynamic environments, using my logical reasoning and creativity to enhance overall project efficiency and effectiveness.' },
        { name: 'Python', description: 'With a strong foundation in Python, I am adept at utilizing its versatility across various applications, from web development to data analysis. My knowledge of Python extensive libraries and frameworks allows me to tackle diverse projects efficiently, whether its building applications or automating tasks, ensuring optimal performance and scalability' },
        { name: 'UI design', description: 'My UI designing skills focus on creating engaging and user-centric interfaces. I combine aesthetic design principles with practical functionality to ensure a seamless user experience. By employing tools such as wireframes and prototypes, I translate user needs into intuitive designs, enhancing usability and promoting brand consistency across digital platforms.' },
	]
    return (
        <>
		<MeteorShowerBackground>
		</MeteorShowerBackground>

        <div className="page-container">
            {/* Left: 3D Sphere */}
            <div className="sphere-container">
                <div className="sphere">
                    {/* Circles for the 3D effect */}
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>

                    {/* Text inside the sphere */}
                    <div className="sphere-text">
                        Skills Loading...
                    </div>
                </div>
            </div>

            {/* Right: Skills Slider */}
            <div className="slider-container">
                <div className="skills-header">
                    <h1>My Skills</h1>
					<p>My creative skills & experiences.
					Proficient in HTML, CSS, and JavaScript, I adeptly craft dynamic and visually appealing web applications, ensuring an engaging user experience. Leveraging the power of Django, I design robust and scalable web solutions, incorporating best practices to streamline development processes. Beyond web development, I excel in problem-solving using Java, C, and Python. Whether it's algorithmic challenges or complex software engineering tasks, I apply a systematic approach and logical reasoning to devise elegant solutions.
					 With a keen eye for detail and a passion for innovation, I continually strive to expand my skill set and tackle new challenges head-on in both the realms of web development and problem-solving.</p>
                </div>
                <div className="skills-slider">
                    <Slider {...settings}>
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <h2>{skill.name}</h2>
                                <p>{skill.description}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
        </>
    );
};

export default Skills;
