import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image, Row, Col } from 'react-bootstrap';  // Import Row and Col
import Loader from './Loader';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>Error fetching top products</Message>
  ) : (
    <Carousel pause='hover' className='product-carousel' >
      {products.map((product) => (
        <Carousel.Item key={product._id} className='carousel-item'>
          <Link to={`/product/${product._id}`} className='carousel-link text-center'>
            <Row className='justify-content-center'> {/* Center the content horizontally */}
              <Col xs={12} md={6} lg={4}> {/* Adjust the column width based on your design */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fluid
                  className='carousel-image'
                  style={{ height: '300px' }} 
                />
                <Carousel.Caption className='carousel-caption'>
                  <h2 className='carousel-title'>
                    {product.name} (${product.price})
                  </h2>
                </Carousel.Caption>
              </Col>
            </Row>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
