import React, { useState, useEffect } from 'react';
import { Card, Form, Table } from 'react-bootstrap';

const Consumos = ({ consumos }) => {
    const [edits, setEdits] = useState(consumos);

    useEffect(() => {
        setEdits(consumos);
    }, [consumos]);

    const isAdmin = consumos.length > 0 ? consumos[0].isAdmin : false;

    const handleChange = (index, field) => e => {
        const value = e.target.value || 'Vacio';
        const updatedConsumos = [...edits];
        updatedConsumos[index][field] = value;
        setEdits(updatedConsumos);
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                {consumos.length === 0 ? (
                    <div>No hay consumos disponibles.</div>
                ) : (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nº Factura</th>
                                <th>Periodo Facturado</th>
                                <th>Vol. Medido</th>
                                <th>Comentario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {edits.map((consumo, index) => (
                                <tr key={index}>
                                    <td>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={consumo.numero_factura || 'Vacio'}
                                                onChange={handleChange(index, 'numero_factura')}
                                            />
                                        ) : (
                                            consumo.numero_factura || 'No proporcionado'
                                        )}
                                    </td>
                                    <td>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={consumo.periodo_facturacion || 'Vacio'}
                                                onChange={handleChange(index, 'periodo_facturacion')}
                                            />
                                        ) : (
                                            consumo.periodo_facturacion || 'No proporcionado'
                                        )}
                                    </td>
                                    <td>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={consumo.volumen_medido || 'Vacio'}
                                                onChange={handleChange(index, 'volumen_medido')}
                                            />
                                        ) : (
                                            consumo.volumen_medido || 'No proporcionado'
                                        )}
                                    </td>
                                    <td>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={consumo.comentario || 'Vacio'}
                                                onChange={handleChange(index, 'comentario')}
                                            />
                                        ) : (
                                            consumo.comentario || 'No proporcionado'
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

export default Consumos;
