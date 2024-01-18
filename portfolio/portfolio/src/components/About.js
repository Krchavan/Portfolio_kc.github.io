// About.js

import React from 'react';

import { Container, Row, Col } from "react-bootstrap";
import laptopImg from "../components/about.png";
import AboutCard from './aboutp/AboutCard';
import Github from './aboutp/Github';
import Techstack from './aboutp/Techstack';
import Toolstack from './aboutp/Toolstack';
function About() {
  return (
    <Container fluid className="about-section">
      <div className="about-container">

        
        {/* Add more details about yourself as needed */}
      </div>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Know Who <strong className="purple">I'M</strong>
          </h1>
        <AboutCard />

        </Col>
        <Col
          md={5}
          style={{ paddingTop: "120px", paddingBottom: "50px" }}
          className="about-img"
        >
          <img src={laptopImg} alt="about" className="img-fluid" />
        </Col>
      </Row>
      <Github />
      <Techstack />
      <Toolstack />
    </Container>
   

  );
}

export default About;
