import React, { useState, useEffect, useMemo } from 'react';
import { Row, Col, Form, Card, Spinner, Alert, Button } from 'react-bootstrap';

const CaracteristicasParcela = ({ loading, error, caracteristicas }) => {
    const data = useMemo(() => {
        return Array.isArray(caracteristicas) && caracteristicas.length > 0 ? caracteristicas[0] : {};
    }, [caracteristicas]);    const isAdmin = data.isAdmin; // Variable para saber si es admin

    const [formData, setFormData] = useState(data);

    useEffect(() => {
        setFormData(data);
    }, [data]);

    const handleInputChange = (field) => (event) => {
        setFormData({
            ...formData,
            [field]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        //console.log('Formulario enviado:', formData);
        // Por ejemplo, podrías hacer una llamada a una acción de Redux para actualizar la información
    };

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
                                        readOnly={!isAdmin}
                                        onChange={isAdmin ? handleInputChange("identificacion") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Sup. Total</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.sup_total ?? ""}
                                        readOnly={!isAdmin}
                                        onChange={isAdmin ? handleInputChange("sup_total") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Nº Olivos</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.num_olivos ?? ""}
                                        readOnly={!isAdmin}
                                        onChange={isAdmin ? handleInputChange("num_olivos") : undefined}
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
                                        readOnly={!isAdmin}
                                        onChange={isAdmin ? handleInputChange("parcela_catastral") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Sup. Regable</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.sup_regable ?? ""}
                                        readOnly={!isAdmin}
                                        onChange={isAdmin ? handleInputChange("sup_regable") : undefined}
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
                                        value={formData.usuario ?? ""}
                                        readOnly={!isAdmin}
                                        onChange={isAdmin ? handleInputChange("usuario") : undefined}
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
                                        readOnly={!isAdmin}
                                        onChange={isAdmin ? handleInputChange("concesion") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Toma de Agua</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.toma_agua ?? ""}
                                        readOnly={!isAdmin}
                                        onChange={isAdmin ? handleInputChange("toma_agua") : undefined}
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
                                        readOnly={!isAdmin}
                                        onChange={isAdmin ? handleInputChange("suelo") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Paraje</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.paraje ?? ""}
                                        readOnly={!isAdmin}
                                        onChange={isAdmin ? handleInputChange("paraje") : undefined}
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
                                        readOnly={!isAdmin}
                                        onChange={isAdmin ? handleInputChange("fecha_alta") : undefined}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        {isAdmin && (
                            <Button type="submit" variant="primary">Guardar Cambios</Button>
                        )}
                    </Form>
                )}
            </Card.Body>
        </Card>
    );
};

export default CaracteristicasParcela;
