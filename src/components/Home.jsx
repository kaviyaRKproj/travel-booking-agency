import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  const faqs = [
    {
      question: "How do I book a ticket?",
      answer: "You can book tickets by visiting our 'Book Now' page, entering your travel details, selecting your preferred option, and completing the payment process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, net banking, UPI payments, and popular digital wallets like Paytm, Google Pay, and PhonePe."
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Yes, most bookings can be modified or cancelled through 'My Bookings' section. Cancellation charges may apply depending on the service provider's policy."
    },
    {
      question: "How do I get my ticket after booking?",
      answer: "You will receive your e-ticket via email immediately after successful payment. You can also download it from the 'My Bookings' section on our website."
    },
    {
      question: "What if my flight/bus is cancelled?",
      answer: "In case of cancellation by the service provider, we will notify you immediately and help you with rescheduling or processing a full refund."
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Yes, we offer optional travel insurance during the booking process that covers trip cancellations, medical emergencies, and lost baggage."
    }
  ];

  return (
    <div>
      {/* Hero Section with background image */}
      <div 
        className="hero-section text-white py-5" 
        style={{
          backgroundImage: "url('https://m.media-amazon.com/images/I/71vNu+9nzzL._AC_UF1000,1000_QL80_.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Explore The World With Us</h1>
          <p className="lead mb-4">Book flights, hotels, and packages at the best prices.</p>
          <Link to="/booking/search" className="btn btn-light btn-lg px-4 shadow-sm">
            Book Now <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section with modern design */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm hover-shadow">
              <div className="card-body text-center py-5">
                <i className="bi bi-currency-dollar fs-1 text-primary mb-3"></i>
                <h5 className="fw-semibold mb-2">Best Prices</h5>
                <p className="text-muted">We guarantee the best prices for your trips.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm hover-shadow">
              <div className="card-body text-center py-5">
                <i className="bi bi-headset fs-1 text-primary mb-3"></i>
                <h5 className="fw-semibold mb-2">24/7 Support</h5>
                <p className="text-muted">Our support team is always ready to help you.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm hover-shadow">
              <div className="card-body text-center py-5">
                <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
                <h5 className="fw-semibold mb-2">Safe Travel</h5>
                <p className="text-muted">Your safety is our top priority.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section with background color and clean design */}
      <div className="container my-5 p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#f9fbfd' }}>
        <h2 className="text-center fw-bold mb-4">Frequently Asked Questions</h2>
        <div className="text-center mb-4">
          <button className="btn btn-outline-primary px-4 fw-semibold" onClick={() => setShowFAQ(!showFAQ)}>
            {showFAQ ? "Hide FAQ" : "Show FAQ"}
          </button>
        </div>

        {showFAQ && (
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item border-0" key={index}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
