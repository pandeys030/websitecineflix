import React from 'react';
import './Hero.css';

const Hero = ({ featuredMovie }) => {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src="/videos/featured-movie1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
    </div>
  );
};

export default Hero;
