import React, { useState, useEffect } from 'react';
import { Card, Form, Table } from 'react-bootstrap';

const DatosAdicionales = ({ datosAdicionales }) => {
    const [edits, setEdits] = useState(datosAdicionales);

    useEffect(() => {
        setEdits(datosAdicionales);
    }, [datosAdicionales]);

    const isAdmin = datosAdicionales.length > 0 ? datosAdicionales[0].isAdmin : false;

    const handleChange = (index, field) => e => {
        const value = e.target.value || 'Vacio';
        const updatedDatosAdicionales = [...edits];
        updatedDatosAdicionales[index][field] = value;
        setEdits(updatedDatosAdicionales);
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                {datosAdicionales.length === 0 ? (
                    <div>No hay datos adicionales disponibles.</div>
                ) : (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Tipo de Dato</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {edits.map((dato, index) => (
                                <tr key={index}>
                                    <td>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={dato.tipo_dato || 'Vacio'}
                                                onChange={handleChange(index, 'tipo_dato')}
                                            />
                                        ) : (
                                            dato.tipo_dato || 'No proporcionado'
                                        )}
                                    </td>
                                    <td>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={dato.valor || 'Vacio'}
                                                onChange={handleChange(index, 'valor')}
                                            />
                                        ) : (
                                            dato.valor || 'No proporcionado'
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Card.Body>
        </Card>
    );
};

export default DatosAdicionales;
