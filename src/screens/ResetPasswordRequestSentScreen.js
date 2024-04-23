// ResetPasswordRequestSentScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { USER_FORGOT_PASSWORD_RESET } from '../constants/userConstants';

const ResetPasswordRequestSentScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBackToLogin = () => {
        dispatch({ type: USER_FORGOT_PASSWORD_RESET });
        navigate('/login');
    }

    return (
        <FormContainer>
            <h1>Solicitud de Restablecimiento de Contraseña Enviada</h1>
            <p>Revise su correo electrónico para las instrucciones de restablecimiento de contraseña.</p>
            <Row className='py-3'>
                <Col>
                    <Button variant="link" onClick={handleBackToLogin} style={{ paddingLeft: 0 }}>
                        Volver a Iniciar Sesión
                    </Button>
                </Col>
            </Row>
        </FormContainer>
    );
}

export default ResetPasswordRequestSentScreen;