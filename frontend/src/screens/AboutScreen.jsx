import React from "react";
import { Container, Card, CardGroup, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import NewHeaders from "../components/NewHeaders";
import "../assets/CSS/index.css";

const AboutScreen = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <NewHeaders
        backgroundImage="images/heroBg/3.jpg"
        title="Empowering Your Digital Lifestyle"
        subtitle="Discover the Story Behind Swift, Your Trusted Destination for Cutting-Edge Electronics and Innovation"
        buttonText="Explore"
      />
      <CardGroup className="d-flex">
        <Card>
          <Card.Img variant="top" src="images/heroBg/5.jpg" />
          <Card.Body>
            <Card.Title>Smartwatch Pro X</Card.Title>
            <Card.Text>
              Elevate your style with the Smartwatch Pro X. This sleek and
              sophisticated smartwatch combines fashion with functionality. Stay
              connected with notifications, track your fitness goals, and enjoy
              the convenience of a built-in heart rate monitor. The Smartwatch
              Pro X is more than just a timepiece; it's a statement of modern
              living.
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src="images/heroBg/2.jpg" />
          <Card.Body>
            <Card.Title>Wireless Headphones</Card.Title>
            <Card.Text>
              Immerse yourself in a world of superior sound quality with our
              Wireless Noise-Canceling Headphones. Enjoy crystal-clear audio,
              deep bass, and unparalleled comfort. Whether you're on a commute,
              at the gym, or simply relaxing at home, these headphones deliver
              an immersive audio experience. Elevate your listening with style
              and innovation.
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src="images/heroBg/4.jpg" />
          <Card.Body>
            <Card.Title>Ultimate Mobile Accessory Bundle</Card.Title>
            <Card.Text>
              Enhance your mobile experience with our Ultimate Mobile Accessory
              Bundle. This comprehensive set includes high-speed chargers,
              durable phone cases, and versatile stands. Stay connected on the
              go with the latest accessories designed for convenience and style.
              Elevate your mobile lifestyle with the Ultimate Mobile Accessory
              Bundle.
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};

export default AboutScreen;
