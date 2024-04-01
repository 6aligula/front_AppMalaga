import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
//import MainContent from '../components/MainContent'; // Suponiendo que tienes un componente para el contenido principal
//import Advertising from '../components/Advertising'; // Suponiendo que tienes un componente para la publicidad
import Footer from "../components/Footer";
//import './HomeScreen.css'; // No olvides incluir tus estilos

const HomeScreen = () => {
    // Puedes utilizar useDispatch y useSelector aquí si necesitas gestionar el estado de Redux

    return (
        <div>
            <Row className="mx-0">
                <Col md={3} className="px-0">
                    <Sidebar />
                </Col>
                {/* <Col md={9} className="px-0">
                    <MainContent />
                    <Advertising />
                </Col> */}
            </Row>
            <Footer />
        </div>
    );
}

export default HomeScreen;
