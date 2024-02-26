import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homepage.css";
import cardData from "../Assets/cardData";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can adjust the animation duration
    });
  }, []);
  //do h1 with opacity background
  return (
    <div>
      {/* Background Image Section with AOS Animation */}
      {/* Overskrift og random slagord*/}
      <div className="background-image-section">
        <div className="text-wrapper">
          <h1 data-aos="fade-up">Rogaland Marine</h1>
          <h3 data-aos="fade-up" data-aos-delay="500">
            {" "}
            Der kvalitet møter havet. Fra produksjon til perfeksjon i hver bølge
          </h3>
        </div>
      </div>

      {/* Card Section with Blue Background */}
      <div className="card-section text-center">
        <div className="container py-5">
          <div className="row">
            {cardData.map((card) => (
              <div
                className="col-md-4 mb-4"
                key={card.id}
                data-aos="fade-up"
                data-aos-delay={`${100 * card.id}`}
              >
                <div className="card">
                  <img
                    src={card.imgSrc}
                    className="card-img-top"
                    alt={card.altText}
                  />
                  <div className="card-body">
                    <h2 className="card-title">{card.title}</h2>
                    <p className="card-text">{card.text}</p>
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
