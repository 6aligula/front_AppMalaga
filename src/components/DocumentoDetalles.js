// DocumentoDetalles.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { getDocumentoDetails } from '../actions/documentActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const DocumentoDetalles = ({ documentoId }) => {
    const dispatch = useDispatch();

    const documentoDetails = useSelector((state) => state.documentoDetails);
    const { loading, error, documento } = documentoDetails;

    useEffect(() => {
        if (documentoId) {
            dispatch(getDocumentoDetails(documentoId));
        }
    }, [dispatch, documentoId]);

    if (!documentoId) {
        return null; // No mostrar nada si no hay documentoId
    }

    const fileUrl = `/media/documentos/${documento.ruta_archivo}`;

    return (
        <Row>
            <Col>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <Card>
                        <Card.Header>Detalles del Documento</Card.Header>
                        <Card.Body>
                            <p><strong>Número de Documento:</strong> {documento.numero_documento}</p>
                            <p><strong>Fecha:</strong> {documento.fecha}</p>
                            <p><strong>Asunto:</strong> {documento.asunto}</p>
                            <p><strong>Localización:</strong> {documento.localizacion}</p>
                            <p><strong>Dirigido a:</strong> {documento.dirig}</p>
                            <p><strong>Observaciones:</strong> {documento.observaciones}</p>
                            <p><strong>Entrada:</strong> {documento.entrada ? 'Sí' : 'No'}</p>
                            <p><strong>Salida:</strong> {documento.salida ? 'Sí' : 'No'}</p>
                            {documento.ruta_archivo && (
                                <p><strong>Archivo:</strong> <a href={fileUrl} download>Descargar</a></p>
                            )}
                            <Button variant="secondary" onClick={() => window.history.back()}>Volver</Button>
                        </Card.Body>
                    </Card>
                )}
            </Col>
        </Row>
    );
};

export default DocumentoDetalles;
