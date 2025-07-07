import React from 'react';
import '../assets/PartyOrders.css'; 
import pin from '../assets/images/pink1.jfif';
import p1 from '../assets/images/d2.jfif';
import p2 from '../assets/images/d3.jfif';
import p3 from '../assets/images/d4.jfif';
import p4 from '../assets/images/d5.jfif';
import p5 from '../assets/images/d6.jpg';

function PartyOrders() {
  const items = [
    { id: 1,  image: pin },
    { id: 2, image: p1 },
    { id: 3, image: p2},
    { id: 4,  image: p3},
    { id: 5,  image: p4 },
    { id: 6,  image: p5},
  ];

  return (
    <div className="party-orders-container">
      <h2 className="party-orders-title text-center mb-3">Party Orders</h2>
      <p className="party-orders-description text-center">
        Here are some samples of our flower arrangements for parties and events!
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

export default PartyOrders;