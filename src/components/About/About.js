import React from "react";
import "./About.css"; // Make sure to create an About.css file and import it

function About() {
  return (
    <div className="about-page-wrapper">
      <div className="about-section">
        <h1>Om oss</h1>
        <p>
          Welcome to our website! We are passionate about providing quality
          content and services to our users.
        </p>
        <p>
          Our mission is to enrich lives through innovative solutions and
          engaging experiences. Founded in [Year], we have grown into a trusted
          resource in our industry, committed to excellence and continuous
          improvement.
        </p>
        <p>
          Whether you're looking for [specific information or services], we
          strive to offer the best. Our team is dedicated to ensuring you have
          access to the most up-to-date and relevant information.
        </p>
        <h2>Våre verdier</h2>
        <ul className="values-list">
          <li>
            Innovation: We constantly seek new ways to improve and make a
            difference.
          </li>
          <li>
            Integrity: We believe in being honest and transparent in all our
            dealings.
          </li>
          <li>
            Excellence: We set high standards for ourselves and our services.
          </li>
        </ul>
        <p>Thank you for visiting our site. We look forward to serving you!</p>
      </div>
    </div> // Add the missing closing tag for the outermost <div> element
  );
}

export default About;
