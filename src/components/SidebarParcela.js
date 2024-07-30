import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, Navbar, Container, Row, Card } from 'react-bootstrap';
import { listUsosParcela } from '../actions/parcelaAction';
import UsosParcela from '../components/UsosParcela';
import DatosAdicionales from '../components/DatosAdicionales';
import ControlDePagos from '../components/ControlDePagos';
import ContadoresMedidas from '../components/ContadoresMedidas';
import Consumos from '../components/Consumos';
import './styles/SidebarParcela.css';

const SidebarParcela = () => {

    const dispatch = useDispatch();

    const usosParcelaList = useSelector(state => state.usosParcelaList);
    const { loading, error, usosParcela } = usosParcelaList;
    //console.log(usosParcela);

    useEffect(() => {
        dispatch(listUsosParcela());
    }, [dispatch]);



    const [selectedComponent, setSelectedComponent] = useState('UsosParcela');

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'UsosParcela':
                return <UsosParcela usos={usosParcela} />;
            case 'ContadoresMedidas':
                return <ContadoresMedidas />;
            case 'Consumos':
                return <Consumos />;
            case 'DatosAdicionales':
                return <DatosAdicionales />;
            case 'ControlDePagos':
                return <ControlDePagos />;
            default:
                return <UsosParcela usos={usosParcela}/>;
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
                                    <Nav.Link className="small-font" onClick={() => setSelectedComponent('UsosParcela')}>Usos en Parcela</Nav.Link>
                                    <Nav.Link className="small-font" onClick={() => setSelectedComponent('ContadoresMedidas')}>Contadores/Medidas</Nav.Link>
                                    <Nav.Link className="small-font" onClick={() => setSelectedComponent('Consumos')}>Consumos</Nav.Link>
                                    <Nav.Link className="small-font" onClick={() => setSelectedComponent('DatosAdicionales')}>Datos Adicionales</Nav.Link>
                                    <Nav.Link className="small-font" onClick={() => setSelectedComponent('ControlDePagos')}>Control de Pagos</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Card>
            </Row>

            <Row>
                {loading ? <div>Loading...</div> : error ? <div>{error}</div> : renderComponent()}
            </Row>
        </>
    );
};

export default SidebarParcela;
