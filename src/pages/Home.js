import React from 'react'
import books from '../Books';
import { Row, Col } from 'react-bootstrap'
import Book from '../components/Book';

const Home = () => {
  return (
    <>
      <h1>Latest Books</h1>
      <Row>
        {
            books.map(book => {
                return(
                <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                    {/* <h3>{product.name}</h3> */}
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