import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homepage.css";
import cardData from "../Assets/cardData";
import sponsorsData from "../Assets/sponsorData";

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
      <div className="background-image-section">
        <div className="text-wrapper">
          <h1 data-aos="fade-up">Rogaland Marine</h1>
          <h3 data-aos="fade-up" data-aos-delay="500">
            Der kvalitet møter havet. Fra produksjon til perfeksjon i hver bølge
          </h3>
        </div>
      </div>

      {/* Card Section with Blue Background */}
      <div className="card-section text-center">
        <div className="container py-5">
          <div className="row">
            {cardData.map((card, index) => (
              <div
                className="col-md-4 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${100 * index}`}
              >
                <div className="card">
                  <img
                    src={require(`../Assets/${card.imgSrc}`)} // Using require to load the image from the Assets folder
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
      {/* Sponsor Logos Section */}
      <div className="sponsor-section text-center">
        <div className="container py-5">
          <div className="row justify-content-center">
            {sponsorsData.map((sponsor) => (
              <div className="col-auto mb-4" key={sponsor.id}>
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require(`../Assets/${sponsor.imgSrc}`)}
                    className="sponsor-logo"
                    alt={sponsor.altText}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
