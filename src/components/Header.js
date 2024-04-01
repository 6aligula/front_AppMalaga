import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';
import './styles/Header.css';

const Header = () => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand> 
                            <span>JUNTA CENTRAL DE USUARIOS</span>
                            <span>GUADALUSERS</span>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* Puedes poner aquí otros enlaces si es necesario */}
                        </Nav>
                        <Nav>
                            <SearchBox />
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="username">
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>Mi perfil</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Cerrar Sesión
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        <i className="fas fa-user"></i> LOGIN
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {/* Enlace externo al mapa web */}
                            <Nav.Link href="https://www.google.es/maps/@41.3134109,2.0175253,15z?entry=ttu" target="_blank">
                                MAPA WEB
                            </Nav.Link>
                            <LinkContainer to="/contact">
                                <Nav.Link>CONTACTO</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <NavDropdown title="ES/EN" id="language-dropdown">
                                <NavDropdown.Item href="#es">ES</NavDropdown.Item>
                                <NavDropdown.Item href="#en">EN</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
