import { Link } from 'react-router-dom';
import '../assets/ServiceSection.css'

function ServiceSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="violet-text mb-4">Our Services</h2>
        <p className="mb-5">
          We craft beautiful floral arrangements for all your special occasions.
        </p>

        <div className="row g-4">
        
          <div className="col-md-4">
            <Link to="/wedding-decorations" className="text-decoration-none">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-titles">Wedding Decorations</h5>
                <p className="card-text">
                  From mandaps to bridal bouquets, we provide complete floral styling for your big day.
                </p>
              </div>
            </div>
            </Link>
          </div>

        
          <div className="col-md-4">
            <Link to="/party-orders" className="text-decoration-none">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-titles">Party Orders</h5>
                  <p className="card-text">
                    Celebrate birthdays, engagements, and anniversaries with customized flower setups and deliveries.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link to="/corporate-events" className="text-decoration-none">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-titles">Corporate Events</h5>
                <p className="card-text">
                  Add elegance to your office meetings, conferences, or launches with our floral centerpieces and gifts.
                </p>
              </div>
            </div>
            </Link>
          </div>

        </div>

        <div className="mt-4">
          <Link to="/about" className="custom-space-btn px-4">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;