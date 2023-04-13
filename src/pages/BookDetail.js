import React, { useEffect } from 'react'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating';
import book1 from '../images/book1.png';
import { useDispatch, useSelector } from 'react-redux';
import { detailBook } from '../actions/bookActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const BookDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const bookDetail = useSelector(state => state.bookDetail);
  const { loading, error, book } = bookDetail;

  useEffect(() => {
    dispatch(detailBook(id));
  }, [dispatch, id]); 

  return (
    <>
    <Link classNamw='btn btn-light my-3' to='/' >Go Back</Link>
    { loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <Row>
        <Col md={6}>
          <Image style={{height:'450px',width: '400px'}} src={book1} alt={book.title} fluid />
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h1>{book.title}</h1>
              </ListGroup.Item>
              <ListGroup.Item>Author: {book.author}</ListGroup.Item>
              <ListGroup.Item>Access: {book.access}</ListGroup.Item>
              <ListGroup.Item>ISBN: {book.ISBN}</ListGroup.Item>
              <ListGroup.Item>
                <Rating value={book.rating} />
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item>Description: {book.description}</ListGroup.Item>
          </ListGroup>
        </Col>
     </Row>
    }
    </>
  )
}

export default BookDetail