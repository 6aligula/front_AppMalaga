import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { login } from '../actions/userActions';
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {
    const [dni, setDni] = useState('');
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
        dispatch(login(dni, password))
        //console.log('submitted')
    }

    return (
        <>

            <FormContainer >
                <h1>Introduzca sus datos</h1>

                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}

                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='dni'>
                        <Form.Label>Usuario(DNI)</Form.Label>
                        <Form.Control
                            type='dni'
                            placeholder='Introduzca dni'
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
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
                        Has olvidado la contraseña? <Link to={redirect ? `/ForgotPasswordScreen?redirect=${redirect}` : '/ForgotPasswordScreen'}> Recuperar contraseña
                        </Link>
                    </Col>
                </Row>
            </FormContainer>
        </>
    )
}

export default LoginScreen