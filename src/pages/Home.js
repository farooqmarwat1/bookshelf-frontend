import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import Book from '../components/Book';
import { useDispatch, useSelector } from 'react-redux';
import { booksPublic } from '../actions/bookActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Home = () => {
  const dispatch = useDispatch();
  const publicBooks = useSelector(state => state.publicBooks);
  const { loading, error, books } = publicBooks;

  useEffect(() => {
    dispatch(booksPublic());
  }, [dispatch]);
    
  return (
    <>
      <h1>Latest Books</h1>
      { loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <Row> 
        {
            books.map(book => {
                return(
                  <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                      <Book book={book} />
                  </Col>
                ) 
            })
        }
      </Row> 
      }
      
      
    </>
  )
}

export default Home
