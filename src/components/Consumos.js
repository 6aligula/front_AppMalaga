import React from 'react';
import { Table } from 'react-bootstrap';

const Consumos = () => {
    return (
        <div>
            <h3>Consumos</h3>
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
                    <tr>
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

export default Consumos;
