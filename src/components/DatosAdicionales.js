import React from 'react';
import { Table } from 'react-bootstrap';

const DatosAdicionales = () => {
    return (
        <div>
            <h3>Datos Adicionales</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tipo de Dato</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>esperando datos del backend</td>
                        <td>esperando datos del backend</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default DatosAdicionales;
