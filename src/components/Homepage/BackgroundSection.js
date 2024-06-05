import React from "react";
import { BackgroundVideoSection } from "././BackgroundSectionStyles";
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
        {/* <h3 data-aos="fade-up" data-aos-delay="300">
          Der kvalitet møter havet. Fra produksjon til perfeksjon
        </h3> */}
      </div>
    </BackgroundVideoSection>
  );
};

export default BackgroundSection;
