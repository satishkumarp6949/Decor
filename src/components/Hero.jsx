import React from "react";
import '../assets/Hero.css';

function HeroSection() {
  return (
    <header className="hero-section">
      <div className="  text-center px-5 full-width-section">
        <h1 className="display-4 fw-bold">Elegant Flowers for Every Moment</h1>
        <p className="lead">Hand-crafted bouquets delivered with love and care.</p>
        <a href="shop.html" className="btn btn-light btn-lg mt-3 shadow-sm">
          Explore Collection
        </a>
      </div>
    </header>
  );
}

export default HeroSection;