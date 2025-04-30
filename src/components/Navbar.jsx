import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there is a current user stored in localStorage
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    // Clear current user from localStorage and reset state
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/login'); // Navigate to the login page after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-airplane me-2"></i>TravelEase
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-bookings">
                <i className="bi bi-journal-check me-1"></i> My Bookings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/booking/search">
                <i className="bi bi-search"></i> Book Trip
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="bi bi-info-circle"></i> About
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            {currentUser ? (
              <>
                {/* Show the user's name and a Logout button when logged in */}
                <span className="navbar-text text-white me-3">
                  Welcome, {currentUser.name}
                </span>
                <button className="btn btn-outline-light" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right"></i> Logout
                </button>
              </>
            ) : (
              <>
                {/* Show Login and Sign Up buttons if the user is not logged in */}
                <Link to="/login" className="btn btn-outline-light me-2">
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </Link>
                <Link to="/signup" className="btn btn-primary">
                  <i className="bi bi-person-plus"></i> Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
