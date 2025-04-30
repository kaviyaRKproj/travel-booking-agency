const FAQ = () => {
    const faqs = [
      {
        question: "How do I book a ticket?",
        answer: "You can book tickets by visiting our 'Book Now' page, entering your travel details, selecting your preferred option, and completing the payment process."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards, net banking, UPI payments, and popular digital wallets like Paytm, Google Pay, and PhonePe."
      },
      {
        question: "Can I cancel or modify my booking?",
        answer: "Yes, most bookings can be modified or cancelled through 'My Bookings' section. Cancellation charges may apply depending on the service provider's policy."
      },
      {
        question: "How do I get my ticket after booking?",
        answer: "You will receive your e-ticket via email immediately after successful payment. You can also download it from the 'My Bookings' section on our website."
      },
      {
        question: "What if my flight/bus is cancelled?",
        answer: "In case of cancellation by the service provider, we will notify you immediately and help you with rescheduling or processing a full refund."
      },
      {
        question: "Do you offer travel insurance?",
        answer: "Yes, we offer optional travel insurance during the booking process that covers trip cancellations, medical emergencies, and lost baggage."
      }
    ];
  
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow">
              <div className="card-body p-4">
                <h1 className="text-center mb-4">Frequently Asked Questions</h1>
                
                <div className="accordion" id="faqAccordion">
                  {faqs.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header">
                        <button 
                          className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target={`#collapse${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div 
                        id={`collapse${index}`} 
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-light rounded">
                  <h4 className="mb-3">Still have questions?</h4>
                  <p>
                    Contact our 24/7 customer support at <strong>support@travelexpress.com</strong> or call us at 
                    <strong> +91 9876543210</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FAQ;