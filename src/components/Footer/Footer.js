import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center p-4">
      <div className="footer-content">
        <div className="footer-nav">
          <Link to="/" className="footer-link">
            Hjem
          </Link>
          <Link to="/venues" className="footer-link">
            Veibeskrivelse
          </Link>
          <Link to="/venues" className="footer-link">
            Tilbud
          </Link>
          <Link to="/about" className="footer-link">
            Om-Oss
          </Link>
          <Link to="/contact" className="footer-link">
            Kontakt
          </Link>
        </div>

        <p className="footer-copy">
          © Rogaland Marine AS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
