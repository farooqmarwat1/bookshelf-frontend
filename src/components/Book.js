import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import book1 from '../images/book1.jpeg';

const Book = ({ book }) => {
    return(
        <>
            <Card className='my-3 p-3 rounded' >
                <Link to={`/book/${book._id}`} >
                    <Card.Img src={book1} variant='top' />
                </Link>

                <Card.Body>
                    <Link to={`/book/${book._id}`}>
                        <Card.Title as='div' >
                            <strong>Title: {book.title}</strong>
                        </Card.Title>
                    </Link>

                    <Card.Text as='div' >Author: {book.author}</Card.Text>

                    <Card.Text as='div' >Rating</Card.Text>

                </Card.Body>
            </Card> 
        </>
    )
};

export default Book;