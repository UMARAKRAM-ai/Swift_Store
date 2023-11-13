import React from 'react'
import '../assets/CSS/Contact.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactScreen = () => {
  return (
      <div>
      <Container style={{ maxWidth: '600px' }}>
        <Row className="justify-content-center">
          <Col>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
              <h2 className="text-center">Contact Us</h2>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactScreen
