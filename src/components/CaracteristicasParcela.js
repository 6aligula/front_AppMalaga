import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Card, Spinner, Alert, Button } from 'react-bootstrap';

const CaracteristicasParcela = ({ loading, error, parcela }) => {
    const [formData, setFormData] = useState(parcela || {});

    useEffect(() => {
        setFormData(parcela || {});
    }, [parcela]);

    if (!parcela) {
        return null;
    }

    const handleInputChange = (field) => (event) => {
        setFormData({
            ...formData,
            [field]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para enviar el formulario
    };

    const usuario = parcela?.plot?.properties?.usuarios?.[0]?.username || '';

    return (
        <Card className='mb-3'>
            <Card.Header>Características de las parcelas</Card.Header>
            <Card.Body>
                {loading ? (
                    <Spinner animation="border" />
                ) : error ? (
                    <Alert variant="danger">{error}</Alert>
                ) : (
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Identificación</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.identificacion ?? ""}
                                        readOnly={!parcela.isAdmin}
                                        onChange={parcela.isAdmin ? handleInputChange("identificacion") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Sup. Total</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.sup_total ?? ""}
                                        readOnly={!parcela.isAdmin}
                                        onChange={parcela.isAdmin ? handleInputChange("sup_total") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Nº Olivos</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.num_olivos ?? ""}
                                        readOnly={!parcela.isAdmin}
                                        onChange={parcela.isAdmin ? handleInputChange("num_olivos") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Parcela Catastral</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.parcela_catastral ?? ""}
                                        readOnly={!parcela.isAdmin}
                                        onChange={parcela.isAdmin ? handleInputChange("parcela_catastral") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Sup. Regable</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.sup_regable ?? ""}
                                        readOnly={!parcela.isAdmin}
                                        onChange={parcela.isAdmin ? handleInputChange("sup_regable") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Propietario</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={usuario ?? ""}
                                        readOnly={!parcela.isAdmin}
                                        onChange={parcela.isAdmin ? handleInputChange("usuario") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Concesión</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.concesion ?? ""}
                                        readOnly={!parcela.isAdmin}
                                        onChange={parcela.isAdmin ? handleInputChange("concesion") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Toma de Agua</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.toma_agua ?? ""}
                                        readOnly={!parcela.isAdmin}
                                        onChange={parcela.isAdmin ? handleInputChange("toma_agua") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Suelo</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.suelo ?? ""}
                                        readOnly={!parcela.isAdmin}
                                        onChange={parcela.isAdmin ? handleInputChange("suelo") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Paraje</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.paraje ?? ""}
                                        readOnly={!parcela.isAdmin}
                                        onChange={parcela.isAdmin ? handleInputChange("paraje") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Fecha Alta</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.fecha_alta ?? ""}
                                        readOnly={!parcela.isAdmin}
                                        onChange={parcela.isAdmin ? handleInputChange("fecha_alta") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        {parcela.isAdmin && (
                            <Button type="submit" variant="primary">Guardar Cambios</Button>
                        )}
                    </Form>
                )}
            </Card.Body>
        </Card>
    );
};

export default CaracteristicasParcela;
