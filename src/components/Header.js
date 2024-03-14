import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';

const Header = () => {

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        // console.log('logout');
    }

    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="/">Junta de regadores de Malaga</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <SearchBox />
                        <Nav>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Mi perfil</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Cerrar Sesión</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link><i className="fa-solid fa-user"></i>Iniciar sesión</Nav.Link>

                                </LinkContainer>
                            )}

                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    )
}

export default Header