import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Bookly</Navbar.Brand>  
        </LinkContainer>    
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to='/register'>
              <Nav.Link><i className='fas fa-user'></i>Sign Up</Nav.Link>  
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>  
            </LinkContainer>
          </Nav>     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;