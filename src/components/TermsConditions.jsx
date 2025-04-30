import React from 'react';

const TermsConditions = () => {
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
              <h1 className="text-center text-white mb-4">Terms and Conditions</h1>
              <p className="text-white-50 text-center">Effective date: {new Date().toLocaleDateString()}</p>

              <h2 className="mt-4 text-white">1. General Terms</h2>
              <p style={sectionStyle}>
                By accessing and using the TravelExpress website, you accept and agree to be bound by these Terms and Conditions.
              </p>

              <h2 className="mt-4 text-white">2. Booking Terms</h2>
              <div style={sectionStyle}>
                <ul style={listStyle}>
                  <li>All bookings are subject to availability</li>
                  <li>Prices are subject to change until full payment is received</li>
                  <li>You must provide accurate and complete information during booking</li>
                  <li>We reserve the right to refuse service to anyone for any reason</li>
                </ul>
              </div>

              <h2 className="mt-4 text-white">3. Payment Terms</h2>
              <p style={sectionStyle}>
                Full payment is required at the time of booking unless otherwise specified. We accept various payment methods as listed on our website. All transactions are in Indian Rupees (₹).
              </p>

              <h2 className="mt-4 text-white">4. Cancellation Policy</h2>
              <p style={sectionStyle}>Cancellation policies vary by service provider. Generally:</p>
              <div style={sectionStyle}>
                <ul style={listStyle}>
                  <li>Flight tickets: As per airline policy (usually non-refundable)</li>
                  <li>Hotel bookings: Free cancellation up to 24-48 hours before check-in</li>
                  <li>Bus tickets: Partial refund if cancelled 6+ hours before departure</li>
                </ul>
              </div>

              <h2 className="mt-4 text-white">5. User Responsibilities</h2>
              <div style={sectionStyle}>
                <ul style={listStyle}>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not make any false or fraudulent bookings</li>
                  <li>Ensure all travel documents (ID, visa, etc.) are valid</li>
                  <li>Arrive at the departure point on time</li>
                </ul>
              </div>

              <h2 className="mt-4 text-white">6. Limitation of Liability</h2>
              <p style={sectionStyle}>
                TravelExpress acts only as an intermediary between you and travel service providers. We are not liable for any accidents, injuries, damages, or losses resulting from your travel arrangements.
              </p>

              <h2 className="mt-4 text-white">7. Governing Law</h2>
              <p style={sectionStyle}>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
              </p>

              <h2 className="mt-4 text-white">8. Changes to Terms</h2>
              <p style={sectionStyle}>
                We reserve the right to modify these Terms at any time. Your continued use of our services constitutes acceptance of the modified Terms.
              </p>

              <div className="mt-4 p-3 rounded" style={sectionStyle}>
                <h4 className="text-white">Contact Information</h4>
                <p className="text-white-50">
                  <strong>Email:</strong> legal@travelexpress.com<br />
                  <strong>Address:</strong> Legal Department, TravelExpress, Chennai, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
