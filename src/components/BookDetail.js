import React, { useState, useEffect } from 'react'
import { Row, Col, ListGroup, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating';
import axios from 'axios';
import book1 from '../images/book1.png';

const Product = () => {
  const { id } = useParams();
  const [ book, setBook ] = useState({});

  useEffect(() => {
    const fetchPublicBook = async () => {
      const { data } = await axios.get(`/api/books/${id}`);
      setBook(data);
    }
    fetchPublicBook();
  }, [id]); 

  return (
    <>
     <Link classNamw='btn btn-light my-3' to='/' >Go Back</Link>
     <Row>
        <Col md={6}>
          <Image style={{height:'450px',width: '400px'}} src={book1} alt={book.title} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Title: {book.title}</h2>
            </ListGroup.Item>
            <ListGroup.Item>Author: {book.author}</ListGroup.Item>
            <ListGroup.Item>ISBN: {book.ISBN}</ListGroup.Item>
            <ListGroup.Item>
              <Rating value={book.rating} />
            </ListGroup.Item>
            <ListGroup.Item>Description: {book.description}</ListGroup.Item>
          </ListGroup>
        </Col>
     </Row>
    </>
  )
}

export default Product