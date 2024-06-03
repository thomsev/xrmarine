import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BackgroundSection from "./BackgroundSection";
import CardSection from "./CardSection";
import SponsorSection from "./SponsorSection";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <BackgroundSection />
      <CardSection />
      <SponsorSection />
    </div>
  );
};

export default Homepage;
