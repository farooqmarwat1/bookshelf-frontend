import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ book }) => {
  return (
    <Card className='my-3 p-3 rounded' flid>
      <Link to={`/book/${book._id}`} >
        <Card.Img src={book.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/book/${book._id}`}>
            <Card.Title as='div' >
                <strong>{book.name}</strong>
            </Card.Title>
        </Link>

        <Card.Text as='div' >
            rating
        </Card.Text>
        <Card.Text>${ book.price }</Card.Text>
      </Card.Body>
    </Card> 
  )
}

export default Product