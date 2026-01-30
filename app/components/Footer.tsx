import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="newsletter-section">
        <span className="promo-badge">✨ Exclusive Offers</span>
        <h2>Get Special Deals & Travel Inspiration</h2>
        <p>Subscribe to our newsletter and receive up to 20% off your first booking!</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email address" />
          <button className="btn-subscribe">
            <span>✈️</span> Subscribe
          </button>
        </div>
        <p className="sub-text">Join 50,000+ travelers getting exclusive deals</p>
      </div>

      <div className="footer-bottom-grid">
        <div className="footer-brand">
          <div className="footer-logo">🌐 Safarnama</div>
          <p>Your trusted travel partner for unforgettable adventures around the world.</p>
          <div className="social-links">
            <span>fb</span> <span>ig</span> <span>tw</span> <span>yt</span>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Booking Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 123 Travel Street, Adventure City, AC 12345</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>✉️ hello@safarnama.com</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2026 Safarnama. All rights reserved. Crafted with ❤️ for travelers worldwide.</p>
      </div>
    </footer>
  );
};

export default Footer;