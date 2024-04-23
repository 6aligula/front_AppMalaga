import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { sendContactForm } from '../actions/contactActions';

const initialFormData = {
    name: '',
    email: '',
    message: ''
};

const ContactScreen = () => {

    const [formData, setFormData] = useState(initialFormData);

    const dispatch = useDispatch();

    const contactState = useSelector((state) => state.contact);
    const { loading, error, success } = contactState;
    const { name, email, message } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        // Aquí manejarías el envío del formulario (ej. enviar a un servidor)
        console.log('Datos enviados:', formData);
        dispatch(sendContactForm({ name, email, message }));
    };
    // Usar useEffect para resetear el formulario cuando el mensaje se haya enviado exitosamente
    useEffect(() => {
        if (success) {
            setFormData(initialFormData);  // Esto reseteará el formulario
        }
    }, [success]);  // Dependencia del efecto es 'success'

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h1 className="text-center">Contacto</h1>
                    {loading && <Loader />}
                    {error && <Message variant='danger'>{error}</Message>}
                    {success && <Message variant='success'>Tu mensaje ha sido enviado con éxito</Message>}
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Introduce tu nombre"
                                name="name"
                                value={name}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Introduce tu email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Escribe tu mensaje aquí"
                                name="message"
                                value={message}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactScreen;
