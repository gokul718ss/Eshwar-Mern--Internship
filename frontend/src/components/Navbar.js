// frontend/src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/journal">Create Journal</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
