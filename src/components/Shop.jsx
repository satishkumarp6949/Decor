import React from 'react';
import '../assets/Shop.css'; 
import { Link } from 'react-router-dom';
import pod from '../assets/images/p1.jfif';
import pod1 from '../assets/images/s2.jpg';
import pod2 from '../assets/images/s3.webp';
import pod3 from '../assets/images/s4.jpg';
import pod4 from '../assets/images/s8.jpg';
import pod5 from '../assets/images/s7.webp';

function Shop() {
  const items = [
    { id: 1,  image: pod },
    { id: 2, image: pod1 },
    { id: 3, image: pod2},
    { id: 4,  image: pod3},
    { id: 5,  image: pod4 },
    { id: 6,  image: pod5},
  ];

  return (
    <div className="shop-orders-container">
      <h2 className="shop-orders-title text-center mb-3"></h2>
      <p className="shop-orders-description text-center">
        Here are some samples of our flower arrangements!
      </p>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <button className="custom-grey-btn mt-auto w-100">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;