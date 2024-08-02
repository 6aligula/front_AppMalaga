// CultivosScreen.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import SidebarUsers from '../components/SidebarUsers';
import { listCultivos } from '../actions/cultivoActions';
import FaseCultivoDetails from '../components/FaseCultivoDetails';

const CultivosScreen = () => {
    const [selectedCultivoId, setSelectedCultivoId] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const cultivoList = useSelector((state) => state.cultivoList);
    const { loading, error, cultivos } = cultivoList;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        } else {
            dispatch(listCultivos());
        }
    }, [dispatch, navigate, userInfo]);

    const handleDetailsClick = (id) => {
        setSelectedCultivoId(id);
    };

    return (
        <Row>
            <Col md={3}>
                <SidebarUsers />
            </Col>
            <Col md={9}>
                <h2>Cultivos</h2>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <ListGroup variant="flush">
                        {cultivos.map((cultivo) => (
                            <ListGroup.Item key={cultivo.id}>
                                <Row>
                                    <Col>
                                        <strong>{cultivo.nombre}</strong>
                                    </Col>
                                    <Col className="text-right">
                                        <Button
                                            variant="primary"
                                            onClick={() => handleDetailsClick(cultivo.id)}
                                        >
                                            Detalles
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
                {selectedCultivoId && (
                    <FaseCultivoDetails cultivoId={selectedCultivoId} />
                )}
            </Col>
        </Row>
    );
};

export default CultivosScreen;
