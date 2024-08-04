import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listFacturas, generatePdfReport } from '../actions/facturaActions';
import SidebarUsers from '../components/SidebarUsers';
import Loader from '../components/Loader';
import Message from '../components/Message';

const InformesScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const facturaList = useSelector(state => state.facturaList);
    const { loading, error, facturas } = facturaList;

    const facturaGeneratePdf = useSelector(state => state.facturaGeneratePdf);
    const { loading: loadingPdf, error: errorPdf } = facturaGeneratePdf;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        } else {
            dispatch(listFacturas());
        }
    }, [dispatch, navigate, userInfo]);

    const generateReport = () => {
        dispatch(generatePdfReport());
    };

    return (
        <Row>
            <Col md={3}>
                <SidebarUsers />
            </Col>
            <Col md={9}>
                <h2>Listado del Libro Diario</h2>
                <Button onClick={generateReport} className='btn-sm' variant='primary'>Generar PDF</Button>
                {loadingPdf && <Loader />}
                {errorPdf && <Message variant="danger">{errorPdf}</Message>}
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Asiento</th>
                                <th>Fecha</th>
                                <th>Subcuenta</th>
                                <th>Concepto</th>
                                <th>Debe</th>
                                <th>Haber</th>
                                <th>Título de la Subcuenta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {facturas.map(factura => {
                                const fechaEmision = new Date(factura.fecha_emision); // Convertir a objeto Date
                                return (
                                    <tr key={factura.id}>
                                        <td>{factura.numero_factura}</td><td>{fechaEmision.toLocaleDateString()}</td><td>4300001</td><td>{`Factura ${factura.numero_factura}/${fechaEmision.getFullYear()}`}</td><td>{factura.estado === 'Pendiente' ? factura.total_facturado : ''}</td><td>{factura.estado === 'Pagado' ? factura.total_facturado : ''}</td><td>{userInfo ? userInfo.name : 'N/A'}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                )}
            </Col>
        </Row>
    );
};

export default InformesScreen;
