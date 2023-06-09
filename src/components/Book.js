import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import book1 from '../images/book1.png';
import Rating from '../components/Rating';

const Book = ({ book }) => {
    return(
        <>
            <Card className='my-3 p-3 rounded card' >
                <Link to={`/books/${book._id}`} >
                    <Card.Img src={book1} style={{width:'100%',height: '250px'}} variant='top' />
                </Link>
                <Card.Body>
                    <Link to={`/books/${book._id}`}>
                        <Card.Title as='div' >
                            <strong>Title: {book.title}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as='div' >Author: {book.author}</Card.Text>
                    <Card.Text as='div' >Access: {book.access}</Card.Text>
                    <Card.Text as='div' >
                    <Rating value={book.rating} />
                    </Card.Text>
                </Card.Body>

            </Card> 
        </>
    )
};






export default Book;