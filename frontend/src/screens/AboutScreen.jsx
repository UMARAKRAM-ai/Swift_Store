import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const AboutScreen = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            {/* Background Image */}
            <div
              style={{
                backgroundImage: 'url("/images/Canon-Camera.jpg")', // Replace with the path to your image
                backgroundSize: 'cover',
                height: '200px', // Adjust the height as needed
              }}
            >
              <animated.div style={fadeIn}>
                <Card.Header className="bg-dark text-light text-center">
                  <h2>About Our E-Commerce Store</h2>
                </Card.Header>
              </animated.div>
            </div>

            <Card.Body>
              {/* Stylish Text */}
              <animated.div style={fadeIn}>
                <Card.Text className="text-center">
                  Welcome to Swift, your go-to destination for all your shopping
                  needs! We pride ourselves on providing high-quality products
                  and exceptional customer service.
                </Card.Text>
              </animated.div>

              {/* Additional Content */}
              {/* ... (same as the previous example) ... */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutScreen;
