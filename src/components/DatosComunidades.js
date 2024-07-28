import React, { useState } from 'react';
import { Col, ListGroup, Form, Row, Card } from 'react-bootstrap';

const DatosComunidades = ({ comunidadData, isAdmin, onUpdate }) => {
    // Asegurándonos de que los estados iniciales manejen correctamente null o cadenas vacías
    const [nombre, setNombre] = useState(comunidadData.nombre || "");
    const [direccion, setDireccion] = useState(comunidadData.direccion || "");
    const [telefonoFijo, setTelefonoFijo] = useState(comunidadData.telefono_fijo || "");
    const [emailAlternativo, setEmailAlternativo] = useState(comunidadData.email_alternativo || "");
    const [cif, setCif] = useState(comunidadData.cif || "");
    const [localidad, setLocalidad] = useState(comunidadData.localidad || "");
    const [telefonoMovil, setTelefonoMovil] = useState(comunidadData.telefono_movil || "");
    const [codigoPostal, setCodigoPostal] = useState(comunidadData.codigo_postal || "");

    const handleChange = (setter, field) => e => {
        const value = e.target.value;
        setter(value); // Actualiza el estado local
        // Construye un nuevo objeto comunidad para actualizar, asegurándote de mantener otros datos en comunidad
        const updatedComunidad = { ...comunidadData, [field]: value };
        onUpdate(updatedComunidad); // Actualiza el estado en el componente padre
    }

    return (
        <Card className="mb-3">
            <Card.Header>Datos de la Comunidad</Card.Header>
            <Card.Body>
                <Row>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Nombre: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={nombre} onChange={handleChange(setNombre, 'nombre')} />
                                ) : (
                                    <span>{nombre || 'vacio'}</span>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Dirección: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={direccion} onChange={handleChange(setDireccion, 'direccion')} />
                                ) : (
                                    <span>{direccion}</span>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Teléfono Fijo: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={telefonoFijo} onChange={handleChange(setTelefonoFijo, 'telefono_fijo')} />
                                ) : (
                                    <span>{telefonoFijo || 'No proporcionado'}</span>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Email Alternativo: </strong>
                                {isAdmin ? (
                                    <Form.Control type="email" value={emailAlternativo} onChange={handleChange(setEmailAlternativo, 'email_alternativo')} />
                                ) : (
                                    <span>{emailAlternativo || 'No proporcionado'}</span>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>CIF: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={cif} onChange={handleChange(setCif, 'cif')} />
                                ) : (
                                    <span>{cif}</span>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Localidad: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={localidad} onChange={handleChange(setLocalidad, 'localidad')} />
                                ) : (
                                    <span>{localidad}</span>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Teléfono Móvil: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={telefonoMovil} onChange={handleChange(setTelefonoMovil, 'telefono_movil')} />
                                ) : (
                                    <span>{telefonoMovil || 'No proporcionado'}</span>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Código Postal: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={codigoPostal} onChange={handleChange(setCodigoPostal, 'codigo_postal')} />
                                ) : (
                                    <span>{codigoPostal}</span>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default DatosComunidades;
