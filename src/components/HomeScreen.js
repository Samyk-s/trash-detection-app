// src/components/HomeScreen.js

import React, { useEffect } from 'react';
import TabBar from './TabBar';
import '../styles/HomeScreen.css';
import bckimg1 from '../assets/bckimg1.jpeg';
import bckimg2 from '../assets/bckimg2.jpeg';
import bckimg3 from '../assets/bckimg3.jpeg';
import vid1 from '../assets/vid1.mp4';

const HomeScreen = () => {
  useEffect(() => {
    let slideIndex = 0;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function showSlides(n) {
      const slides = document.getElementsByClassName("mySlides");
      if (slides.length === 0) return;
      if (n >= slides.length) { slideIndex = 0; }
      if (n < 0) { slideIndex = slides.length - 1; }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex].style.display = "block";
    }

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (prevButton) prevButton.addEventListener('click', () => plusSlides(-1));
    if (nextButton) nextButton.addEventListener('click', () => plusSlides(1));

    showSlides(slideIndex);

    return () => {
      if (prevButton) prevButton.removeEventListener('click', () => plusSlides(-1));
      if (nextButton) nextButton.removeEventListener('click', () => plusSlides(1));
    };
  }, []);

  return (
    <div className="home-screen">
      <TabBar />

      <div className="slideshow-container">
        <div className="mySlides fade">
          <video src={vid1} alt="Video Slide" style={{ width: '100%', height: 'auto' }} autoPlay loop muted />
        </div>
        <div className="mySlides fade">
          <img src={bckimg1} alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="mySlides fade">
          <img src={bckimg2} alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="mySlides fade">
          <img src={bckimg3} alt="Slide 3" style={{ width: '100%', height: 'auto' }} />
        </div>
        <a className="prev">&#10094;</a>
        <a className="next">&#10095;</a>
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
          <h3>Trash Pickup Booking</h3>
          <p>Book a trash pickup easily through our service to keep your surroundings clean and green.</p>
        </div>
        <div className="service-box">
          <h3>Recycling and Planting Guide</h3>
          <p>Access our comprehensive guide on recycling and planting to contribute to a sustainable environment.</p>
        </div>
      </div>

      <div id="contacts-section" className="contacts-section">
        <footer>
          <h2>Contact Us</h2>
          <p>Phone: +977 9808516437</p>
          <p>Email: samykbajr919@gmail.com</p>
          <p>Address: Newroad Main Street,kathmandu, Nepal</p>
        </footer>
      </div>
    </div>
  );
};

export default HomeScreen;
