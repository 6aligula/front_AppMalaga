import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles/SidebarUsers.css'; // Tu archivo de estilos

const SidebarUsers = () => {
    const [open, setOpen] = useState(false); // Cambiado a false para que inicie cerrado como en el Header

    return (
        <div className="sidebar">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle onClick={() => setOpen(!open)} aria-controls="responsive-sidebar-nav" />
                    <Navbar.Collapse in={open} id="responsive-sidebar-nav">
                        <Nav className="me-auto flex-column">
                            <Nav.Link as={NavLink} to="/DatosComunidad">Datos Comunidad de Regantes</Nav.Link>
                            <Nav.Link as={NavLink} to="/DatosAgua">Datos del Usuario del Agua</Nav.Link>
                            <Nav.Link as={NavLink} to="/parcelario">Parcelario</Nav.Link>
                            <Nav.Link as={NavLink} to="/peticion-consumos">Petición de Consumos</Nav.Link>
                            {/* <Nav.Link as={NavLink} to="/anadir-lecturas">Añadir Lecturas</Nav.Link> */}
                            <Nav.Link as={NavLink} to="/facturas">Facturas</Nav.Link>
                            <Nav.Link as={NavLink} to="/control-pagos">Control de Pagos</Nav.Link>
                            <Nav.Link as={NavLink} to="/generar-informes">Generar Informes</Nav.Link>
                            <Nav.Link as={NavLink} to="/registro-documentos">Registro de Documentos</Nav.Link>
                            <Nav.Link as={NavLink} to="/incidencias-mantenimiento">Incidencias y Mantenimiento</Nav.Link>
                            <Nav.Link as={NavLink} to="/cultivos">Inventario de Cultivos</Nav.Link>
                            <Nav.Link as={NavLink} to="/estadistica-consumo">Estadística de Consumo</Nav.Link>
                            <Nav.Link as={NavLink} to="/emitir-circular">Emitir circular</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default SidebarUsers;
