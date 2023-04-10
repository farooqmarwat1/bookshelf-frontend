import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
            <Col className='text-center py-3' >     {/* Padding on top and bottom */}
                Copyright &copy; Bookly 
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
