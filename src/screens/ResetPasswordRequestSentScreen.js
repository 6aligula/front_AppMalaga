// ResetPasswordRequestSentScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const ResetPasswordRequestSentScreen = () => {
    return (
        <FormContainer>
            <h1>Solicitud de Restablecimiento de Contraseña Enviada</h1>
            <p>Revise su correo electrónico para las instrucciones de restablecimiento de contraseña.</p>
            <Row className='py-3'>
                <Col>
                    <Link to='/login'>Volver a Iniciar Sesión</Link>
                </Col>
            </Row>
        </FormContainer>
    );
}

export default ResetPasswordRequestSentScreen;