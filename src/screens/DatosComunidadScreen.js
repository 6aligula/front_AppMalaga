import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { getComunidadDetails, updateComunidad } from '../actions/comunidadActions';
import { COMUNIDAD_DETAILS_RESET } from '../constants/comunidadConstants';
import SidebarUsers from '../components/SidebarUsers';
import DatosComunidades from '../components/DatosComunidades';
import DatosBancarios from '../components/DatosBancarios';
import CargosComunidad from '../components/CargosComunidad';

const DatosComunidadScreen = () => {
    const [comunidadData, setComunidadData] = useState([]);

    const handleComunidadUpdate = (newData) => {
        setComunidadData(prevData => [
            ...prevData.filter(com => com.id !== newData.id), // Remueve la comunidad actualizada
            newData // Agrega la comunidad actualizada
        ]);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const comunidadDetails = useSelector(state => state.comunidadDetails);
    const { loading: loadingComunidad, error: errorComunidad, comunidad } = comunidadDetails;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        } else {
            dispatch({ type: COMUNIDAD_DETAILS_RESET });
            dispatch(getComunidadDetails());
        }
    }, [dispatch, navigate, userInfo]);
    

    useEffect(() => {
        if (comunidad) {
            setComunidadData(comunidad);
        }
    }, [comunidad]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('actualizando', comunidadData);
        dispatch(updateComunidad(comunidadData)); // Actualiza la comunidad
    };

    return (
        <Row>
            <Col md={3}>
                <SidebarUsers />
            </Col>
            <Col md={8}>
                {loadingComunidad ? (
                    <Loader />
                ) : errorComunidad ? (
                    <Message variant="danger">{errorComunidad}</Message>
                ) : comunidadData.length ? (
                    <>
                        {comunidadData.map(comunidad => (
                            <React.Fragment key={comunidad.id}>
                                <DatosComunidades 
                                    comunidadData={comunidad} 
                                    isAdmin={userInfo ? userInfo.isAdmin : false} 
                                    onUpdate={handleComunidadUpdate} 
                                />
                                <DatosBancarios 
                                    perfil={comunidad} 
                                    isAdmin={userInfo ? userInfo.isAdmin : false} 
                                    onUpdate={handleComunidadUpdate} 
                                />
                                <CargosComunidad 
                                    perfil={comunidad} 
                                    isAdmin={userInfo ? userInfo.isAdmin : false} 
                                    onUpdate={handleComunidadUpdate} 
                                />
                            </React.Fragment>
                        ))}
                        {userInfo && userInfo.isAdmin && (
                            <Button variant="primary" onClick={submitHandler}>
                                Actualizar
                            </Button>
                        )}
                    </>
                ) : (
                    <Message variant="warning">No se encontraron datos de la comunidad.</Message>
                )}
            </Col>
        </Row>
    );
    
};

export default DatosComunidadScreen;
