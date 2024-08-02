import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { jsPDF } from 'jspdf';

const EmitirCircular = () => {
    const [circularContent, setCircularContent] = useState('');

    const handlePrint = () => {
        const doc = new jsPDF();
        doc.text(circularContent, 10, 10);
        doc.save('circular.pdf');
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h2>Emitir Circular</h2>
                    <Form>
                        <Form.Group controlId="circularContent">
                            <Form.Label>Contenido de la Circular</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={10} 
                                value={circularContent}
                                onChange={(e) => setCircularContent(e.target.value)}
                                placeholder="Aquí que se escriba toda la circular..."
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handlePrint}>
                            Imprimir
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default EmitirCircular;
