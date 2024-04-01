import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
//import MainContent from '../components/MainContent'; // Suponiendo que tienes un componente para el contenido principal
import AdvertisingBoard from '../components/AdvertisingBoard';
import Footer from "../components/Footer";
import foto from "../img/campo.webp";

/*
En este ejemplo, el Sidebar y el AdvertisingBoard ocuparán 3 de 12 partes del espacio cuando la pantalla sea
extra grande (xl, es decir, 1400px o más), pero para tamaños lg (992px o más) y md (768px o más) ocuparán
4 y 12 partes respectivamente. Esto hará que el Sidebar se coloque encima o debajo del contenido principal
e imagen en pantallas más pequeñas, en lugar de superponerse.
 */
const HomeScreen = () => {
    // Imagina que tienes un estado o vienen de Redux
    const advertisements = [
        { title: 'Anuncio 1', description: 'Descripción del anuncio 1...' },
        { title: 'Anuncio 2', description: 'Descripción del anuncio 2...' },
        // ...otros anuncios
    ];

    return (
        <Container fluid>
            <Row>
                <Col xl={3} lg={4} md={12}>
                    <Sidebar />
                </Col>
                <Col xl={6} lg={8} md={12}>
                    <img src={foto} alt="Malaga" style={{ width: '100%', height: 'auto' }} />
                </Col>
                <Col xl={3} lg={12} md={12}>
                    <AdvertisingBoard advertisements={advertisements} />
                </Col>
            </Row>
        </Container>
    );
    
}

export default HomeScreen;
