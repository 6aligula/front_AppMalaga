import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <Container>
                    <Row>
                        <Col className='text-center py-3'>
                            Copyright Junta de Regadores Malaga&copy; 
                        </Col>

                    </Row>
                    <Row>
                        <Col className='text-center py-3'>
                            <p>
                                <a href="mailto:malaga@hotmail.com">
                                    <i className="bi bi-envelope"></i>
                                    Correo
                                </a>
                            </p>
                        </Col>

                        <Col className='text-center py-3'>
                            <p>
                                <a href="tel:+34650547854">
                                    <i className="bi bi-whatsapp"></i>
                                    WhatsApp
                                </a>
                            </p>
                        </Col>

                        <Col className='text-center py-3'>
                            <p>
                                <img></img>
                                <a href="https://www.instagram.com/">
                                    <i className="bi bi-instagram"></i>
                                    Instagram
                                </a> &middot;
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-center py-3'>
                            <p>
                                <a href="#">
                                    <i className='bi bi-arrow-up-circle-fill'>
                                    </i>
                                </a>
                            </p>
                        </Col>
                    </Row>

                </Container>
            </footer>
        </div>

    )
}

export default Footer