import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS
import "./Nettbutikk.css"; // Import custom CSS for Nettbutikk component
import products from "../Assets/products";

const Nettbutikk = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Card className="h-100 product-card">
              <img
                src={require(`../Assets/${product.imgSrc}`)}
                className="card-img-top"
                alt={product.altText}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nettbutikk;
