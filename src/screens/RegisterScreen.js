import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userRegister = useSelector(state => state.userRegister);
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {

        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])


    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden')
        } else {
            dispatch(register(name, email, password))

        }
        //console.log('submitted')
    }

    return (
        <FormContainer >
            <h1>Registro</h1>

            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}



            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Introduzca nombre'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Dirección de correo electrónico</Form.Label>
                    <Form.Control
                        required
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
                        required
                        type='password'
                        placeholder='Introduzca contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword' className='py-3'>
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirmar contraseña'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'> Registrarse</Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    ¿Ya tienes cuenta? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Iniciar Sesión
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen