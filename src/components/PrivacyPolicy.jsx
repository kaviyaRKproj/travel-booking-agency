import React from 'react';

const PrivacyPolicy = () => {
  const sectionStyle = {
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: '15px 20px',
    borderRadius: '10px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
    marginBottom: '20px',
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
    margin: 0,
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAwNy1sdWtlcy00LmpwZw.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="p-5 rounded-4 shadow-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <h1 className="text-center text-white mb-4">Privacy Policy</h1>
              <p className="text-white-50 text-center">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="mt-4 text-white">1. Introduction</h2>
              <p style={sectionStyle}>
                TravelExpress ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>

              <h2 className="mt-4 text-white">2. Information We Collect</h2>
              <div style={sectionStyle}>
                <ul style={listStyle}>
                  <li><strong>Personal Data:</strong> Name, email, phone number, payment information</li>
                  <li><strong>Derivative Data:</strong> IP address, browser type, access times</li>
                  <li><strong>Travel Data:</strong> Booking history, preferences, destination details</li>
                </ul>
              </div>

              <h2 className="mt-4 text-white">3. Use of Your Information</h2>
              <div style={sectionStyle}>
                <ul style={listStyle}>
                  <li>Process your travel bookings and transactions</li>
                  <li>Improve our website and customer service</li>
                  <li>Send you promotional emails (you may opt-out anytime)</li>
                  <li>Prevent fraudulent transactions and monitor against theft</li>
                </ul>
              </div>

              <h2 className="mt-4 text-white">4. Disclosure of Your Information</h2>
              <div style={sectionStyle}>
                <ul style={listStyle}>
                  <li><strong>Travel Providers:</strong> Airlines, hotels, etc. to fulfill your bookings</li>
                  <li><strong>Legal Requirements:</strong> If required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger or sale of company assets</li>
                </ul>
              </div>

              <h2 className="mt-4 text-white">5. Security of Your Information</h2>
              <p style={sectionStyle}>
                We use administrative, technical, and physical security measures to protect your personal
                information. While we have taken reasonable steps to secure your data, no electronic transmission
                over the Internet can be guaranteed to be 100% secure.
              </p>

              <h2 className="mt-4 text-white">6. Changes to This Privacy Policy</h2>
              <p style={sectionStyle}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page.
              </p>

              <h2 className="mt-4 text-white">7. Contact Us</h2>
              <p style={sectionStyle}>
                <strong>Email:</strong> privacy@travelexpress.com<br />
                <strong>Address:</strong> Privacy Officer, TravelExpress, Chennai, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
