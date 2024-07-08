import React from 'react';
import TabBar from './TabBar';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css';
import vid1 from '../assets/vid1.mp4';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <TabBar />

      <div className="video-container">
        <video src={vid1} alt="Video Slide" style={{ width: '100%', height: 'auto' }} autoPlay loop muted />
      </div>

      <div id="about-section" className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>This is a beta version of a website designed by final year Computer Engineering students for their project.</p>
        </div>
      </div>

      <div id="services-section" className="services-section">
        <div className="service-box">
          <h3>Live Webcam Classification</h3>
          <p>Use our live webcam feature to classify objects as recyclable or non-recyclable in real-time.</p>
        </div>
        
        <div className="service-box">
          <h3>Recycling and Planting Guide</h3>
          <p>Access our comprehensive guide on recycling and planting to contribute to a sustainable environment.</p>
          <Link to="/guide">More</Link>
        </div>
      </div>

      <div id="contacts-section" className="contacts-section">
        <footer>
          <h2>Contact Us</h2>
          <p>Phone: +977 9808516437</p>
          <p>Email: samykbajr919@gmail.com</p>
          <p>Address: Newroad Main Street, Kathmandu, Nepal</p>
        </footer>
      </div>
    </div>
  );
};

export default HomeScreen;
