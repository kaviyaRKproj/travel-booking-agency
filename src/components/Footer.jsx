// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>TravelEase</h5>
            <p>Your one-stop solution for all travel needs.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p><i className="bi bi-envelope"></i> support@travelease.com</p>
            <p><i className="bi bi-telephone"></i> +91 9876543210</p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} TravelEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;