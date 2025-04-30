import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorageService';
import './MyBookings.css';
const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getFromLocalStorage('currentUser');
    if (!currentUser) {
      navigate('/login');
      return;
    }

    const allBookings = getFromLocalStorage('travelBookings') || [];
    const userBookings = allBookings.filter(b => b.user.email === currentUser.email);
    setBookings(userBookings.reverse()); // Show latest first
    setLoading(false);
  }, [navigate, showNotification]);

  const handleDeleteBooking = (bookingId) => {
    const allBookings = getFromLocalStorage('travelBookings') || [];
    const updatedBookings = allBookings.map(booking => {
      if (booking.id === bookingId) {
        return { ...booking, status: 'Cancelled' };
      }
      return booking;
    });

    saveToLocalStorage('travelBookings', updatedBookings);
    setShowNotification(true);

    // Hide notification after 5 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem'
      }}
    >
      <div className="container bg-white bg-opacity-75 p-4 rounded shadow">
        {showNotification && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Your ticket is cancelled!</strong> 80% of your money will be returned within 5 to 6 working days.
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowNotification(false)}
            ></button>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>My Bookings</h2>
          <Link to="/booking/search" className="btn btn-primary">
            <i className="bi bi-plus-circle me-2"></i>New Booking
          </Link>
        </div>

        {bookings.length === 0 ? (
          <div className="card shadow-sm">
            <div className="card-body text-center py-5">
              <i className="bi bi-calendar-x fs-1 text-muted"></i>
              <h4 className="mt-3">No Bookings Found</h4>
              <p className="text-muted">You haven't made any bookings yet</p>
              <Link to="/booking/search" className="btn btn-primary mt-3">
                Book Now
              </Link>
            </div>
          </div>
        ) : (
          <div className="list-group">
            {bookings.map((booking) => (
              <div key={booking.id} className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    {booking.trip.type}: {booking.trip.departure} → {booking.trip.arrival}
                  </h5>
                  <span className={`badge ${booking.status === 'Confirmed' ? 'bg-success' : 'bg-warning'}`}>
                    {booking.status}
                  </span>
                </div>
                <p className="mb-1">
                  <strong>Date:</strong> {new Date(booking.date).toLocaleString()}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">Ref: {booking.id}</small>
                  <div>
                    <strong className="me-3">₹{booking.trip.price}</strong>
                    {booking.status === 'Confirmed' && (
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteBooking(booking.id)}
                      >
                        <i className="bi bi-trash me-1"></i>Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
