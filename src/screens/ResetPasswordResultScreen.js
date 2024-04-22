// ResetPasswordResultScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';


const ResetPasswordResultScreen = () => {

    return (
        <FormContainer>
            <h1>Contraseña Restablecida</h1>
            <p>La contraseña se ha restablecido con éxito.</p>
            <Row className='py-3'>
                <Col>
                    <Link to='/login'>Iniciar Sesión</Link>
                </Col>
            </Row>
        </FormContainer>
    );
}
export default ResetPasswordResultScreen;