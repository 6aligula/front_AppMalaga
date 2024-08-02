import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import SidebarUsers from '../components/SidebarUsers';
import { listIncidencias, createIncidencia } from '../actions/incidenciaActions';

const IncidenciaScreen = () => {
    const [mensaje, setMensaje] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const incidenciaList = useSelector(state => state.incidenciaList);
    const { loading, error, incidencias } = incidenciaList;

    const incidenciaCreate = useSelector(state => state.incidenciaCreate);
    const { loading: loadingCreate, error: errorCreate, success: successCreate } = incidenciaCreate;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        } else {
            dispatch(listIncidencias());
        }
    }, [dispatch, navigate, userInfo, successCreate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createIncidencia({ mensaje }));
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
                        <h2>Incidencia/mantenimiento</h2>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='mensaje'>
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Se escribe incidencia o mantenimiento que hay que realizar'
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
                        <h3>Mis Incidencias</h3>
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>Mensaje</th>
                                    <th>Fecha</th>
                                    <th>Procesado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {incidencias.map(incidencia => (
                                    <tr key={incidencia.id}>
                                        <td>{incidencia.mensaje}</td>
                                        <td>{new Date(incidencia.fecha).toLocaleString()}</td>
                                        <td>{incidencia.procesado ? 'Sí' : 'No'}</td>
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

export default IncidenciaScreen;
