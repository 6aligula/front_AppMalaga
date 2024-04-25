import React, { useState } from 'react';
import { Col, ListGroup, Form, Row, Card } from 'react-bootstrap';

const DatosBancarios = ({ perfil, isAdmin, onUpdate }) => {
    // Estados para cada campo bancario
    const [nombreEntidad, setNombreEntidad] = useState(perfil.nombre_entidad || "");
    const [numeroBanco, setNumeroBanco] = useState(perfil.numero_banco || "");
    const [numeroSucursal, setNumeroSucursal] = useState(perfil.numero_sucursal || "");
    const [digitoControl, setDigitoControl] = useState(perfil.digito_control || "");
    const [numeroCuenta, setNumeroCuenta] = useState(perfil.numero_cuenta || "");

    const handleChange = (setter, field) => e => {
        const value = e.target.value;
        setter(value); // Actualiza el estado local
        // Construye un nuevo objeto perfil para actualizar, asegurándote de mantener otros datos en perfil
        const updatedPerfil = { ...perfil, [field]: value };
        onUpdate(updatedPerfil); // Actualiza el estado en el componente padre
    }

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
                                        value={nombreEntidad}
                                        onChange={handleChange(setNombreEntidad, 'nombre_entidad')}
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
                                        value={numeroBanco}
                                        onChange={handleChange(setNumeroBanco, 'numero_banco')}
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
                                        value={numeroSucursal}
                                        onChange={handleChange(setNumeroSucursal, 'numero_sucursal')}
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
                                        value={digitoControl}
                                        onChange={handleChange(setDigitoControl, 'digito_control')}
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
                                        value={numeroCuenta}
                                        onChange={handleChange(setNumeroCuenta, 'numero_cuenta')}
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
