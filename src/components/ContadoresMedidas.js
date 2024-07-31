import React, { useState, useEffect } from 'react';
import { Card, Form, Table } from 'react-bootstrap';

const ContadoresMedidas = ({ contadores }) => {
    const [edits, setEdits] = useState(contadores);

    useEffect(() => {
        setEdits(contadores);
    }, [contadores]);

    const isAdmin = contadores.length > 0 ? contadores[0].isAdmin : false;

    const handleChange = (index, field) => e => {
        const value = e.target.value || 'Vacio';
        const updatedContadores = [...edits];
        updatedContadores[index][field] = value;
        setEdits(updatedContadores);
        // onUpdate(updatedContadores);
    };

    return (
        <Card className="mb-3">
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
                                            value={contador.contador || 'Vacio'}
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
                                            value={contador.fecha_alta || 'Vacio'}
                                            onChange={handleChange(index, 'fecha_alta')}
                                        />
                                    ) : (
                                        contador.fecha_alta || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={contador.fecha_baja || 'Vacio'}
                                            onChange={handleChange(index, 'fecha_baja')}
                                        />
                                    ) : (
                                        contador.fecha_baja || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={contador.lectura_max || 'Vacio'}
                                            onChange={handleChange(index, 'lectura_max')}
                                        />
                                    ) : (
                                        contador.lectura_max || 'No proporcionado'
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
