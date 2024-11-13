import React from 'react';
import { Link } from 'react-router-dom';  
import './JoinNow.css';

function JoinNow() {
  return (
    <div className="join-now">
      <h1>Unlimited movies, TV shows, and more.</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <form className="join-form">
        <input type="email" placeholder="Email address" required />
        <button type="submit">Get Started</button>
      </form>

      <div className="login-prompt">
        <p>Already signed up? <Link to="/login">Log in now</Link>.</p>
      </div>
    </div>
  );
}

export default JoinNow;
