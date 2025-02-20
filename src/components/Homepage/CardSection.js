import React from "react";
import { Link } from "react-router-dom";
import cardData from "../Assets/cardData";
import { CardSection } from "./HomepageStyles";

const Cards = () => {
  return (
    <CardSection>
      <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${100 * index}`}
            >
              <Link
                to={`/path-for-${card.title.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <div className="glass-card">
                  <img
                    src={require(`../Assets/${card.imgSrc}`)}
                    alt={card.altText}
                    className="card-image"
                  />
                  <div className="glass-body">
                    <h2 className="glass-title">{card.title}</h2>
                    <p className="glass-text">{card.text}</p>
                    <button className="glass-btn">Les Mer</button>
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
