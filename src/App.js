// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import FAQ from './components/FAQ';
import TermsConditions from './components/TermsConditions';
import BookingSearch from './components/BookingSearch';
import BookingResults from './components/BookingResults';
import BookingConfirmation from './components/BookingConfirmation';
import MyBookings from './components/MyBookings';
import BookingSuccess from './components/BookingSuccess';

import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/booking/search" element={<BookingSearch />} />
        <Route path="/booking/results" element={<BookingResults />} />
        <Route path="/booking/confirm" element={<BookingConfirmation />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;