import React, { useState } from 'react';
import { Col, ListGroup, Form, Row, Card } from 'react-bootstrap';

const DatosPersonales = ({ userData, isAdmin }) => {
    const perfil = userData.perfil;
    // Estados para cada campo
    const [name, setName] = useState(userData.name);
    const [direccion, setDireccion] = useState(perfil.direccion);
    const [telefonoFijo, setTelefonoFijo] = useState(perfil.telefono_fijo);
    const [email, setEmail] = useState(userData.email);
    const [cif, setCif] = useState(perfil.cif);
    const [localidad, setLocalidad] = useState(perfil.localidad);
    const [movil, setMovil] = useState(perfil.telefono_movil);
    const [codigoPostal, setCodigoPostal] = useState(perfil.codigo_postal);

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    return (
        <Card className="mb-3">
            <Card.Header>Datos del Usuario</Card.Header>
            <Card.Body>
                <Row>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Nombre: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={name} onChange={handleChange(setName)} />
                                ) : (
                                    name
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Dirección: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={direccion} onChange={handleChange(setDireccion)} />
                                ) : (
                                    direccion
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Teléfono Fijo: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={telefonoFijo || 'No proporcionado'} onChange={handleChange(setTelefonoFijo)} />
                                ) : (
                                    telefonoFijo || 'No proporcionado'
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Email: </strong>
                                {isAdmin ? (
                                    <Form.Control type="email" value={email || 'No proporcionado'} onChange={handleChange(setEmail)} />
                                ) : (
                                    email || 'No proporcionado'
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>CIF: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={cif} onChange={handleChange(setCif)} />
                                ) : (
                                    cif
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Localidad: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={localidad} onChange={handleChange(setLocalidad)} />
                                ) : (
                                    localidad
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Móvil: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={movil || 'No proporcionado'} onChange={handleChange(setMovil)} />
                                ) : (
                                    movil || 'No proporcionado'
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>C.P.: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={codigoPostal} onChange={handleChange(setCodigoPostal)} />
                                ) : (
                                    codigoPostal
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card.Body>
        </Card>

    );
};

export default DatosPersonales;
