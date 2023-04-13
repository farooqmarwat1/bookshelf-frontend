import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { loginUser } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  function logoutHandler(){
    dispatch(loginUser());
  }

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
            {
              userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : <LinkContainer to='/login'>
                    <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>  
                  </LinkContainer>
            }
          </Nav>      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;