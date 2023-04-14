import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { loginUser } from '../actions/userActions';
import FormContainer from '../components/FormContainer';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { loading, error } = userLogin;


    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch login
        dispatch(loginUser(email, password));
        navigate('/');
    }

    return(
        <FormContainer>
            <Card className='mt-4 '>
            <h1 className='my-5 text-center'><i className='fas fa-user'></i>Login</h1>
            { error && <Message variant='danger'>{error}</Message> }
            { loading && <Loader /> }
            <Form onSubmit={submitHandler} className='mx-5'>
                
                <Form.Group controlId='email' className='my-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='password' className='my-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <div className='text-center'>
                    <Button type='submit' variant='dark' >Sign In</Button>
                </div>

                <Row className='my-3 text-center'>
                    <Col>
                        Don't have account? <Link to='/register'>Register</Link>
                    </Col>
                </Row>

            </Form>
            </Card>
        </FormContainer>
    )
}

export default Login