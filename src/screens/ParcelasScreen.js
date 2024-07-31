import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Form, Card } from 'react-bootstrap';
import CaracteristicasParcela from '../components/CaracteristicasParcela';
import SidebarUsers from '../components/SidebarUsers';
import SidebarParcela from '../components/SidebarParcela';
import { listCaracteristicasParcela } from '../actions/parcelaAction';
import './styles/ParcelasScreen.css';

const ParcelasScreen = () => {
    const dispatch = useDispatch();

    const caracteristicasParcelaList = useSelector(state => state.caracteristicasParcelaList);
    const { loading, error, caracteristicas } = caracteristicasParcelaList;

    const [selectedParcela, setSelectedParcela] = useState(null);

    useEffect(() => {
        dispatch(listCaracteristicasParcela());
    }, [dispatch]);

    useEffect(() => {
        if (caracteristicas.length > 0) {
            setSelectedParcela(caracteristicas[0]);
        }
    }, [caracteristicas]);

    const handleParcelaChange = (event) => {
        const parcelaId = event.target.value;
        const parcela = caracteristicas.find(p => p.id === parseInt(parcelaId));
        setSelectedParcela(parcela);
    };

    return (
        <>
            <Row>
                <Col md={3}>
                    <SidebarUsers />
                </Col>
                <Col md={9}>
                    <Card className='mb-3'>
                        <Card.Header>Seleccionar Parcela</Card.Header>
                        <Card.Body>
                            <Form.Group controlId="formParcelaSelect">
                                <Form.Control 
                                    as="select" 
                                    onChange={handleParcelaChange} 
                                    value={selectedParcela?.id || ''}
                                    className="custom-select"
                                >
                                    {caracteristicas.map(parcela => (
                                        <option key={parcela.id} value={parcela.id}>
                                            {parcela.identificacion}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                    <CaracteristicasParcela
                        loading={loading}
                        error={error}
                        parcela={selectedParcela}
                    />
                    <SidebarParcela parcela={selectedParcela} />
                </Col>

            </Row>

        </>
    );
};

export default ParcelasScreen;
