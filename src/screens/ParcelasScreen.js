import React from 'react';
import CaracteristicasParcela from '../components/CaracteristicasParcela';
import { Row } from 'react-bootstrap';
import SidebarParcela from '../components/SidebarParcela';

const ParcelasScreen = () => {
    return (
        <>
            <h3>Parcelas</h3>
            <Row>
                <CaracteristicasParcela />
            </Row>
            <Row>
                <SidebarParcela />
            </Row>
        </>

    );
};

export default ParcelasScreen;
