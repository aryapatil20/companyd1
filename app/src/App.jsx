import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage'; // Import FormPage

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Route for FormPage */}
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;