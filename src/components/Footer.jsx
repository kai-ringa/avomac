import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+254 737 328 482</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>avomac@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Kijiwetanga, Malindi Kenya</span>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <FaFacebook className="social-icon" />
            </a>
            <a href="#">
              <FaTwitter className="social-icon" />
            </a>
            <a href="#">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Avomac. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
