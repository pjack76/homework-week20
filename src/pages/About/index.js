import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import Container from "../../components/Container";
import { CustomPlaceholder } from 'react-placeholder-image';
import "./about.css";


function About() {
  
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Card>
        <Card.Header className="card-header"><h3><b>About Me</b></h3></Card.Header>
        <Card.Body>
          <Row>
            <Col id="card-image">
              <CustomPlaceholder width={200} height={200} />
            </Col>
            <Col id="card-text">
              <Card.Text>
                Hello! Welcome to my Portfolio pages. My name is Jack Long. I'm fullstack bootcamp student at GW. It has been a long and arduous journey.
                While I learned quite a bit about fullstack development, I am by no means an expert in this field.  I will need more training and coaching to fully develop a developer.
                Please feel free to browse around through my work.
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
