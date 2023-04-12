import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import book1 from '../images/book1.png';
import Rating from '../components/Rating';

const Book = ({ book }) => {
    return(
        <>
            <Card className='my-3 p-3 rounded card' >
                <Link to={`/book/${book._id}`} >
                    <Card.Img src={book1} style={{width:'100%',height: '250px'}} variant='top' />
                </Link>
                //card body
                <Card.Body>
                    <Link to={`/book/${book._id}`}>
                        <Card.Title as='div' >
                            <strong>Title: {book.title}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as='div' ><h5>Author:</h5> {book.author}</Card.Text>
                    <Card.Text as='div' ><h6>Access:</h6> {book.access}</Card.Text>
                    <Card.Text as='div' >
                    <Rating value={book.rating} />
                    </Card.Text>
                </Card.Body>

            </Card> 
        </>
    )
};






export default Book;