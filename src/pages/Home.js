import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap'
import Book from '../components/Book';

const Home = () => {

  const [ publicBooks, setPublicBooks  ] = useState([]);

  useEffect(() => {
    const fetchPublicBooks = async () => {
      const { data } = await axios.get('http://localhost:5000/');
      setPublicBooks(data);
    }
    fetchPublicBooks();
  }, []); 
  
  return (
    <>
      <h1>Latest Books</h1>
      <Row>
        {
            publicBooks && publicBooks.map(book => {
                return(
                  <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                      <Book book={book} />
                  </Col>
                ) 
            })
        }
      </Row>
      
    </>
  )
}

export default Home
