import React from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';

const CaracteristicasParcela = () => {
    return (
        <Card className='mb-3'>
            <Card.Header>Caracteristicas de las percelas</Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Identificación</Form.Label>
                            <Form.Control type="text" placeholder="esperando datos del backend" readOnly />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Sup. Total</Form.Label>
                            <Form.Control type="text" placeholder="esperando datos del backend" readOnly />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Nº Olivos</Form.Label>
                            <Form.Control type="text" placeholder="esperando datos del backend" readOnly />
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Parcela Catastral</Form.Label>
                            <Form.Control type="text" placeholder="esperando datos del backend" readOnly />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Sup. Regable</Form.Label>
                            <Form.Control type="text" placeholder="esperando datos del backend" readOnly />
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Propietario</Form.Label>
                            <Form.Control type="text" placeholder="esperando datos del backend" readOnly />
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Concesión</Form.Label>
                            <Form.Control type="text" placeholder="esperando datos del backend" readOnly />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Toma de Agua</Form.Label>
                            <Form.Control type="text" placeholder="esperando datos del backend" readOnly />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Suelo</Form.Label>
                            <Form.Control type="text" placeholder="esperando datos del backend" readOnly />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Paraje</Form.Label>
                            <Form.Control type="text" placeholder="esperando datos del backend" readOnly />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Fecha Alta</Form.Label>
                            <Form.Control type="text" placeholder="esperando datos del backend" readOnly />
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CaracteristicasParcela;
