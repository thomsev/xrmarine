import React from "react";
import { BackgroundImageSection } from "./HomepageStyles";

const BackgroundSection = () => {
  return (
    <BackgroundImageSection>
      <div className="text-wrapper">
        <h1 data-aos="fade-up">Rogaland Marine</h1>
        {/* <h3 data-aos="fade-up" data-aos-delay="300">
          Der kvalitet møter havet. Fra produksjon til perfeksjon
        </h3> */}
      </div>
    </BackgroundImageSection>
  );
};

export default BackgroundSection;
