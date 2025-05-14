import React, { useState } from 'react';
import './FormPage.css'; // Import the CSS
// import Navbar from './Navbar';

const FormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitted(true); // Show the success message
    setTimeout(() => setIsSubmitted(false), 3000); // Hide the message after 3 seconds
  };

  return (
    <div className="form-page-container">
        {/* <Navbar /> Render Navbar */}
      <div className="form-box">
        <h2>Form Page</h2>

        {/* Success Message */}
        {isSubmitted && (
          <div className="success-message">
            Done Successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;