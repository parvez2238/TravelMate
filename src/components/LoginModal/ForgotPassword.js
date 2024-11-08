import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    const userData = { email };

    try {
      // Send POST request to the backend API for password reset
      const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // If password reset email is sent successfully
        setMessage(data.message || 'Password reset link sent! Please check your email.');
        setError('');
      } else {
        // If there was an error in sending the reset link
        setError(data.message || 'Error sending password reset email. Please try again.');
        setMessage('');
      }
    } catch (error) {
      setError('Server error, please try again later.');
      setMessage('');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleForgotPassword}>
        <h2>Forgot Password</h2>
        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="text-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Reset Password</button>
        <p className="signup-prompt">
          Remembered your password? <Link to="/login" className="signup-link">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
