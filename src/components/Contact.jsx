import React from 'react';
import '../assets/Contact.css'; 
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      {/* Contact Hero */}
      <section className="contact-hero text-white text-center py-5 mt-5 full-width-section">
        <div className="container">
          <h1 className="display-5 fw-bold">Get in Touch</h1>
          <p className="lead">We’d love to hear from you — let's bloom something beautiful together.</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-md-5">
              <h4 className="mb-3 violet-text">Contact Details</h4>
              <p><strong>Address:</strong> 123 Bloom Street, Floral City, FL 12345</p>
              <p><strong>Email:</strong> hello@violetbloom.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Hours:</strong> Mon–Sat: 9am – 7pm</p>

              <div className="mt-4">
                <h5 className="violet-text">Follow Us</h5>
                <a href="#" className="text-dark me-3"><i className="fab fa-facebook fa-lg"></i></a>
                <a href="#" className="text-dark me-3"><i className="fab fa-instagram fa-lg"></i></a>
                <a href="#" className="text-dark"><i className="fab fa-twitter fa-lg"></i></a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-7">
              <h4 className="mb-3 violet-text">Send Us a Message</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="5" placeholder="Write your message..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary violet-btn px-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;