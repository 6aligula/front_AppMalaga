import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/HistorySection.css'; // Asegúrate de agregar tus estilos aquí

const HistorySection = () => {
    return (
        <Container fluid className="history-section">
            <Row>
                <Col>
                    <h2>Historia de la Junta Central de Usuarios</h2>
                    <p>
                        Aquí se cuenta un poco de la historia de la Junta Central de Usuarios...
                        {/* Agrega más contenido o carga dinámicamente el contenido según sea necesario */}
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default HistorySection;
