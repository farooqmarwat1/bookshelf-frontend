import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='pb-5'>
      <Container fluid>
        <Row>
            <Col className='text-center' >     {/* Padding on top and bottom */}
                <hr />
                <strong>Copyright &copy;2023 Bookly</strong>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
