import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { getComunidadDetails, updateComunidad } from '../actions/comunidadActions';
import { COMUNIDAD_DETAILS_RESET, COMUNIDAD_UPDATE_PROFILE_RESET } from '../constants/comunidadConstants';
import SidebarUsers from '../components/SidebarUsers';
import DatosComunidades from '../components/DatosComunidades';
import DatosBancarios from '../components/DatosBancarios';
import CargosComunidad from '../components/CargosComunidad';

const DatosComunidadScreen = () => {
    const [comunidadData, setComunidadData] = useState([]);
    // const handleComunidadUpdate = (newData) => {
    //     setComunidadData(prevData => [
    //         ...prevData.filter(com => com.id !== newData.id), // Remueve la comunidad actualizada
    //         newData // Agrega la comunidad actualizada
    //     ]);
    // };

    const handleComunidadUpdate = (newData) => {
        setComunidadData(prevData => {
            const updatedData = prevData.map(com =>
                com.id === newData.id ? newData : com
            );
            return updatedData;
        });
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const comunidadDetails = useSelector(state => state.comunidadDetails);
    const { loading: loadingComunidad, error: errorComunidad, comunidad } = comunidadDetails;

    const comunidadUpdate = useSelector(state => state.comunidadUpdateProfile);
    const { success: successUpdate, error: errorUpdate } = comunidadUpdate;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        } else {
            if (successUpdate) {
                dispatch({ type: COMUNIDAD_UPDATE_PROFILE_RESET });
            }
            if (!comunidad.length || successUpdate) {
                dispatch({ type: COMUNIDAD_DETAILS_RESET });
                dispatch(getComunidadDetails());
            }
        }
    }, [dispatch, navigate, userInfo, successUpdate, comunidad.length]);

    useEffect(() => {
        if (comunidad) {
            setComunidadData(comunidad);
            console.log('comunidad');
        }
    }, [comunidad]);

    const submitHandler = (e) => {
        e.preventDefault();
        //console.log('actualizando', comunidadData);
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
                ) : errorComunidad || errorUpdate ? (
                    <Message variant="danger">error obteniendo datos: {errorComunidad}, error cambiando datos {errorUpdate} </Message>
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
                {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
            </Col>
        </Row>
    );

};

export default DatosComunidadScreen;
