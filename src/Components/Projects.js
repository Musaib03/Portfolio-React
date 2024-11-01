import React from 'react';
import './Projects.css'; // External CSS for styling
import MeteorShowerBackground from './MeteorShowerBackground';

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: 'HealthCare Application',
			description: 'An app to manage patient records, schedule appointments, and support telemedicine.',
			image: 'https://via.placeholder.com/150',
			githubLink: 'https://github.com/yourusername/project1',
		},
		{
			id: 2,
			title: 'Ecommerce Website',
			description: 'A platform for buying and selling products with secure payment and inventory management.',
			image: 'https://via.placeholder.com/150',
			githubLink: 'https://github.com/yourusername/project2',
		},
		{
			id: 3,
			title: 'CryptoTracker',
			description: 'A tool to track cryptocurrency prices, manage portfolios, and get price alerts.',
			image: 'https://via.placeholder.com/150',
			githubLink: 'https://github.com/yourusername/project3',
		},
		{
			id: 4,
			title: 'Telegram Scrapper',
			description: 'A data scraper for Telegram to collect and organize channel information.',
			image: 'https://via.placeholder.com/150',
			githubLink: 'https://github.com/yourusername/project4',
		},
		{
			id: 5,
			title: 'Personal Portfolio',
			description: 'A responsive portfolio showcasing projects, skills, and professional experience.',
			image: 'https://via.placeholder.com/150',
			githubLink: 'https://github.com/yourusername/project5',
		},
		{
			id: 6,
			title: 'Jarvis Basic',
			description: 'An AI virtual assistant for basic tasks like reminders and scheduling.',
			image: 'https://via.placeholder.com/150',
			githubLink: 'https://github.com/yourusername/project6',
		},
	];
  return (
	<>
	<MeteorShowerBackground>
	</MeteorShowerBackground>

	
	<div className='projects-head'>
		<h2>My Projects</h2>
	</div>
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <button className="github-btn">View on GitHub</button>
          </a>
        </div>
      ))}
    </div>
	</>
  );
};

export default Projects;
