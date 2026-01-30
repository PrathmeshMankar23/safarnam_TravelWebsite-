"use client";

import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info-panel">
          <div className="contact-header">
            <span className="contact-subtitle">Get in Touch</span>
            <h2 className="contact-main-title">Contact Us</h2>
            <p>Have questions? Our travel experts are here to help you plan your next perfect getaway.</p>
          </div>

          <div className="info-item-list">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Our Office</h4>
                <p>123 Travel Street, Adventure City, AC 12345</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone Number</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email Address</h4>
                <p>hello@eazytravels.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="How can we help you?" rows={6} required></textarea>
            <button type="submit" className="btn-contact-submit">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;