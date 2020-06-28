import React from "react";
import {Card, Form, Button} from "react-bootstrap"
import Container from "../../components/Container";
import "./contact.css";

function Contact() {
  
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Card className="entire-card">
        <Card.Header className="card-header">
          <h3><b>Contact</b></h3>
        </Card.Header>
      </Card>
      <Form className="entire-form">
        <Form.Label className="form-label" id="first-input"><h5><b>Name</b></h5></Form.Label>
        <Form.Control as="input" placeholder="enter your name here" />
        <Form.Label className="form-label"><h5><b>Email address</b></h5></Form.Label>
        <Form.Control type="email" placeholder="enter your email here" />
        <Form.Label className="form-label"><h5><b>Comment</b></h5></Form.Label>
        <Form.Control as="textarea" rows="5" />
        <Button className="submit-btn" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
