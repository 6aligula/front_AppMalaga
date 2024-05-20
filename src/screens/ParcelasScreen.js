import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import CaracteristicasParcela from '../components/CaracteristicasParcela';
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
            <h3>Parcelas</h3>
            <Row>
                <CaracteristicasParcela 
                    loading={loading}
                    error={error}
                    caracteristicas={caracteristicas}
                />
            </Row>
            <Row>
                <SidebarParcela />
            </Row>
        </>
    );
};

export default ParcelasScreen;
