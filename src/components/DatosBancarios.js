import React, { useState } from 'react';
import { Col, ListGroup, Form, Row, Card } from 'react-bootstrap';

const DatosBancarios = ({ perfil, isAdmin }) => {
    // Estados para cada campo bancario
    const [nombreEntidad, setNombreEntidad] = useState(perfil.nombre_entidad);
    const [numeroBanco, setNumeroBanco] = useState(perfil.numero_banco);
    const [numeroSucursal, setNumeroSucursal] = useState(perfil.numero_sucursal);
    const [digitoControl, setDigitoControl] = useState(perfil.digito_control);
    const [numeroCuenta, setNumeroCuenta] = useState(perfil.numero_cuenta);

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    return (
        <Card className="mb-3">
            <Card.Header>Datos Bancarios</Card.Header>
            <Card.Body>
                <Row>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Nombre de la entidad:</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isAdmin ? (
                                    <Form.Control
                                        type="text"
                                        value={nombreEntidad || 'No proporcionado'}
                                        onChange={handleChange(setNombreEntidad)}
                                    />
                                ) : (
                                    nombreEntidad || 'No proporcionado'
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={2}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Número de banco:</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isAdmin ? (
                                    <Form.Control
                                        type="text"
                                        value={numeroBanco || 'No proporcionado'}
                                        onChange={handleChange(setNumeroBanco)}
                                    />
                                ) : (
                                    numeroBanco || 'No proporcionado'
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={2}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Número de sucursal:</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isAdmin ? (
                                    <Form.Control
                                        type="text"
                                        value={numeroSucursal || 'No proporcionado'}
                                        onChange={handleChange(setNumeroSucursal)}
                                    />
                                ) : (
                                    numeroSucursal || 'No proporcionado'
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={2}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Dígito de control:</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isAdmin ? (
                                    <Form.Control
                                        type="text"
                                        value={digitoControl || 'No proporcionado'}
                                        onChange={handleChange(setDigitoControl)}
                                    />
                                ) : (
                                    digitoControl || 'No proporcionado'
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Número de cuenta:</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isAdmin ? (
                                    <Form.Control
                                        type="text"
                                        value={numeroCuenta || 'No proporcionado'}
                                        onChange={handleChange(setNumeroCuenta)}
                                    />
                                ) : (
                                    numeroCuenta || 'No proporcionado'
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default DatosBancarios;
