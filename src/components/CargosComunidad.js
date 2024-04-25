import React, { useState } from 'react';
import { Card, Col, ListGroup, Form, Row } from 'react-bootstrap';

const CargosComunidad = ({ userData, perfil, isAdmin }) => {
    // Estados para cada campo relacionado con los cargos en la comunidad
    const [name, setName] = useState(userData.name);
    const [username, setUsername] = useState(userData.username);
    const [cargo, setCargo] = useState(perfil.cargo);
    const [telefonoContacto, setTelefonoContacto] = useState(perfil.telefono_contacto);
    const [emailContacto, setEmailContacto] = useState(perfil.email_contacto);
    const [movil, setMovil] = useState(perfil.telefono_movil);

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    return (
        <Card className="mb-3">
            <Card.Header>Cargos Comunidad</Card.Header>
            <Card.Body>
                <Row>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>DNI:</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isAdmin ? (
                                    <Form.Control
                                        type="text"
                                        value={username || 'vacio'}
                                        onChange={handleChange(setUsername)}
                                    />
                                ) : (
                                    username || 'vacio'
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Nombre:</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isAdmin ? (
                                    <Form.Control
                                        type="text"
                                        value={name || 'vacio'}
                                        onChange={handleChange(setName)}
                                    />
                                ) : (
                                    userData.name || 'vacio'

                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Cargo:</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isAdmin ? (
                                    <Form.Control
                                        type="text"
                                        value={cargo || 'vacio'}
                                        onChange={handleChange(setCargo)}
                                    />
                                ) : (
                                    cargo || 'vacio'
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Telefono:</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isAdmin ? (
                                    <Form.Control
                                        type="text"
                                        value={telefonoContacto || 'vacio'}
                                        onChange={handleChange(setTelefonoContacto)}
                                    />
                                ) : (
                                    telefonoContacto || 'vacio'
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Email:</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isAdmin ? (
                                    <Form.Control
                                        type="email"
                                        value={emailContacto || 'vacio'}
                                        onChange={handleChange(setEmailContacto)}
                                    />
                                ) : (
                                    emailContacto || 'vacio'
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Movil:</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isAdmin ? (
                                    <Form.Control
                                        type="text"
                                        value={movil || 'vacio'}
                                        onChange={handleChange(setMovil)}
                                    />
                                ) : (
                                    movil || 'vacio'
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CargosComunidad;
