import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from './projectp/ProjectCards';
import erp from "../components/projectp/erp.png";
import oranic from "../components/projectp/oranic.png"
import textutil from "../components/projectp/textutil.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading" style={{color:"white"}}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={erp}
              isBlog={false}
              title="Student Profile Module (ERP System) - MERN Stack"
              description="The project deals with management of student profiles in
              college,department wise. It is based on the latest technology MERN
              stack. It is part of major project i.e ERP system."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={oranic}
              isBlog={false}
              title="Organic Food Store Management"
              description="This project was developed using the technologies like html, css and
              javascript. It is an online website where Farmers store product
              detailts Consumer get all functionalities needed by him"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={textutil}
              isBlog={false}
              title="TextUtils (Mini Project) - MERN Stack"
              description="it is mini project developed while learning the mern stack technology.
              It provides a options to manipulate the text or find something in text selected by
              user."
            />
          </Col>
        </Row>
      </Container>
    
    </Container>

  );
}

export default Projects;
