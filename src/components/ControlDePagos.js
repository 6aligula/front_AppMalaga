import React, { useState, useEffect } from 'react';
import { Card, Form, Table } from 'react-bootstrap';

const ControlDePagos = ({ pagos }) => {
    const [edits, setEdits] = useState(pagos);

    useEffect(() => {
        setEdits(pagos);
    }, [pagos]);

    const isAdmin = pagos.length > 0 ? pagos[0].isAdmin : false;

    const handleChange = (index, field) => e => {
        const value = e.target.value || 'Vacio';
        const updatedControlDePagos = [...edits];
        updatedControlDePagos[index][field] = value;
        setEdits(updatedControlDePagos);
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                {pagos.length === 0 ? (
                    <div>No hay pagos disponibles.</div>
                ) : (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Factura</th>
                                <th>Nº Factura</th>
                                <th>ID Usuario</th>
                                <th>Pagador</th>
                                <th>Vencimiento</th>
                                <th>Total [euros]</th>
                            </tr>
                        </thead>
                        <tbody>
                            {edits.map((pago, index) => (
                                <tr key={index}>
                                    <td>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={pago.factura || 'Vacio'}
                                                onChange={handleChange(index, 'factura')}
                                            />
                                        ) : (
                                            pago.factura || 'No proporcionado'
                                        )}
                                    </td>
                                    <td>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={pago.numero_factura || 'Vacio'}
                                                onChange={handleChange(index, 'numero_factura')}
                                            />
                                        ) : (
                                            pago.numero_factura || 'No proporcionado'
                                        )}
                                    </td>
                                    <td>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={pago.id || 'Vacio'}
                                                onChange={handleChange(index, 'id')}
                                            />
                                        ) : (
                                            pago.id || 'No proporcionado'
                                        )}
                                    </td>
                                    <td>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={pago.pagador || 'Vacio'}
                                                onChange={handleChange(index, 'pagador')}
                                            />
                                        ) : (
                                            pago.pagador || 'No proporcionado'
                                        )}
                                    </td>
                                    <td>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={pago.vencimiento || 'Vacio'}
                                                onChange={handleChange(index, 'vencimiento')}
                                            />
                                        ) : (
                                            pago.vencimiento || 'No proporcionado'
                                        )}
                                    </td>
                                    <td>
                                        {isAdmin ? (
                                            <Form.Control
                                                type="text"
                                                value={pago.total || 'Vacio'}
                                                onChange={handleChange(index, 'total')}
                                            />
                                        ) : (
                                            pago.total || 'No proporcionado'
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

export default ControlDePagos;
