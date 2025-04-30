import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFromLocalStorage } from '../utils/localStorageService';
import ConfettiAnimation from '../animations/ConfettiAnimation';
import AnimatedCheckmark from '../animations/AnimatedCheckmark';
import useCountdown from '../hooks/useCountdown';
import './BookingSuccess.css';

const BookingSuccess = () => {
  const [booking, setBooking] = useState(null);
  const [user, setUser] = useState(null);
  const [isPrinting, setIsPrinting] = useState(false);
  const navigate = useNavigate();
  const countdown = useCountdown(10, () => navigate('/my-bookings'));

  useEffect(() => {
    const currentUser = getFromLocalStorage('currentUser');
    const bookings = getFromLocalStorage('travelBookings') || [];
    const latestBooking = bookings[bookings.length - 1];

    if (!currentUser) navigate('/login');
    if (!latestBooking) navigate('/booking/search');

    setUser(currentUser);
    setBooking(latestBooking);
    localStorage.removeItem('selectedTrip');
  }, [navigate]);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 500);
  };

  if (!booking || !user) {
    return (
      <div className="loading-spinner">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`booking-success-container ${isPrinting ? 'print-version' : ''}`}>
      {!isPrinting && <ConfettiAnimation duration={5000} />}

      <div className="success-header">
        {!isPrinting && <AnimatedCheckmark />}
        <div>
          <h2>Payment Successful!</h2>
          <p className="subtitle">Thank you for choosing TravelEase</p>
        </div>
      </div>

      <div className="booking-summary">
        <div className="alert alert-success">
          <div className="d-flex align-items-center">
            <i className="bi bi-check-circle-fill me-2"></i>
            <h4 className="mb-0">Booking Confirmed!</h4>
          </div>
          <hr />
          <div className="summary-grid">
            <div>
              <p><strong>Amount Paid:</strong> ₹{booking.trip.price}</p>
              <p><strong>Booking ID:</strong> #{booking.id}</p>
            </div>
            <div>
              <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
              <p><strong>Status:</strong> <span className="badge bg-success">Confirmed</span></p>
            </div>
          </div>
          <hr />
          <p className="mb-0">A confirmation has been sent to <strong>{user.email}</strong></p>
        </div>
      </div>

      <div className="trip-details-card">
        <h5><i className="bi bi-ticket-detailed me-2"></i>Trip Details</h5>
        <div className="details-grid">
          <div>
            <p><strong>Journey:</strong></p>
            <p className="journey-route">
              <span className="departure">{booking.trip.departure}</span>
              <i className="bi bi-arrow-right mx-2"></i>
              <span className="arrival">{booking.trip.arrival}</span>
            </p>
          </div>
          <div>
            <p><strong>Departure Time:</strong> {booking.trip.departureTime}</p>
            <p><strong>Arrival Time:</strong> {booking.trip.arrivalTime}</p>
          </div>
          <div>
            <p><strong>Travel Type:</strong> {booking.trip.type}</p>
            <p><strong>Duration:</strong> {booking.trip.duration}</p>
          </div>
        </div>
      </div>

      <div className="passenger-details">
        <h5><i className="bi bi-person-badge me-2"></i>Passenger Information</h5>
        <div className="passenger-grid">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
        </div>
      </div>

      {!isPrinting && (
        <>
          <div className="recommendations-section">
            <h5><i className="bi bi-lightbulb me-2"></i>Complete Your Experience</h5>
            <div className="recommendation-cards">
              <div className="recommendation-card hotel">
                <div className="card-icon">
                  <i className="bi bi-building"></i>
                </div>
                <div className="card-content">
                  <h6>Hotel in {booking.trip.arrival}</h6>
                  <p className="discount">Get 10% off your stay!</p>
                  <button className="btn btn-sm btn-warning">Book Now</button>
                </div>
              </div>
              <div className="recommendation-card tour">
                <div className="card-icon">
                  <i className="bi bi-signpost-split"></i>
                </div>
                <div className="card-content">
                  <h6>Guided City Tour</h6>
                  <p>Explore with local experts</p>
                  <button className="btn btn-sm btn-warning">Learn More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="next-steps">
            <h5>What would you like to do next?</h5>
            <div className="action-buttons">
              <Link to="/" className="btn btn-outline-primary">
                <i className="bi bi-house-door me-2"></i>Go Home
              </Link>
              <Link to="/my-bookings" className="btn btn-primary">
                <i className="bi bi-journal-check me-2"></i>View Bookings
              </Link>
              <button className="btn btn-success" onClick={handlePrint}>
                <i className="bi bi-printer me-2"></i>Print Ticket
              </button>
            </div>
            <p className="countdown-text">Redirecting to My Bookings in {countdown} seconds...</p>
          </div>
        </>
      )}

      {isPrinting && (
        <div className="print-footer">
          <p>Thank you for traveling with us!</p>
          <p className="contact-info">
            <strong>Customer Support:</strong> support@travelease.com | +91 9876543210
          </p>
          <div className="barcode">
            <img src="/barcode.svg" alt="Booking barcode" />
            <p>{booking.id}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSuccess;
