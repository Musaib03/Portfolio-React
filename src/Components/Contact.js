import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const GetInTouch = () => {
  return (
    <div className="get-in-touch-container">
      {/* Left Section with Image */}
      <div className="left-section">
        <img src="/contact.svg" alt="Contact" className="contact-image" />
      </div>

      {/* Right Section with Contact Icons */}
      <div className="right-section">
	  <h1> Get in Touch</h1>
	  <div className="contact-icons">
          <a href="https://instagram.com/03_musaib_" target="_blank" rel="noopener noreferrer" className="contact-item instagram">
            <FontAwesomeIcon icon={faInstagram} className="icon" /> 03_musaib_
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-item github">
            <FontAwesomeIcon icon={faGithub} className="icon" /> Musaib03
          </a>
          <a href="mailto:wanimusaib5493@gmail.com" className="contact-item email">
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> wanimusaib5493@gmail.com
          </a>
          <a href="https://linkedin.com/in/musaibmaqbool" target="_blank" rel="noopener noreferrer" className="contact-item linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="icon" /> Musaib Maqbool Wani
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-item twitter">
            <FontAwesomeIcon icon={faTwitter} className="icon" /> Twitter
          </a>
          <a href="tel:6005687323" className="contact-item phone">
            <FontAwesomeIcon icon={faPhone} className="icon" /> 6005687323
          </a>
        </div>
        <div className="location">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon location-icon" />
          <span>Kulgam, Jammu and kashmir, India 192231 </span>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
