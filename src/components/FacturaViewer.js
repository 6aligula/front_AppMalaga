import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFacturaDetails } from '../actions/facturaActions';
import { Button, Spinner, Alert } from 'react-bootstrap';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const FacturaViewer = ({ facturaId, onClose }) => {
    const dispatch = useDispatch();

    const facturaDetails = useSelector(state => state.facturaDetails);
    const { loading, error, pdfUrl } = facturaDetails;

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
        if (facturaId) {
            dispatch(getFacturaDetails(facturaId));
        }
    }, [dispatch, facturaId]);

    return (
        <div>
            {loading ? (
                <Spinner animation="border" />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : pdfUrl ? (
                <div>
                    <Button variant="secondary" onClick={onClose}>Cerrar</Button>
                    <div style={{ height: '750px' }}>
                        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
                            <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
                        </Worker>
                    </div>
                </div>
            ) : (
                <div>Seleccione una factura para visualizar.</div>
            )}
        </div>
    );
};

export default FacturaViewer;
