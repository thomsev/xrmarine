import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center p-4">
      <div className="footer-content">
        <div className="footer-nav">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/venues" className="footer-link">
            Destinations
          </Link>
          <Link to="/venues" className="footer-link">
            Special Offers
          </Link>
          <Link to="/about" className="footer-link">
            About Us
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>

        <p className="footer-copy">© 2023 Holidaze. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
