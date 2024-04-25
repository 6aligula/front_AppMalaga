import React from 'react';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';

const UserProfile = ({ userData }) => {
    const perfil = userData.perfil;

    return (
        <>
            <Card className="mb-3">
                <Card.Header>Datos del Usuario</Card.Header>
                <Card.Body>
                    <Row>
                        {perfil && (
                            <>
                                <Col md={4}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>Nombre:</strong> {userData.name}</ListGroup.Item>
                                        <ListGroup.Item><strong>Dirección:</strong> {perfil.direccion}</ListGroup.Item>
                                        <ListGroup.Item><strong>Teléfono Fijo:</strong> {perfil.telefono_fijo || 'No proporcionado'}</ListGroup.Item>
                                        <ListGroup.Item><strong>Email:</strong> {userData.email || 'No proporcionado'}</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col md={4}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>CIF:</strong> {perfil.cif}</ListGroup.Item>
                                        <ListGroup.Item><strong>Localidad:</strong> {perfil.localidad}</ListGroup.Item>
                                        <ListGroup.Item><strong>Móvil:</strong> {perfil.telefono_movil || 'No proporcionado'}</ListGroup.Item>

                                    </ListGroup>
                                </Col>
                                <Col md={4}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>C.P.:</strong> {perfil.codigo_postal}</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </>
                        )}

                    </Row>
                </Card.Body>
            </Card>

                        <h1>Comunidad de regantes</h1>

            <Card className="mb-3">
                <Card.Header>Datos Bancarios</Card.Header>
                <Card.Body>
                    <Row>
                        {perfil && (
                            <>
                                <Col md={3}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>Nombre de la entidad:</strong></ListGroup.Item>
                                        <ListGroup.Item> {perfil.nombre_entidad}</ListGroup.Item>
                                    </ListGroup>
                                </Col>

                                <Col md={2}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>Número de banco:</strong></ListGroup.Item>
                                        <ListGroup.Item> {perfil.numero_banco}</ListGroup.Item>
                                    </ListGroup>
                                </Col>

                                <Col md={2}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>Número de sucursal:</strong></ListGroup.Item>
                                        <ListGroup.Item> {perfil.numero_sucursal}</ListGroup.Item>
                                    </ListGroup>
                                </Col>

                                <Col md={2}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>Dígito de control:</strong></ListGroup.Item>
                                        <ListGroup.Item> {perfil.digito_control}</ListGroup.Item>
                                    </ListGroup>
                                </Col>

                                <Col md={3}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>Número de cuenta:</strong> </ListGroup.Item>
                                        <ListGroup.Item>{perfil.numero_cuenta}</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </>
                        )}
                    </Row>
                </Card.Body>
            </Card>

        </>
    );
};

export default UserProfile;
