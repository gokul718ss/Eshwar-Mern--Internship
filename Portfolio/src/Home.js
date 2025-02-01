import React from 'react';
import profile from './profile.jpg';

const Home = () => {
  return (
    <div className="section home-section">
      
      <p>GOKUL V</p>
      <img src={profile} alt="Profile" style={{ borderRadius: '50%', width: '150px' }} />
    </div>
  );
};

export default Home;
