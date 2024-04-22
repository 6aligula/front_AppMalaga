// ForgotPasswordScreen.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { forgotPassword } from '../actions/userActions';

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);

    const navigate = useNavigate(); // Agrega este hook para la navegación
    const dispatch = useDispatch();

    const userForgotPassword = useSelector(state => state.userForgotPassword);
    const { loading, error, success } = userForgotPassword;

    useEffect(() => {
        if (success) {
            // Navega a la pantalla de solicitud enviada cuando la operación es exitosa
            navigate('/ResetPasswordRequestSentScreen');
        }
    }, [success, navigate]); // Dependencias del efecto

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email));
        setMessage('Revise su correo electrónico para las instrucciones de restablecimiento de contraseña.');
        console.log("enviado");
    }

    return (
        <FormContainer>
            <h1>Restablecer Contraseña</h1>
            {message && <Message variant='success'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Ingrese su correo electrónico'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='my-3'>Restablecer Contraseña</Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    Recordó su contraseña? <Link to='/login'>Iniciar Sesión</Link>
                </Col>
            </Row>
        </FormContainer>
    );
}
export default ForgotPasswordScreen;