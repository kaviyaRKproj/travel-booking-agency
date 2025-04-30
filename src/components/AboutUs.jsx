const AboutUs = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        color: '#fff',
      }}
    >
      <div className="container">
        <div
          className="p-4 mb-5"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <h1 className="text-center fw-bold mb-4">About TravelExpress</h1>

          <div className="text-center mb-4">
            <img
              src="https://media.istockphoto.com/id/2158336511/photo/diverse-friends-having-fun-on-a-sunny-day-in-julian-alps.jpg?s=612x612&w=0&k=20&c=2PsJSc5DTcTyR75dEna47UaPj7AGIySzYDkaaBz1SQA="
              alt="Our Team"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px' }}
            />
          </div>

          <h2 className="fw-semibold mt-4">Our Story</h2>
          <p className="lead">
            Founded in 2023, TravelExpress began with a simple mission: to make travel accessible to everyone.
          </p>
          <p>
            What started as a small team of travel enthusiasts in Chennai has grown into one of India's leading
            online travel platforms. We've helped over 1 million customers plan their perfect trips.
          </p>

          <h2 className="fw-semibold mt-5">Our Mission</h2>
          <p>
            We believe travel has the power to change lives. Our mission is to break down barriers to travel
            by providing affordable, convenient booking options with exceptional customer service.
          </p>

          <h2 className="fw-semibold mt-5">Why Choose Us?</h2>
          <ul className="list-group list-group-flush text-white mb-4">
            <li className="list-group-item bg-transparent border-0 text-white">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Best Prices:</strong> We compare prices across providers to get you the best deal
            </li>
            <li className="list-group-item bg-transparent border-0 text-white">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Easy Booking:</strong> Simple, intuitive platform for all your travel needs
            </li>
            <li className="list-group-item bg-transparent border-0 text-white">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Customer Support:</strong> 24/7 support in multiple languages
            </li>
            <li className="list-group-item bg-transparent border-0 text-white">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Trusted:</strong> Over 100,000 5-star reviews from happy travelers
            </li>
          </ul>

          <div className="mt-5 p-4 rounded" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <h3 className="text-center mb-4">Meet Our Team</h3>
            <div className="row text-center text-white">
              <div className="col-md-4 mb-4">
                <img
                  src="https://media.istockphoto.com/id/855413388/photo/theres-so-much-to-see.jpg?s=612x612&w=0&k=20&c=0pYgKJ46BH8ziQ31CMEQFSNNcvJ5P1RIwiKMHNWDr1A="
                  className="img-fluid rounded-circle mb-3 shadow"
                  width="100"
                  alt="CEO"
                />
                <h5 className="fw-bold">Karthik</h5>
                <p className="text-light">Founder & CEO</p>
              </div>
              <div className="col-md-4 mb-4">
                <img
                  src="https://img.freepik.com/free-photo/young-bearded-man-carrying-backpack-holding-map-standing-near-railing_23-2148203131.jpg?semt=ais_hybrid&w=740"
                  className="img-fluid rounded-circle mb-3 shadow"
                  width="100"
                  alt="CTO"
                />
                <h5 className="fw-bold">Arjun</h5>
                <p className="text-light">Chief Technology Officer</p>
              </div>
              <div className="col-md-4 mb-4">
                <img
                  src="https://t3.ftcdn.net/jpg/08/16/04/74/360_F_816047464_XfNozp7FUU8W5xXfw8QaviSnlucHNwQX.jpg"
                  className="img-fluid rounded-circle mb-3 shadow"
                  width="100"
                  alt="CFO"
                />
                <h5 className="fw-bold">Priya</h5>
                <p className="text-light">Chief Financial Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
