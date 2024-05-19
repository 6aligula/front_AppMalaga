import React, { useState } from 'react';
import { Card, Form, Table } from 'react-bootstrap';

const ContadoresMedidas = ({ contadores, isAdmin, onUpdate }) => {
    const [edits, setEdits] = useState(contadores);

    const handleChange = (index, field) => e => {
        const value = e.target.value;
        const updatedContadores = [...edits];
        updatedContadores[index][field] = value;
        setEdits(updatedContadores);
        onUpdate(updatedContadores);
    };

    return (
        <Card className="mb-3">
            <Card.Header>Contadores/Medidas</Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Contador</th>
                            <th>Fecha Alta</th>
                            <th>Fecha Baja</th>
                            <th>Lectura Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        {edits.map((contador, index) => (
                            <tr key={index}>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={contador.contador}
                                            onChange={handleChange(index, 'contador')}
                                        />
                                    ) : (
                                        contador.contador || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={contador.fechaAlta}
                                            onChange={handleChange(index, 'fechaAlta')}
                                        />
                                    ) : (
                                        contador.fechaAlta || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={contador.fechaBaja}
                                            onChange={handleChange(index, 'fechaBaja')}
                                        />
                                    ) : (
                                        contador.fechaBaja || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={contador.lecturaMax}
                                            onChange={handleChange(index, 'lecturaMax')}
                                        />
                                    ) : (
                                        contador.lecturaMax || 'No proporcionado'
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default ContadoresMedidas;
