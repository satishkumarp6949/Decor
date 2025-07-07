import React from 'react';
import '../assets/CorporateEvents.css'; 
import co1 from '../assets/images/c1.png';
import co2 from '../assets/images/c2.jpg';
import co3 from '../assets/images/c3.jpg';
import co4 from '../assets/images/c4.jpg';
import co5 from '../assets/images/c5.jpg';
import co6 from '../assets/images/c6.jpg';


    function CorporateEvents() {
  const items = [
    { id: 1,  image: co1 },
    { id: 2, image: co2 },
    { id: 3, image: co3 },
    { id: 4,  image: co4 },
    { id: 5,  image: co5 },
    { id: 6,  image:co6 },
  ];

  return (
    <div className="corporate-events-container">
      <h2 className="corporate-events-titles text-center mb-3">Corporate Events</h2>
      <p className="corporate-events-description text-center">
               From floral stage setups, we specialize in elegant corporate event decorations for your big day
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

export default CorporateEvents;