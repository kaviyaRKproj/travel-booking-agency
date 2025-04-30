import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToLocalStorage } from '../utils/localStorageService';

const BookingConfirmation = () => {
  const [trip, setTrip] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedTrip = JSON.parse(localStorage.getItem('selectedTrip'));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!selectedTrip || !currentUser) {
      navigate('/booking/search');
      return;
    }

    setTrip(selectedTrip);
    setUser(currentUser);
    setLoading(false);
  }, [navigate]);

  const handleConfirm = () => {
    const bookings = JSON.parse(localStorage.getItem('travelBookings')) || [];
    const newBooking = {
      id: Date.now(),
      trip,
      user,
      date: new Date().toISOString(),
      status: 'Confirmed'
    };
    bookings.push(newBooking);
    saveToLocalStorage('travelBookings', bookings);

    setShowSuccess(true);

    setTimeout(() => {
      navigate('/my-bookings');
    }, 3000);
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
        backgroundImage:
          "url('https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem'
      }}
    >
      <div className="container">
        {showSuccess && (
          <div className="position-fixed top-0 start-0 end-0 p-3" style={{ zIndex: 9999 }}>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <div className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill fs-3 me-2"></i>
                <div>
                  <h5 className="mb-1">Booking Confirmed!</h5>
                  <p className="mb-0">Your booking #{Date.now()} has been successfully confirmed.</p>
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowSuccess(false)}
              ></button>
            </div>
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="p-4 mb-5"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
              }}
            >
              <div
                className="text-center py-3 mb-4"
                style={{
                  background: 'linear-gradient(to right, #7b4f2c, #a9745b)', // brown gradient
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                }}
              >
                <h3 className="m-0 fw-bold" style={{ color: '#fff', letterSpacing: '1px' }}>
                  Confirm Your Booking
                </h3>
              </div>

              <div>
                <h4 className="mb-4 text-white">Trip Details</h4>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <p><strong>Type:</strong> {trip.type}</p>
                    <p><strong>From:</strong> {trip.departure}</p>
                    <p><strong>To:</strong> {trip.arrival}</p>
                  </div>
                  <div className="col-md-6">
                    <p><strong>Departure:</strong> {trip.departureTime}</p>
                    <p><strong>Arrival:</strong> {trip.arrivalTime}</p>
                    <p><strong>Duration:</strong> {trip.duration}</p>
                  </div>
                </div>

                <h4 className="mb-3 text-white">Passenger Details</h4>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>

                <hr className="border-white" />

                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="mb-0 text-white">Total: ₹{trip.price}</h3>
                  <button
                    onClick={handleConfirm}
                    className="btn btn-lg"
                    style={{
                      backgroundColor: '#7b4f2c', // Brown color
                      borderColor: '#6e4428', // Darker brown for the border
                      color: '#fff' // White text color
                    }}
                    disabled={showSuccess}
                  >
                    {showSuccess ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Processing...
                      </>
                    ) : (
                      'Confirm & Pay'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
