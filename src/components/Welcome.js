import React from 'react';
import { useLocation } from 'react-router-dom';
import './Welcome.css'; // Make sure to create this CSS file

const Welcome = () => {
  const location = useLocation();
  const { username } = location.state || { username: 'Guest' };

  return (
    <div className="welcome-container">
      <h1>Hi {username}</h1>
      <p>Welcome To CourseVita</p>
    </div>
  );
};

export default Welcome;