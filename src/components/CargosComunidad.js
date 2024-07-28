import React, { useState } from 'react';
import { Card, Col, ListGroup, Form, Row } from 'react-bootstrap';

const CargosComunidad = ({ perfil, isAdmin, onUpdate }) => {
    // Estados para cada campo relacionado con los cargos en la comunidad
    const [name, setName] = useState(perfil.nombre || "");
    const [username, setUsername] = useState(perfil.cif) || "";
    const [cargo, setCargo] = useState(perfil.cargo || "");
    const [telefono_contacto, setTelefonoContacto] = useState(perfil.telefono_contacto || "");
    const [email_contacto, setEmailContacto] = useState(perfil.email_contacto || "");
    const [telefono_movil, setMovil] = useState(perfil.telefono_movil || "");

    const handleChange = (setter, field) => e => {
        const value = e.target.value;
        setter(value); // Actualiza el estado local
        // Construye un nuevo objeto perfil para actualizar, asegurándote de mantener otros datos en perfil
        const updatedPerfil = { ...perfil, [field]: value };
        onUpdate(updatedPerfil); // Actualiza el estado en el componente padre
    }

    return (
        <Card className="mb-3">
            <Card.Header>Cargos Comunidad</Card.Header>
            <Card.Body>
                <Row>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>CIF:</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isAdmin ? (
                                    <Form.Control
                                        type="text"
                                        value={username}
                                        onChange={handleChange(setUsername, 'username')}
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
                                        value={name}
                                        onChange={handleChange(setName, 'name')}
                                    />
                                ) : (
                                    name || 'vacio'

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
                                        value={cargo}
                                        onChange={handleChange(setCargo, 'cargo')}
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
                                        value={telefono_contacto}
                                        onChange={handleChange(setTelefonoContacto, 'telefono_contacto')}
                                    />
                                ) : (
                                    telefono_contacto || 'vacio'
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
                                        value={email_contacto}
                                        onChange={handleChange(setEmailContacto, 'email_contacto')}
                                    />
                                ) : (
                                    email_contacto || 'vacio'
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
                                        value={telefono_movil}
                                        onChange={handleChange(setMovil, 'telefono_movil')}
                                    />
                                ) : (
                                    telefono_movil || 'vacio'
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
