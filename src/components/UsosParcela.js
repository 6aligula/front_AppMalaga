import React, { useState } from 'react';
import { Card, Form, Table } from 'react-bootstrap';

const UsosParcela = ({ usos }) => {
    const [edits, setEdits] = useState(usos);

    const isAdmin = usos.length > 0 ? usos[0].isAdmin : false;

    const handleChange = (index, field) => e => {
        const value = e.target.value || 'Vacio';
        const updatedUsos = [...edits];
        updatedUsos[index][field] = value;
        setEdits(updatedUsos);
        //onUpdate(updatedUsos);
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
                                            value={uso.tipo_uso || 'Vacio'}
                                            onChange={handleChange(index, 'tipo_uso')}
                                        />
                                    ) : (
                                        uso.tipo_uso || 'Vacio'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.cultivo || 'Vacio'}
                                            onChange={handleChange(index, 'cultivo')}
                                        />
                                    ) : (
                                        uso.cultivo || 'Vacio'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.superficie || 'Vacio'}
                                            onChange={handleChange(index, 'superficie')}
                                        />
                                    ) : (
                                        uso.superficie || 'Vacio'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.sistema_riego || 'Vacio'}
                                            onChange={handleChange(index, 'sistema_riego')}
                                        />
                                    ) : (
                                        uso.sistema_riego || 'Vacio'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.estado || 'Vacio'}
                                            onChange={handleChange(index, 'estado')}
                                        />
                                    ) : (
                                        uso.estado || 'Vacio'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.fecha_alta || 'Vacio'}
                                            onChange={handleChange(index, 'fecha_alta')}
                                        />
                                    ) : (
                                        uso.fecha_alta || 'Vacio'
                                    )}
                                </td>
                                <td>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={uso.fecha_baja || 'Vacio'}
                                            onChange={handleChange(index, 'fecha_baja')}
                                        />
                                    ) : (
                                        uso.fecha_baja || 'Vacio'
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
