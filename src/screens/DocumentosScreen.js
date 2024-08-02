// DocumentosScreen.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import SidebarUsers from '../components/SidebarUsers';
import { listDocumentos, createDocumento } from '../actions/documentActions';
import { DOCUMENTO_CREATE_RESET } from '../constants/documentConstants';
import DocumentoDetalles from '../components/DocumentoDetalles';
import './styles/DocumentosScreen.css';

const DocumentosScreen = () => {
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [fecha, setFecha] = useState('');
    const [asunto, setAsunto] = useState('');
    const [localizacion, setLocalizacion] = useState('');
    const [dirig, setDirig] = useState('');
    const [rutaArchivo, setRutaArchivo] = useState('');
    const [observaciones, setObservaciones] = useState('');
    const [entrada, setEntrada] = useState(true);
    const [salida, setSalida] = useState(true);
    const [selectedDocumentoId, setSelectedDocumentoId] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const documentoList = useSelector((state) => state.documentoList);
    const { loading: loadingList, error: errorList, documentos } = documentoList;

    const documentoCreate = useSelector((state) => state.documentoCreate);
    const { loading: loadingCreate, error: errorCreate, success: successCreate } = documentoCreate;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        } else {
            dispatch(listDocumentos());
        }
        if (successCreate) {
            dispatch({ type: DOCUMENTO_CREATE_RESET });
            dispatch(listDocumentos());
        }
    }, [dispatch, navigate, userInfo, successCreate]);

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('numero_documento', numeroDocumento);
        formData.append('fecha', fecha);
        formData.append('asunto', asunto);
        formData.append('localizacion', localizacion);
        formData.append('dirig', dirig);
        formData.append('ruta_archivo', rutaArchivo);
        formData.append('observaciones', observaciones);
        formData.append('entrada', entrada);
        formData.append('salida', salida);

        dispatch(createDocumento(formData));
    };

    const handleDetailsClick = (id) => {
        setSelectedDocumentoId(id);
    };

    return (
        <Row>
            <Col md={3}>
                <SidebarUsers />
            </Col>
            <Col md={9}>
                <h2>Registro de documentos</h2>
                {loadingCreate && <Loader />}
                {errorCreate && <Message variant="danger">{errorCreate}</Message>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='numeroDocumento'>
                        <Form.Label>Número de Documento</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Ingrese número de documento'
                            value={numeroDocumento}
                            onChange={(e) => setNumeroDocumento(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='fecha'>
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control
                            type='date'
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='asunto'>
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Ingrese asunto'
                            value={asunto}
                            onChange={(e) => setAsunto(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='localizacion'>
                        <Form.Label>Localización</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Ingrese localización'
                            value={localizacion}
                            onChange={(e) => setLocalizacion(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='dirig'>
                        <Form.Label>Dirigido a</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Ingrese destinatario'
                            value={dirig}
                            onChange={(e) => setDirig(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='rutaArchivo'>
                        <Form.Label>Ruta de Archivo</Form.Label>
                        <Form.Control
                            type='file'
                            onChange={(e) => setRutaArchivo(e.target.files[0])}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='observaciones'>
                        <Form.Label>Observaciones</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Ingrese observaciones'
                            value={observaciones}
                            onChange={(e) => setObservaciones(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='entrada'>
                        <Form.Check
                            type='checkbox'
                            label='Entrada'
                            checked={entrada}
                            onChange={(e) => setEntrada(e.target.checked)}
                        />
                    </Form.Group>

                    <Form.Group controlId='salida'>
                        <Form.Check
                            type='checkbox'
                            label='Salida'
                            checked={salida}
                            onChange={(e) => setSalida(e.target.checked)}
                        />
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Enviar
                    </Button>
                </Form>

                <h3>Listado de documentos</h3>
                {loadingList ? (
                    <Loader />
                ) : errorList ? (
                    <Message variant="danger">{errorList}</Message>
                ) : documentos.length === 0 ? (
                    <Message variant="info">No hay documentos para mostrar</Message>
                ) : (
                    <ListGroup variant='flush'>
                        <ListGroup.Item className="list-header">
                            <Row>
                                <Col><strong>Número de Documento</strong></Col>
                                <Col><strong>Asunto</strong></Col>
                                <Col><strong>Fecha</strong></Col>
                                <Col><strong>Entrada</strong></Col>    
                                <Col><strong>Salida</strong></Col>    
                            </Row>
                        </ListGroup.Item>
                        {documentos.map(documento => (
                            <ListGroup.Item
                                key={documento.id}
                                onClick={() => handleDetailsClick(documento.id)}
                                className="clickable"
                            >
                                <Row>
                                    <Col>{documento.numero_documento}</Col>
                                    <Col>{documento.asunto}</Col>
                                    <Col>{documento.fecha}</Col>
                                    <Col>{documento.entrada ? 'SI' : 'NO'}</Col>
                                    <Col>{documento.salida ? 'SI' : 'NO'}</Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}

                <DocumentoDetalles documentoId={selectedDocumentoId} />
            </Col>
        </Row>
    );
};

export default DocumentosScreen;
