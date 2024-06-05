import React from "react";
import { BackgroundVideoSection } from "./BackgroundSectionStyles";
import bgVideo from "./bakgrunnvideo.mp4";

const BackgroundSection = () => {
  return (
    <BackgroundVideoSection>
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-wrapper">
        <h1 data-aos="fade-up">Rogaland Marine</h1>
        <div className="button-wrapper" data-aos="fade-up" data-aos-delay="300">
          <button onClick={() => (window.location.href = "/contact")}>
            Contact
          </button>
          <button onClick={() => (window.location.href = "/about")}>
            About
          </button>
        </div>
      </div>
    </BackgroundVideoSection>
  );
};

export default BackgroundSection;
