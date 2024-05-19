import React from 'react';
import { Table } from 'react-bootstrap';

const ControlDePagos = () => {
    return (
        <div>
            <h3>Control de Pagos</h3>
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
                    <tr>
                        <td>esperando datos del backend</td>
                        <td>esperando datos del backend</td>
                        <td>esperando datos del backend</td>
                        <td>esperando datos del backend</td>
                        <td>esperando datos del backend</td>
                        <td>esperando datos del backend</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ControlDePagos;
