import React from 'react';
import '../assets/Footer.css';

function Footer() {
  return (
    <footer className="footer  text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h5 className=" footers fw-bold">Violet Bloom </h5>
            <p className='footers'>Beautiful bouquets and elegant party decorations crafted with care and creativity.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className=" footers text-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footers text-decoration-none">Home</a></li>
              <li><a href="/shop" className="footers text-decoration-none">Shop</a></li>
              <li><a href="/party-orders" className="footers text-decoration-none">Party Orders</a></li>
              <li><a href="/about" className="footers text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="footers text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className=" footers fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

        </div>

        <div className="text-center border-top pt-3 mt-3">
          <small>&copy; {new Date().getFullYear()} Violet Bloom. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;