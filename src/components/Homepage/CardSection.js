import React from "react";
import { Link } from "react-router-dom";
import cardData from "../Assets/cardData";
import { CardSection } from "./HomepageStyles";

const Cards = () => {
  return (
    <CardSection className="text-center">
      <div className="container py-5">
        <div className="row">
          {cardData.map((card, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${100 * index}`}
            >
              <Link
                to={`/path-for-${card.title.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card" style={{ cursor: "pointer" }}>
                  <img
                    src={require(`../Assets/${card.imgSrc}`)}
                    className="card-img-top"
                    alt={card.altText}
                  />
                  <div className="card-body">
                    <h2 className="card-title">{card.title}</h2>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </CardSection>
  );
};

export default Cards;
