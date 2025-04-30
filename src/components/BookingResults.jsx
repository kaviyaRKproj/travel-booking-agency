import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookingResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('travelSearch'));
    setSearchData(data);
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = [
        {
          id: 1,
          type: 'Flight',
          departure: data?.from || 'Chennai',
          arrival: data?.to || 'Bangalore',
          departureTime: '08:00 AM',
          arrivalTime: '10:00 AM',
          duration: '2h',
          price: 4500,
          airline: 'Indigo'
        },
        {
          id: 2,
          type: 'Flight',
          departure: data?.from || 'Chennai',
          arrival: data?.to || 'Bangalore',
          departureTime: '02:00 PM',
          arrivalTime: '04:00 PM',
          duration: '2h',
          price: 5200,
          airline: 'Air India'
        },
        {
          id: 3,
          type: 'Bus',
          departure: data?.from || 'Chennai',
          arrival: data?.to || 'Bangalore',
          departureTime: '10:00 PM',
          arrivalTime: '06:00 AM',
          duration: '8h',
          price: 1200,
          operator: 'SRM Travels'
        }
      ];
      setResults(mockResults);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Finding the best options for you...</p>
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
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="container"
        style={{
          background: 'rgba(255, 255, 255, 0.1)', // Glass effect (translucent white)
          backdropFilter: 'blur(12px)', // Blurring the background
          WebkitBackdropFilter: 'blur(12px)', // For Safari compatibility
          borderRadius: '15px', // Rounded corners
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', // Shadow to enhance glass effect
          color: '#fff', // Text color (white)
          padding: '3rem 2rem', // Padding around the content
        }}
      >
        <h2 className="mb-4">
          Results for {searchData?.from} to {searchData?.to}
        </h2>
        
        <div className="row g-4">
          {results.map((item) => (
            <div key={item.id} className="col-md-6">
              <div
                className="card shadow-sm h-100"
                style={{
                  background: 'rgba(56, 42, 29, 0.7)', // Brown background with transparency
                  backdropFilter: 'blur(10px)', // Slight blur effect on card background
                  borderRadius: '15px', // Soft rounded corners
                  border: '1px solid rgba(255, 255, 255, 0.2)', // Light border
                  color: '#fff', // Text color (white)
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Shadow for depth
                }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5>{item.type}: {item.departure} to {item.arrival}</h5>
                    <span className="badge bg-primary">{item.type === 'Flight' ? item.airline : item.operator}</span>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-6">
                      <p className="mb-1"><strong>Departure:</strong></p>
                      <p>{item.departureTime}</p>
                    </div>
                    <div className="col-6">
                      <p className="mb-1"><strong>Arrival:</strong></p>
                      <p>{item.arrivalTime}</p>
                    </div>
                  </div>
                  <p><strong>Duration:</strong> {item.duration}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="mb-0 text-success">₹{item.price}</h4>
                    <Link 
                      to="/booking/confirm" 
                      className="btn btn-primary"
                      onClick={() => localStorage.setItem('selectedTrip', JSON.stringify(item))}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingResults;
