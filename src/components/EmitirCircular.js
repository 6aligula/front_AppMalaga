import React, { useRef, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './styles/Circular.css'; // Asegúrate de tener este archivo CSS

const EmitirCircular = () => {
    const editorRef = useRef(null);
    let quill;

    useEffect(() => {
        quill = new Quill(editorRef.current, {
            theme: 'snow',
            placeholder: 'Aquí que se escriba toda la circular...',
        });
    }, []);

    const handlePrint = async () => {
        const content = editorRef.current;
        html2canvas(content).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('circular.pdf');
        });
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h2>Emitir Circular</h2>
                    <div ref={editorRef} className="editor" />
                    <hr />
                    <Button variant="primary" onClick={handlePrint}>
                        Imprimir
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default EmitirCircular;
