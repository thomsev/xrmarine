import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import styled from "styled-components";

const Contents = styled.div`
  position: relative;
  padding-top: 7rem;
  max-width: 70%;
  margin: auto;

  h2 {
    color: #007bff;
    text-align: center;
  }

  iframe {
    display: block;
    width: 100%;
    min-height: 100vh;
    margin-top: 7rem;
    border: none;
  }

  @media (max-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 1rem;
    background-attachment: scroll;
    min-height: 100vh;

    iframe {
      min-height: 500px;
      margin-bottom: 1rem;
    }
  }
`;

const FinnListings = () => {
  return (
    <Contents>
      <iframe
        src="https://www.finn.no/pw/search/boat-sale?orgId=1405617396"
        title="Finn Listings"
      />
    </Contents>
  );
};

export default FinnListings;
