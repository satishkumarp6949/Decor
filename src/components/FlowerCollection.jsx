import React from 'react';
import '../assets/FlowerCollection.css'; 
import f1 from '../assets/images/r1.jpg';
import f2 from '../assets/images/w1.jpg';
import f3 from '../assets/images/t1.jpg';
import f4 from '../assets/images/01.jpg';


function FlowerCollection() {
  return (
    <section className="py-5 full-width-section">
      <div className="container-fluid text-center px-5">
        <h2 className="violet-text mb-4">Our Flower Collection</h2>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src= {f1}
                className="card-img-top flower-img"
                alt="Red Roses"
              />
              <div className="card-body">
                <h5 className="card-title">Red Roses</h5>
                <p className="card-text">₹499</p>
                <a href="#" className="custom-violet-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={f2}
                className="card-img-top flower-img"
                alt="White Lilies"
              />
              <div className="card-body">
                <h5 className="card-title">White Lilies</h5>
                <p className="card-text">₹699</p>
                <a href="#" className="custom-violet-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={f3}
                className="card-img-top flower-img"
                alt="Tulips"
              />
              <div className="card-body">
                <h5 className="card-title">Tulip Bouquet</h5>
                <p className="card-text">₹599</p>
                <a href="#" className="custom-violet-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={f4}
                className="card-img-top flower-img"
                alt="Orchids"
              />
              <div className="card-body">
                <h5 className="card-title">Orchid Grace</h5>
                <p className="card-text">₹899</p>
                <a href="#" className="custom-violet-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlowerCollection;