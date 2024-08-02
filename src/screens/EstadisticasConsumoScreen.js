import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SidebarUsers from '../components/SidebarUsers';
import ConsumoChart from '../components/ConsumoChart';

const EstadisticasConsumoScreen = () => {
    return (
        <Row>
            <Col md={3}>
                <SidebarUsers />
            </Col>
            <Col md={9}>
                <ConsumoChart />
            </Col>
        </Row>
    );
};

export default EstadisticasConsumoScreen;
