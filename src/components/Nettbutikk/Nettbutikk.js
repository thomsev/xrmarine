import React from "react";
import { Container, CardSection, ProductCard, Col } from "./NettButikkStyles";
import products from "../Assets/products";

const Nettbutikk = () => {
  return (
    <Container style={{ maxWidth: "1500px", margin: "10rem auto 0 auto" }}>
      <CardSection>
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard className="h-100">
              <img
                src={require(`../Assets/${product.imgSrc}`)}
                className="card-img-top"
                alt={product.altText}
              />
              <ProductCard.Body>
                <ProductCard.Title>{product.title}</ProductCard.Title>
                <ProductCard.Text>{product.price}</ProductCard.Text>
              </ProductCard.Body>
            </ProductCard>
          </Col>
        ))}
      </CardSection>
    </Container>
  );
};

export default Nettbutikk;
