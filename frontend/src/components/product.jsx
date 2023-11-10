import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Rating from './Rating';
import '../assets/CSS/index.css';

const Product = ({ product }) => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fadeIn}>
      <Card className='mb-4 shadow-sm' style={{ height: '100%', marginBottom: '20px' }}>
        <Link to={`/product/${product._id}`}>
          {/* Center the image within the Card */}
          <Card.Img
            src={product.image}
            alt={product.name}
            variant='top'
            style={{ height: '200px', objectFit: 'cover', display: 'block', margin: 'auto' }}
          />
        </Link>

        <Card.Body className="d-flex flex-column">
          <Link to={`/product/${product._id}`} className="text-decoration-none mb-auto">
            <Card.Title className='product-title' as="h5">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as='div'>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </Card.Text>

          <Card.Text as="h3">${product.price}</Card.Text>

          <Link to={`/product/${product._id}`} className="mt-auto text-decoration-none">
            <Button variant="primary">View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </animated.div>
  );
};

export default Product;
