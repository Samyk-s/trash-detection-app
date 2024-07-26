// src/components/TabBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/TabBar.css';
import logo from '../assets/logo.jpeg';

const TabBar = () => {
  return (
    <div className="tab-bar">
      <img src={logo} alt="Logo" className="logo" />
      <Link to="/">🏠︎ Home</Link>
      <Link to="/live-detection">Live Detection</Link>
      <ScrollLink to="about-section" smooth={true} duration={500}>
        About
      </ScrollLink>
      <ScrollLink to="services-section" smooth={true} duration={500}>
        Services
      </ScrollLink>
      <ScrollLink to="contacts-section" smooth={true} duration={500}>
        Contacts
      </ScrollLink>
    </div>
  );
};

export default TabBar;
