import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../LoginModal/LoginPage.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      // Sending the POST request to the backend login API
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Successfully logged in, store JWT token in local storage or state
        localStorage.setItem('token', data.token);
        navigate('/'); // Redirect to the home page or dashboard after successful login
      } else {
        // Show error message if login failed
        setError(data.message || 'Something went wrong, please try again.');
      }
    } catch (error) {
      setError('Server error, please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label htmlFor="userid">User ID or Email</label>
          <input
            type="email"
            id="userid"
            className="text-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="text-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="options">
          <label className="remember-me">
            <input type="checkbox" name="remember" /> Remember Me
          </label>
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
        </div><br/><br/>
        <button type="submit" className="submit-btn">Login</button>
        <p className="signup-prompt">
          Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
