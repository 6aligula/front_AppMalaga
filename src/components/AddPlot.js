// components/AddPlot.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { addPlot } from '../actions/plotActions';
import Loader from './Loader';
import Message from './Message';

const AddPlot = () => {
    const [name, setName] = useState('');
    const [coordinates, setCoordinates] = useState([{ lat: '', lng: '' }]);

    const dispatch = useDispatch();

    const plotAdd = useSelector(state => state.plotAdd);
    const { loading, error, success } = plotAdd;

    const handleCoordinateChange = (index, field, value) => {
        const newCoordinates = [...coordinates];
        newCoordinates[index][field] = value;
        setCoordinates(newCoordinates);
    };

    const addCoordinate = () => {
        setCoordinates([...coordinates, { lat: '', lng: '' }]);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const formattedCoordinates = coordinates.map(coord => [parseFloat(coord.lng), parseFloat(coord.lat)]);
        // Ensure the polygon is closed by repeating the first coordinate at the end
        if (formattedCoordinates.length > 0) {
            formattedCoordinates.push(formattedCoordinates[0]);
        }
        const plot = {
            name: name,
            bounds: {
                type: 'Polygon',
                coordinates: [formattedCoordinates]
            }
        };
        dispatch(addPlot(plot));
    };

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
                <Form.Label>Nombre de la parcela</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Ingrese el nombre de la parcela'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></Form.Control>
            </Form.Group>

            {coordinates.map((coord, index) => (
                <Row key={index}>
                    <Col>
                        <Form.Group controlId={`lat-${index}`}>
                            <Form.Label>Latitud {index + 1}</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder={`Latitud ${index + 1}`}
                                value={coord.lat}
                                onChange={(e) => handleCoordinateChange(index, 'lat', e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId={`lng-${index}`}>
                            <Form.Label>Longitud {index + 1}</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder={`Longitud ${index + 1}`}
                                value={coord.lng}
                                onChange={(e) => handleCoordinateChange(index, 'lng', e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            ))}
<hr />
            <Button variant='secondary' onClick={addCoordinate}>
                Añadir Coordenada
            </Button>
            <hr />
            <Form.Text className="text-muted">
                Ejemplo de coordenadas: <br />
                Coordenada 1: Latitud 36.720238, Longitud -4.424046 <br />
                Coordenada 2: Latitud 36.720367, Longitud -4.423671 <br />
                Coordenada 3: Latitud 36.719747, Longitud -4.423435 <br />
                Coordenada 4: Latitud 36.719661, Longitud -4.424003 <br />
            </Form.Text>


            <Button type='submit' variant='primary'>
                Agregar Parcela
            </Button>
            <hr />
            {loading && <Loader />}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>Parcela agregada exitosamente</Message>}
        </Form>
    );
};

export default AddPlot;
