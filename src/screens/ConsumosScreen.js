import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import SidebarUsers from '../components/SidebarUsers';
import { listPeticiones, createPeticion } from '../actions/peticionActions';

const ConsumosScreen = () => {
    const [mensaje, setMensaje] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const peticionList = useSelector(state => state.peticionList);
    const { loading, error, peticiones } = peticionList;

    const peticionCreate = useSelector(state => state.peticionCreate);
    const { loading: loadingCreate, error: errorCreate, success: successCreate } = peticionCreate;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        } else {
            dispatch(listPeticiones());
        }
    }, [dispatch, navigate, userInfo, successCreate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createPeticion({ mensaje }));
        setMensaje('');
    };

    return (
        <Row>
            <Col md={3}>
                <SidebarUsers />
            </Col>
            <Col md={9}>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <>
                        <h2>Peticiones de Consumos</h2>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='mensaje'>
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Ingrese su petición'
                                    value={mensaje}
                                    onChange={(e) => setMensaje(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Button type='submit' variant='primary'>
                                Enviar
                            </Button>
                        </Form>
                        {loadingCreate && <Loader />}
                        {errorCreate && <Message variant="danger">{errorCreate}</Message>}
                        <hr />
                        <h3>Mis Peticiones</h3>
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>Mensaje</th>
                                    <th>Fecha</th>
                                    <th>Procesado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {peticiones.map(peticion => (
                                    <tr key={peticion.id}>
                                        <td>{peticion.mensaje}</td>
                                        <td>{new Date(peticion.fecha).toLocaleString()}</td>
                                        <td>{peticion.procesado ? 'Sí' : 'No'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </>
                )}
            </Col>
        </Row>
    );
};

export default ConsumosScreen;
