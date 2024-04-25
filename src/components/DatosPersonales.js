import React, { useState } from 'react';
import { Col, ListGroup, Form, Row, Card } from 'react-bootstrap';

const DatosPersonales = ({ userData, isAdmin, onUpdate }) => {
    const perfil = userData.perfil;

    // Asegurándonos de que los estados iniciales manejen correctamente null o cadenas vacías
    const [name, setName] = useState(userData.name || "");
    const [direccion, setDireccion] = useState(perfil.direccion || "");
    const [telefono_fijo, setTelefonoFijo] = useState(perfil.telefono_fijo || "");
    const [email, setEmail] = useState(userData.email || "");
    const [cif, setCif] = useState(perfil.cif || "");
    const [localidad, setLocalidad] = useState(perfil.localidad || "");
    const [movil, setMovil] = useState(perfil.telefono_movil || "");
    const [codigoPostal, setCodigoPostal] = useState(perfil.codigo_postal || "");

    const handleChange = (setter, field) => e => {
        const value = e.target.value;
        setter(value); // Actualiza el estado local
        // Construye un nuevo objeto perfil para actualizar, asegurándote de mantener otros datos en perfil
        const updatedPerfil = { ...perfil, [field]: value };
        onUpdate(updatedPerfil); // Actualiza el estado en el componente padre
    }

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
                                    <Form.Control type="text" value={name} onChange={handleChange(setName, 'name')} />
                                ) : (
                                    <span>{name || 'vacio'}</span>
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
                                    <Form.Control type="text" value={telefono_fijo} onChange={handleChange(setTelefonoFijo, 'telefono_fijo')} />
                                ) : (
                                    <span>{telefono_fijo || 'No proporcionado'}</span>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Email: </strong>
                                {isAdmin ? (
                                    <Form.Control type="email" value={email} onChange={handleChange(setEmail, 'email')} />
                                ) : (
                                    <span>{email || 'No proporcionado'}</span>
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
                                    <Form.Control type="text" value={localidad} onChange={handleChange(setLocalidad, 'codigo_postal')} />
                                ) : (
                                    <span>{localidad}</span>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Móvil: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={movil} onChange={handleChange(setMovil, 'telefono_movil')} />
                                ) : (
                                    <span>{movil || 'No proporcionado'}</span>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>C.P.: </strong>
                                {isAdmin ? (
                                    <Form.Control type="text" value={codigoPostal} onChange={handleChange(setCodigoPostal, 'codigoPostal')} />
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

export default DatosPersonales;
