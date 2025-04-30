import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingSearch.css'; // Add this line for external styles

const BookingSearch = () => {
  const [tripType, setTripType] = useState('one-way');
  const [from, setFrom] = useState('Chennai');
  const [to, setTo] = useState('Bangalore');
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const lastSearch = JSON.parse(localStorage.getItem('travelSearch'));
    if (lastSearch) {
      setTripType(lastSearch.tripType || 'one-way');
      setFrom(lastSearch.from || '');
      setTo(lastSearch.to || '');
      setDeparture(lastSearch.departure || '');
      if (lastSearch.returnDate) setReturnDate(lastSearch.returnDate);
      setPassengers(lastSearch.passengers || 1);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchData = { tripType, from, to, departure, returnDate, passengers };
    localStorage.setItem('travelSearch', JSON.stringify(searchData));
    navigate('/booking/results');
  };

  return (
    <div className="booking-search-wrapper">
      <div className="container py-5">
        <div className="card shadow">
          <div className="card-body p-4">
            <h2 className="text-center mb-4 text-white">Book Your Trip</h2>

            <div className="mb-3 text-center">
              <div className="btn-group">
                <button
                  className={`btn ${tripType === 'one-way' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setTripType('one-way')}
                >
                  One Way
                </button>
                <button
                  className={`btn ${tripType === 'round' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setTripType('round')}
                >
                  Round Trip
                </button>
              </div>
            </div>

            <form onSubmit={handleSearch}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-white">From</label>
                  <input
                    type="text"
                    className="form-control"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label text-white">To</label>
                  <input
                    type="text"
                    className="form-control"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label text-white">Departure Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    required
                  />
                </div>

                {tripType === 'round' && (
                  <div className="col-md-6">
                    <label className="form-label text-white">Return Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      required
                    />
                  </div>
                )}

                <div className="col-md-6">
                  <label className="form-label text-white">Passengers</label>
                  <select
                    className="form-select"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Person' : 'People'}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 d-flex align-items-end">
                  <button type="submit" className="btn btn-success w-100 py-3">
                    <i className="bi bi-search me-2"></i> Search Trips
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSearch;
