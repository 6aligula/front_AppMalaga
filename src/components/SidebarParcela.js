import React, { useState } from 'react';
import { Nav, Navbar, Container, Row, Card } from 'react-bootstrap';
import UsosParcela from '../components/UsosParcela';
import DatosAdicionales from '../components/DatosAdicionales';
import ControlDePagos from '../components/ControlDePagos';
import ContadoresMedidas from '../components/ContadoresMedidas';
import Consumos from '../components/Consumos';

const SidebarParcela = () => {
    const [usos, setUsos] = useState([
        {
            tipoUso: 'Agrícola',
            cultivo: 'Algodón',
            superficie: '2,0000',
            sistemaRiego: 'Goteo',
            estado: 'Regular',
            fechaAlta: '01-01-2021',
            fechaBaja: '',
        },
        {
            tipoUso: 'Ganadero',
            cultivo: 'Mangos',
            superficie: '1,7000',
            sistemaRiego: 'Aspersión',
            estado: 'Irregular',
            fechaAlta: '01-06-2020',
            fechaBaja: '01-01-2022',
        },
    ]);
    const [isAdmin, setIsAdmin] = useState(true);

    const handleUpdate = (updatedUsos) => {
        setUsos(updatedUsos);
    };

    const [selectedComponent, setSelectedComponent] = useState('UsosParcela');

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'UsosParcela':
                return <UsosParcela usos={usos} isAdmin={isAdmin} onUpdate={handleUpdate} />;
            case 'ContadoresMedidas':
                return <ContadoresMedidas />;
            case 'Consumos':
                return <Consumos />;
            case 'DatosAdicionales':
                return <DatosAdicionales />;
            case 'ControlDePagos':
                return <ControlDePagos />;
            default:
                return <UsosParcela usos={usos} isAdmin={isAdmin} onUpdate={handleUpdate} />;
        }
    };

    return (
        <>
            <Row>
                <Card>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="responsive-sidebar-nav" />
                            <Navbar.Collapse id="responsive-sidebar-nav">
                                <Nav >
                                    <Nav.Link onClick={() => setSelectedComponent('UsosParcela')}>Usos en Parcela</Nav.Link>
                                    <Nav.Link onClick={() => setSelectedComponent('ContadoresMedidas')}>Contadores/Medidas</Nav.Link>
                                    <Nav.Link onClick={() => setSelectedComponent('Consumos')}>Consumos</Nav.Link>
                                    <Nav.Link onClick={() => setSelectedComponent('DatosAdicionales')}>Datos Adicionales</Nav.Link>
                                    <Nav.Link onClick={() => setSelectedComponent('ControlDePagos')}>Control de Pagos</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Card>
            </Row>

            <Row>
                {renderComponent()}
            </Row>
        </>
    );
};

export default SidebarParcela;
