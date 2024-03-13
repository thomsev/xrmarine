import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Finn.css"; // Import CSS for Finn component

const FinnListings = () => {
  return (
    <div className="contents">
      <iframe
        src="https://www.finn.no/pw/search/boat-sale?orgId=1405617396"
        title="Finn Listings"
      />
    </div>
  );
};

export default FinnListings;
