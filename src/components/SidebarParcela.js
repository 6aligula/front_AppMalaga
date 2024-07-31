import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, Navbar, Container, Row, Card } from 'react-bootstrap';
import { listUsosParcela, listContadoresParcela, listConsumosParcela, listDatosAdicionalesParcela, listPagosParcela } from '../actions/parcelaAction';
import UsosParcela from '../components/UsosParcela';
import DatosAdicionales from '../components/DatosAdicionales';
import ControlDePagos from '../components/ControlDePagos';
import ContadoresMedidas from '../components/ContadoresMedidas';
import Consumos from '../components/Consumos';
import './styles/SidebarParcela.css';

const SidebarParcela = ({ parcela }) => {

    const dispatch = useDispatch();

    const usosParcelaList = useSelector(state => state.usosParcelaList);
    const { loading, error, usosParcela } = usosParcelaList;

    const contadoresParcelaList = useSelector(state => state.contadoresParcelaList);
    const { loading: loadingContadores, error: errorContadores, contadores } = contadoresParcelaList;

    const consumosParcelaList = useSelector(state => state.consumosParcelaList);
    const { loading: loadingConsumos, error: errorConsumos, consumos } = consumosParcelaList;

    const datosAdicionalesParcelaList = useSelector(state => state.datosAdicionalesParcelaList);
    const { loading: loadingDatosAdicionales, error: errorDatosAdicionales, datosAdicionales } = datosAdicionalesParcelaList;

    const pagosParcelaList = useSelector(state => state.pagosParcelaList);
    const { loading: loadingPagos, error: errorPagos, controlDePagos } = pagosParcelaList;

    useEffect(() => {
        dispatch(listUsosParcela());
        dispatch(listContadoresParcela());
        dispatch(listConsumosParcela());
        dispatch(listDatosAdicionalesParcela());
        dispatch(listPagosParcela());

    }, [dispatch]);

    const [selectedComponent, setSelectedComponent] = useState('UsosParcela');

    useEffect(() => {
        // Keep selectedComponent when parcel changes
        if (!parcela) {
            setSelectedComponent('UsosParcela');
        }
    }, [parcela]);

    const renderComponent = () => {
        const filteredUsos = usosParcela.filter(uso => uso.parcela === parcela?.id);
        const filteredContadores = contadores.filter(contador => contador.parcela === parcela?.id);
        const filteredConsumos = consumos.filter(consumo => consumo.parcela === parcela?.id);
        const filteredDatosAdicionales = datosAdicionales.filter(dato => dato.parcela === parcela?.id);
        const filteredPagos = controlDePagos.filter(pago => pago.parcela === parcela?.id);

        switch (selectedComponent) {
            case 'UsosParcela':
                return <UsosParcela usos={filteredUsos} />;
            case 'ContadoresMedidas':
                return <ContadoresMedidas contadores={filteredContadores} />;
            case 'Consumos':
                return <Consumos consumos={filteredConsumos} />;
            case 'DatosAdicionales':
                return <DatosAdicionales datosAdicionales={filteredDatosAdicionales} />;
            case 'ControlDePagos':
                return <ControlDePagos pagos={filteredPagos} />;
            default:
                return <UsosParcela usos={filteredUsos} />;
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
                                    <Nav.Link
                                        className="small-font"
                                        onClick={() => setSelectedComponent('UsosParcela')}
                                        active={selectedComponent === 'UsosParcela'}
                                    >
                                        Usos en Parcela
                                    </Nav.Link>
                                    <Nav.Link
                                        className="small-font"
                                        onClick={() => setSelectedComponent('ContadoresMedidas')}
                                        active={selectedComponent === 'ContadoresMedidas'}
                                    >
                                        Contadores/Medidas
                                    </Nav.Link>
                                    <Nav.Link
                                        className="small-font"
                                        onClick={() => setSelectedComponent('Consumos')}
                                        active={selectedComponent === 'Consumos'}
                                    >
                                        Consumos
                                    </Nav.Link>
                                    <Nav.Link
                                        className="small-font"
                                        onClick={() => setSelectedComponent('DatosAdicionales')}
                                        active={selectedComponent === 'DatosAdicionales'}
                                    >
                                        Datos Adicionales
                                    </Nav.Link>
                                    <Nav.Link
                                        className="small-font"
                                        onClick={() => setSelectedComponent('ControlDePagos')}
                                        active={selectedComponent === 'ControlDePagos'}
                                    >
                                        Control de Pagos
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Card>
            </Row>

            <Row>
                {loading || loadingContadores || loadingConsumos || loadingDatosAdicionales || loadingPagos
                    ? <div>Loading...</div>
                    : error || errorContadores || errorConsumos || errorDatosAdicionales || errorPagos
                        ? <div>{error || errorContadores || errorConsumos || errorDatosAdicionales || errorPagos}</div>
                        : renderComponent()}
            </Row>
        </>
    );
};

export default SidebarParcela;
