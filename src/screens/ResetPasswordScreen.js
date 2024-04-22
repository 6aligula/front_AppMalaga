// ResetPasswordScreen.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { resetPassword } from '../actions/userActions';

const ResetPasswordScreen = () => {
    const navigate = useNavigate(); // Agrega este hook para la navegación
    const { uid, token } = useParams();  // Obtiene el token de la URL
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userResetPassword = useSelector(state => state.userResetPassword);
    const { loading, error, success } = userResetPassword;

    useEffect(() => {
        if (success) {
            // Navega a la pantalla de solicitud enviada cuando la operación es exitosa
            navigate('/ResetPasswordResultScreen');
        }
    }, [success, navigate]); // Dependencias del efecto

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden');
        } else {
            dispatch(resetPassword(uid, token, password));
        }
    }



    return (
        <FormContainer>
            <h1>Restablecer Contraseña</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            {success && <Message variant='success'>Contraseña restablecida con éxito</Message>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='password'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Ingrese su nueva contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirme su nueva contraseña'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='my-3'>Restablecer Contraseña</Button>
            </Form>
        </FormContainer>
    );
}
export default ResetPasswordScreen;