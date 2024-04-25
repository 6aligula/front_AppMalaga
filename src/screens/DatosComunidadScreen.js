import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import SidebarUsers from '../components/SidebarUsers';
import DatosPersonales from '../components/DatosPersonales';
import DatosBancarios from '../components/DatosBancarios';
import CargosComunidad from '../components/CargosComunidad';

const DatosComunidadScreen = () => {
    const [perfilData, setPerfilData] = useState({});

    const handlePerfilUpdate = (newData) => {
        setPerfilData(prevData => ({
            ...prevData, // Conserva el estado anterior
            ...newData   // Aplica los cambios nuevos
        }));
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userDetails = useSelector(state => state.userDetails);
    const { error, loading, user } = userDetails;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { success } = userUpdateProfile;


    useEffect(() => {

        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user || !user.name || success || userInfo._id !== user._id) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
            }
        }
    }, [dispatch, navigate, userInfo, user, success])


    const submitHandler = (e) => {
        e.preventDefault();
        console.log('actualizando', perfilData);
        dispatch(updateUserProfile(perfilData)); // Asegúrate que esta acción maneja el objeto correctamente
    };

    return (

        <Row>
            <Col md={3}>
                <SidebarUsers />
            </Col>
            <Col md={8}>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : user && user.perfil ? (
                    <>
                        <DatosPersonales userData={user} isAdmin={userInfo.isAdmin} onUpdate={handlePerfilUpdate} />
                        <DatosBancarios perfil={user.perfil} isAdmin={userInfo.isAdmin} onUpdate={handlePerfilUpdate} />
                        <CargosComunidad userData={user} perfil={user.perfil} isAdmin={userInfo.isAdmin} onUpdate={handlePerfilUpdate} />
                        {userInfo.isAdmin && (
                            <Button variant="primary" onClick={submitHandler}>
                                Actualizar
                            </Button>
                        )}
                    </>
                ) : (
                    <Message variant="warning">No se encontraron datos del usuario.</Message>
                )}
            </Col>
        </Row>


    );
};

export default DatosComunidadScreen;
