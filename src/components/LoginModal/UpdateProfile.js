// components/LoginModal/UpdateProfile.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'

const UpdateProfile = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Add logic to handle profile update here (e.g., API call)
    navigate('/'); // Redirect to the home page after updating profile
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Update Profile</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="text-input" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="text-input" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="text-input" required />
        </div>
        <button type="submit" className="submit-btn">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
