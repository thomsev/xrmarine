import React from "react";
import styled from "styled-components";
import aboutText from "./aboutData";

const AboutWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 4rem;
  width: 100%;
`;

const AboutSection = styled.div`
  background: rgba(255, 255, 255, 0.9);
  margin: 1rem auto;
  margin-top: 7rem;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #007bff;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.h2`
  color: #007bff;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  color: #333;
  margin-bottom: 1em;
`;

const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2em 0;
`;

const ValueItem = styled.li`
  background: #f8f9fa;
  margin-bottom: 0.5em;
  padding: 0.5em;
  border-left: 4px solid #007bff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #e9ecef;
    border-left-color: #0056b3;
    transform: translateX(10px);
  }
`;

function About() {
  return (
    <AboutWrapper className="about-page-wrapper">
      <AboutSection className="about-section">
        <Title>{aboutText.title}</Title>
        {aboutText.paragraphs.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
        <Subtitle>{aboutText.valuesTitle}</Subtitle>
        <ValuesList className="values-list">
          {aboutText.values.map((value, index) => (
            <ValueItem key={index}>{value}</ValueItem>
          ))}
        </ValuesList>
        <Paragraph>{aboutText.closing}</Paragraph>
      </AboutSection>
    </AboutWrapper>
  );
}

export default About;
