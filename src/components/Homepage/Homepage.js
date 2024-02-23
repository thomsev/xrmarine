import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homepage.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can adjust the animation duration
    });
  }, []);

  return (
    <div>
      {/* Background Image Section with AOS Animation */}
      <div className="background-image-section">
        <h1 data-aos="fade-up">Welcome to Our Site!</h1>
        <h3 data-aos="fade-up" data-aos-delay="500">
          Delivering Excellence & Innovation
        </h3>
      </div>

      {/* Card Section with Blue Background */}
      <div className="card-section text-center">
        <div className="container py-5">
          <div className="row">
            {/* Loop to generate cards */}
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                className="col-md-4 mb-4"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={`${100 * idx}`}
              >
                <div className="card">
                  <img
                    src="your_image_path.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h2 className="card-title">Card Title {idx + 1}</h2>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
