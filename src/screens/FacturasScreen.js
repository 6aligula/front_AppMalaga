import React, { useEffect, useState } from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listFacturas } from '../actions/facturaActions';
import SidebarUsers from '../components/SidebarUsers';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FacturaViewer from '../components/FacturaViewer';

const FacturasScreen = () => {
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
                <h2>Facturas</h2>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <ListGroup variant="flush">
                        {facturas.map(factura => (
                            <ListGroup.Item key={factura.id}>
                                <Row>
                                    <Col>
                                        <strong>Factura No:</strong> {factura.numero_factura}
                                    </Col>
                                    <Col>
                                        <strong>Fecha de Emisión:</strong> {factura.fecha_emision}
                                    </Col>
                                    <Col>
                                        <Button
                                            onClick={() => viewFactura(factura.id)}
                                            className='btn-sm'
                                            variant='primary'
                                        >
                                            Ver Factura
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
                {selectedFacturaId && (
                    <FacturaViewer facturaId={selectedFacturaId} onClose={closeViewer} />
                )}
            </Col>
        </Row>
    );
};

export default FacturasScreen;
