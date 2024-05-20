import React, { useState } from 'react';
import { Card, Form, Table } from 'react-bootstrap';

const UsosParcela = ({ usos, isAdmin, onUpdate }) => {
    const [edits, setEdits] = useState(usos);

    const handleChange = (index, field) => e => {
        const value = e.target.value || 'Sin datos';
        const updatedUsos = [...edits];
        updatedUsos[index][field] = value;
        setEdits(updatedUsos);
        onUpdate(updatedUsos);
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Tipo de uso</th>
                            <th>Cultivo</th>
                            <th>Superficie</th>
                            <th>Sistema de riego</th>
                            <th>Estado</th>
                            <th>Fecha de alta</th>
                            <th>Fecha de baja</th>
                        </tr>
                    </thead>
                    <tbody>
                        {edits.map((uso, index) => (
                            <tr key={index}>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.tipo_uso || 'Sin datos'}
                                            onChange={handleChange(index, 'tipo_uso')}
                                        />
                                    ) : (
                                        uso.tipo_uso || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.cultivo || 'Sin datos'}
                                            onChange={handleChange(index, 'cultivo')}
                                        />
                                    ) : (
                                        uso.cultivo || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.superficie || 'Sin datos'}
                                            onChange={handleChange(index, 'superficie')}
                                        />
                                    ) : (
                                        uso.superficie || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.sistema_riego || 'Sin datos'}
                                            onChange={handleChange(index, 'sistema_riego')}
                                        />
                                    ) : (
                                        uso.sistema_riego || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.estado || 'Sin datos'}
                                            onChange={handleChange(index, 'estado')}
                                        />
                                    ) : (
                                        uso.estado || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.fecha_alta || 'Sin datos'}
                                            onChange={handleChange(index, 'fecha_alta')}
                                        />
                                    ) : (
                                        uso.fecha_alta || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.fecha_baja || 'Sin datos'}
                                            onChange={handleChange(index, 'fecha_baja')}
                                        />
                                    ) : (
                                        uso.fecha_baja || 'No proporcionado'
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

export default UsosParcela;
