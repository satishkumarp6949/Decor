import React from 'react';
import '../assets/About.css'; 
import { Link } from 'react-router-dom';
import ab1 from '../assets/images/f1.png';
import ab2 from '../assets/images/team.webp';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center text-white hero-section full-width-section">
        <div className="container">
          <h1 className="display-4 fw-bold">About Violet Bloom</h1>
          <p className="lead">More than flowers — we deliver joy, beauty, and love in every bouquet.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <img
                src={ab1}
                className="img-fluid rounded shadow-sm"
                alt="Flower Shop"
              />
            </div>
            <div className="col-md-6">
              <h2 className="violet-text mb-3">Who We Are</h2>
              <p>
                Founded in 2020, <strong>Violet Bloom</strong> is a boutique flower shop known for its
                passion for petals and artistic arrangements. From weddings and anniversaries to simple
                daily joy, our flowers are handpicked and wrapped with love.
              </p>
              <p>
                Based in the heart of the city, our expert florists craft unique bouquets using the
                freshest seasonal blooms. Each order is a promise of quality, beauty, and heartfelt emotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="violet-text mb-4">Meet Our Team</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img
                src={ab2}
                className="img-fluid rounded shadow-sm mb-3"
                alt="Our Team"
              />
              <p>
                Our team of floral artists and delivery experts are here to ensure every bouquet brings
                a smile. We believe flowers speak louder than words — and our work reflects that belief
                every day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;