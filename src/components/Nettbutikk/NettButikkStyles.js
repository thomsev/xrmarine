import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const ProductCard = styled(Card)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  z-index: 2;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card-img-top {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .card-body {
    padding: 1rem;
  }

  .card-title {
    color: #007bff;
    font-size: 1.25rem;
    margin-bottom: 0.5em;
  }

  .card-text {
    color: #333;
    line-height: 1.6;
    margin-bottom: 1em;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const Col = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 300px;
`;

export const Container = styled.div`
  padding-top: 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: center; /* Center the items in the row */
`;
