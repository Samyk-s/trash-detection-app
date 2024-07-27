// src/components/HomeScreen.js

import React, { useState } from 'react';
import TabBar from './TabBar';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css';
import vid1 from '../assets/vid1.mp4';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className={`faq-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

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
          <p>Welcome to our project, a collaborative effort by final year Computer Engineering students. Our mission is to create an impactful solution for waste management and environmental sustainability.</p>
          <p>This platform leverages advanced technologies to assist in proper waste disposal and recycling practices. We believe that by providing the right tools and information, we can empower communities to make environmentally conscious decisions.</p>
          <p>Our project combines the power of machine learning, real-time data processing, and user-friendly interfaces to deliver a comprehensive waste classification system. We are committed to continuous improvement and innovation, aiming to expand our features and reach in the near future.</p>
          <p>Thank you for being a part of our journey towards a cleaner and greener planet. Your feedback and participation are invaluable to us.</p>
        </div>
      </div>

      <div id="services-section" className="services-section">
        <div className="service-box">
          <h3>Live Webcam Classification</h3>
          <p>Our live webcam feature utilizes state-of-the-art object detection algorithms to classify items as recyclable or non-recyclable in real-time. This innovative tool helps users quickly and accurately sort their waste, promoting efficient recycling practices.</p>
          <p>Simply point your webcam at the object you wish to classify, and our system will instantly analyze the item and provide a classification. This feature is designed to be intuitive and easy to use, making it accessible to users of all ages.</p>
          <p>By integrating machine learning models trained on a diverse dataset, our live classification tool continually improves its accuracy and reliability. We are dedicated to enhancing this feature to support more complex waste sorting scenarios in the future.</p>
        </div>
        
        <div className="service-box">
          <h3>Recycling and Planting Guide</h3>
          <p>Access our comprehensive guide on recycling and planting to contribute to a sustainable environment.</p>
          <Link to="/guide">More</Link>
        </div>
      </div>

      <div id="faq-section" className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <FAQItem 
          question="What items can be recycled?" 
          answer="Common recyclable items include paper products, plastic bottles and containers, glass bottles and jars, metal cans and foil, and cardboard." 
        />
        <FAQItem 
          question="What items cannot be recycled?" 
          answer="Items that cannot be recycled include food waste, plastic bags and wrappers, Styrofoam, electronics, and hazardous materials." 
        />
        <FAQItem 
          question="How should I prepare items for recycling?" 
          answer="Remove any plastic wrappers, rinse out residue, flatten boxes, and clean foil before placing them in the recycling bin." 
        />
        <FAQItem 
          question="What should I do with electronic waste?" 
          answer="Electronic waste should not be disposed of in regular trash. Take it to e-waste recycling centers." 
        />
        <FAQItem 
          question="Are there any local recycling programs for plastic bags?" 
          answer="Some local recycling programs accept plastic bags. Check with your local recycling center for more information." 
        />
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
