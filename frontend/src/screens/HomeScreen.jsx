import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/product';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import '../assets/CSS/index.css'
import Message from '../components/Message';
import { Link, useParams } from 'react-router-dom';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import Footer from '../components/Footer';
import NewHeaders from '../components/NewHeaders';

const HomeScreen = () => {

  const { pageNumber, keyword } = useParams();

  const { data, isLoading, isError } = useGetProductsQuery({ keyword, pageNumber });
  console.log(data);

  return (
    <>
    <div>
    <NewHeaders/>
    </div>
    { !keyword ? <ProductCarousel/> : (<Link to='/' className='btn btn-light mb-4'>Go Back</Link>)  }
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant='danger'>{isError.data?.message || isError.error}</Message>
      ) : (
        <>
        <Meta/>
          <h1 style={{marginTop: '40px'}} >Latest Products</h1>
          <Row className="mb-4" style={{marginTop: '40px'}}  >
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
                <Product product={product} ></Product>
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword= {keyword ? keyword: ''} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
