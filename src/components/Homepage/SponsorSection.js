import React from "react";
import sponsorsData from "../Assets/sponsorData";
import {
  SponsorSection,
  SlideTrack,
  Slide,
  SponsorLogo,
} from "./SponsorsStyles";

// Generator function to create an infinite loop of logos
function* infiniteLoop(arr) {
  let i = 0;
  while (true) {
    yield arr[i % arr.length];
    i++;
  }
}

const Sponsors = () => {
  const infiniteSponsors = infiniteLoop(sponsorsData);

  // Create an array of a certain length to simulate infinite scrolling
  const displayedSponsors = Array.from(
    { length: 56 },
    () => infiniteSponsors.next().value
  ); // Adjust length as needed

  return (
    <SponsorSection>
      <SlideTrack>
        {displayedSponsors.map((sponsor, index) => (
          <Slide key={index}>
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <SponsorLogo
                src={require(`../Assets/${sponsor.imgSrc}`)}
                alt={sponsor.altText}
              />
            </a>
          </Slide>
        ))}
      </SlideTrack>
    </SponsorSection>
  );
};

export default Sponsors;
