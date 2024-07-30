import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import CaracteristicasParcela from '../components/CaracteristicasParcela';
import SidebarUsers from '../components/SidebarUsers';
import SidebarParcela from '../components/SidebarParcela';
import { listCaracteristicasParcela } from '../actions/parcelaAction';

const ParcelasScreen = () => {
    const dispatch = useDispatch();

    const caracteristicasParcelaList = useSelector(state => state.caracteristicasParcelaList);
    const { loading, error, caracteristicas } = caracteristicasParcelaList;

    useEffect(() => {
        dispatch(listCaracteristicasParcela());
    }, [dispatch]);

    return (
        <>
            <Row>
                <Col md={3}>
                    <SidebarUsers />
                </Col>
                <Col md={9}>
                    <CaracteristicasParcela
                        loading={loading}
                        error={error}
                        caracteristicas={caracteristicas}
                    />
                    <SidebarParcela />
                </Col>

            </Row>

        </>
    );
};

export default ParcelasScreen;
