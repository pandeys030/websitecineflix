import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';  // Import Link for navigation

function Login() {
  return (
    <div className="login">
      <h1 className="login-title">Log In</h1>
      <form className="login-form">
        <input type="email" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
      <div className="login-footer"> 
        <p>New to CineFlix? <Link to="/join-now">Sign up now</Link></p>
        <p className="login-terms">
          This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/">Learn more</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
