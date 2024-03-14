import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles/Map.css';

const Mapa = () => {
  // Define la posición inicial del mapa
  const position = [36.7213028, -4.4216366]; // Latitud y longitud de Málaga


  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Agrega un marcador con un popup como ejemplo */}
      <Marker position={position}>
        <Popup>
          Un marcador en OpenStreetMap.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
