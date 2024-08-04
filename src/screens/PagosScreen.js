import React, { useEffect, useState } from 'react';
import { Row, Col, ListGroup, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listFacturas } from '../actions/facturaActions';
import SidebarUsers from '../components/SidebarUsers';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FacturaViewer from '../components/FacturaViewer';

const PagosScreen = () => {
    const [selectedFacturaId, setSelectedFacturaId] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const facturaList = useSelector(state => state.facturaList);
    const { loading, error, facturas } = facturaList;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        } else {
            dispatch(listFacturas());
        }
    }, [dispatch, navigate, userInfo]);

    const viewFactura = (id) => {
        setSelectedFacturaId(id);
    };

    const closeViewer = () => {
        setSelectedFacturaId(null);
    };

    return (
        <Row>
            <Col md={3}>
                <SidebarUsers />
            </Col>
            <Col md={9}>
                <h2>Control de Pagos</h2>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Numero</th>
                                <th>Cuantía</th>
                                <th>Fecha Emisión</th>
                                <th>Fecha Pago</th>
                                <th>Forma de Pago</th>
                                <th>Pagado (sí/no)</th>
                                <th>Recargo (sí/no)</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {facturas.map(factura => (
                                <tr key={factura.id}>
                                    <td>{factura.numero_factura}</td>
                                    <td>{factura.total_facturado} €</td>
                                    <td>{factura.fecha_emision}</td>
                                    <td>{factura.fecha_pago || 'Pendiente'}</td>
                                    <td>{factura.forma_pago || 'N/A'}</td>
                                    <td>{factura.estado === 'Pagado' ? 'Sí' : 'No'}</td>
                                    <td>{factura.recargo > 0 ? 'Sí' : 'No'}</td>
                                    <td>
                                        <Button
                                            onClick={() => viewFactura(factura.id)}
                                            className='btn-sm'
                                            variant='primary'
                                        >
                                            Ver Factura
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
                {selectedFacturaId && (
                    <FacturaViewer facturaId={selectedFacturaId} onClose={closeViewer} />
                )}
            </Col>
        </Row>
    );
};

export default PagosScreen;
