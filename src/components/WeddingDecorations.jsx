import React from 'react';
import '../assets/WeddingDecorations.css'; 
import m1  from '../assets/images/we1.jpeg';
import m2 from '../assets/images/w2.avif';
import m3 from '../assets/images/w3.webp';
import m4 from '../assets/images/w4.avif';
import m5 from '../assets/images/w5.webp';
import m6 from '../assets/images/w6.jpg';

    function WeddingDecorations() {
  const items = [
    { id: 1,  image: m1 },
    { id: 2, image: m2 },
    { id: 3, image: m3 },
    { id: 4,  image: m4 },
    { id: 5,  image: m5 },
    { id: 6,  image: m6},
  ];

  return (
    <div className="wedding-decorations-container">
      <h2 className="wedding-decorations-title text-center mb-3">Weddding Decorations</h2>
      <p className="wedding-decorations-description text-center">
               From mandaps to floral stage setups, we specialize in elegant wedding decorations for your big day
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

export default WeddingDecorations;