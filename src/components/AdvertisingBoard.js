import React from 'react';
import { Card } from 'react-bootstrap';
import './styles/AdvertisingBoard.css';
/*
El componente AdvertisingBoard asume que recibes un array de anuncios advertisements, donde cada anuncio 
tiene al menos un title y una description. Lo ideal sería que estos datos vinieran de tu estado global o se
cargaran desde una API.
 */

const AdvertisingBoard = ({ advertisements }) => {
    return (
        <div className="advertising-board">
            <h3>TABLÓN DE PUBLICIDAD</h3>
            {advertisements.map((ad, index) => (
                <Card key={index} className="mb-2">
                    <Card.Body>
                        <Card.Title>{ad.title}</Card.Title>
                        <Card.Text>
                            {ad.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default AdvertisingBoard;
