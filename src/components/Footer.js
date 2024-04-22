import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './styles/Footer.css';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {
    return (
        <div>
            <footer>
                <Container>
                    <Row className='text-center py-3'>
                        <Col>
                            <LinkContainer to="/accesibilidad">
                                <Nav.Link>Accesibilidad</Nav.Link>
                            </LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to="/aviso-legal">
                                <Nav.Link>Aviso legal</Nav.Link>
                            </LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to="/canal-denuncias">
                                <Nav.Link>Canal de denuncias interno</Nav.Link>
                            </LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to="/politica-cookies">
                                <Nav.Link>Política de cookies</Nav.Link>
                            </LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to="/proteccion-datos">
                                <Nav.Link>Protección de datos</Nav.Link>
                            </LinkContainer>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>

    )
}

export default Footer