import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { login } from '../actions/userActions';
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {

        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
        //console.log('submitted')
    }

    return (
        <FormContainer >
            <h1>Iniciar Sesión</h1>

            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Dirección de correo electrónico</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Introduzca email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password' className='py-3'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Introduzca contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'> Iniciar Sesión</Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Cliente nuevo? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}> Registrarse
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen