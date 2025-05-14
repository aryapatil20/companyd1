import React from 'react';
import Navbar from './Navbar';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const handleRedirect = () => {
    window.location.href = 'https://dribbble.com/tags/homepage';
  };

  return (
    <div>
      {/* Render Navbar */}
      <Navbar />

      {/* Button to redirect */}
      <div className="button-container">
        <button onClick={handleRedirect} className="redirect-button">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default HomePage;