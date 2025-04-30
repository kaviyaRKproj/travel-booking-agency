import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToLocalStorage } from '../utils/localStorageService';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regex validation
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    // Basic empty check
    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    if (!nameRegex.test(name)) {
      setError('Please enter a valid name (at least 2 letters)');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be at least 6 characters, include letters and numbers');
      return;
    }

    // Check for existing users
    const users = JSON.parse(localStorage.getItem('travelUsers')) || [];
    if (users.some((user) => user.email === email)) {
      setError('Email already registered');
      return;
    }

    // Create and store new user
    const newUser = { name, email, password };
    users.push(newUser);
    saveToLocalStorage('travelUsers', users);
    saveToLocalStorage('currentUser', newUser); // ✅ auto-login

    navigate('/'); // ✅ redirect to home
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        color: '#fff',
      }}
    >
      <div
        className="p-4"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          width: '100%',
          maxWidth: '450px',
        }}
      >
        <h2 className="text-center mb-4 text-white">Create Account</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 fw-bold">
            Sign Up
          </button>
        </form>
        <div className="mt-3 text-center text-white">
          <p>
            Already have an account?{' '}
            <a href="/login" className="text-warning text-decoration-none">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
