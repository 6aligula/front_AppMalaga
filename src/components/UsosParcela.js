import React, { useState } from 'react';
import { Card, Form, Table } from 'react-bootstrap';

const UsosParcela = ({ usos, isAdmin, onUpdate }) => {
    const [edits, setEdits] = useState(usos);

    const handleChange = (index, field) => e => {
        const value = e.target.value;
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
                                            value={uso.tipoUso}
                                            onChange={handleChange(index, 'tipoUso')}
                                        />
                                    ) : (
                                        uso.tipoUso || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.cultivo}
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
                                            value={uso.superficie}
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
                                            value={uso.sistemaRiego}
                                            onChange={handleChange(index, 'sistemaRiego')}
                                        />
                                    ) : (
                                        uso.sistemaRiego || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.estado}
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
                                            value={uso.fechaAlta}
                                            onChange={handleChange(index, 'fechaAlta')}
                                        />
                                    ) : (
                                        uso.fechaAlta || 'No proporcionado'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.fechaBaja}
                                            onChange={handleChange(index, 'fechaBaja')}
                                        />
                                    ) : (
                                        uso.fechaBaja || 'No proporcionado'
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
