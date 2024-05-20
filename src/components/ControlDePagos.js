import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form, Table } from 'react-bootstrap';
import { listPagosParcela } from '../actions/parcelaAction';

const ControlDePagos = () => {
    const dispatch = useDispatch();

    const pagosParcelaList = useSelector(state => state.pagosParcelaList);
    const { loading, error, controlDePagos } = pagosParcelaList;

    const [edits, setEdits] = useState([]);
    console.log(controlDePagos);

    useEffect(() => {
        dispatch(listPagosParcela());
    }, [dispatch]);

    useEffect(() => {
        setEdits(controlDePagos);
    }, [controlDePagos]);

    const isAdmin = controlDePagos.length > 0 ? controlDePagos[0].isAdmin : false;

    const handleChange = (index, field) => e => {
        const value = e.target.value || 'Vacio';
        const updatedControlDePagos = [...edits];
        updatedControlDePagos[index][field] = value;
        setEdits(updatedControlDePagos);
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error}</div>
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
