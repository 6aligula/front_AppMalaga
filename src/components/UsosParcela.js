import React, { useState, useEffect } from 'react';
import { Card, Form, ListGroup, Row, Col } from 'react-bootstrap';

const UsosParcela = ({ usos }) => {
    const [edits, setEdits] = useState(usos);

    useEffect(() => {
        setEdits(usos);
    }, [usos]);

    const isAdmin = usos.length > 0 ? usos[0].isAdmin : false;

    const handleChange = (index, field) => e => {
        const value = e.target.value || 'Vacio';
        const updatedUsos = [...edits];
        updatedUsos[index][field] = value;
        setEdits(updatedUsos);
        // onUpdate(updatedUsos);
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                {edits.map((uso, index) => (
                    <React.Fragment key={index}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <strong>Tipo de uso: </strong>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={uso.tipo_uso || 'Vacio'}
                                                onChange={handleChange(index, 'tipo_uso')}
                                                className="small-font-text"
                                            />
                                        ) : (
                                            <span className="small-font-text">{uso.tipo_uso || 'Vacio'}</span>
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Cultivo: </strong>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={uso.cultivo || 'Vacio'}
                                                onChange={handleChange(index, 'cultivo')}
                                                className="small-font-text"
                                            />
                                        ) : (
                                            <span className="small-font-text">{uso.cultivo || 'Vacio'}</span>
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Superficie: </strong>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={uso.superficie || 'Vacio'}
                                                onChange={handleChange(index, 'superficie')}
                                                className="small-font-text"
                                            />
                                        ) : (
                                            <span className="small-font-text">{uso.superficie || 'Vacio'}</span>
                                        )}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={6}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <strong>Sistema de riego: </strong>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={uso.sistema_riego || 'Vacio'}
                                                onChange={handleChange(index, 'sistema_riego')}
                                                className="small-font-text"
                                            />
                                        ) : (
                                            <span className="small-font-text">{uso.sistema_riego || 'Vacio'}</span>
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Estado: </strong>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={uso.estado || 'Vacio'}
                                                onChange={handleChange(index, 'estado')}
                                                className="small-font-text"
                                            />
                                        ) : (
                                            <span className="small-font-text">{uso.estado || 'Vacio'}</span>
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Fecha de alta: </strong>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={uso.fecha_alta || 'Vacio'}
                                                onChange={handleChange(index, 'fecha_alta')}
                                                className="small-font-text"
                                            />
                                        ) : (
                                            <span className="small-font-text">{uso.fecha_alta || 'Vacio'}</span>
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Fecha de baja: </strong>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={uso.fecha_baja || 'Vacio'}
                                                onChange={handleChange(index, 'fecha_baja')}
                                                className="small-font-text"
                                            />
                                        ) : (
                                            <span className="small-font-text">{uso.fecha_baja || 'Vacio'}</span>
                                        )}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        <hr />
                    </React.Fragment>
                ))}
            </Card.Body>
        </Card>
    );
};

export default UsosParcela;
