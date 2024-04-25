import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMap } from 'react-leaflet';
import './styles/Map.css';

const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

const Mapa = () => {
  const initialPosition = [36.7213028, -4.4216366];
  const [position, setPosition] = useState(initialPosition);
  const [polygon, setPolygon] = useState([]);

  const loadLocations = () => {
    fetch('http://192.168.1.165:8000/api/geo/get/plot/')
      .then(res => res.json())
      .then(data => {
        console.log('Data:', data);
        const features = data.features;
        // Asume que solo hay un polígono por simplicidad
        const firstFeature = features[0];
        if (firstFeature.geometry.type === "Polygon") {
          const polygonCoordinates = firstFeature.geometry.coordinates[0]; // Obtiene el primer polígono
          // Invierte todas las coordenadas
          const correctedCoordinates = polygonCoordinates.map(coord => [coord[1], coord[0]]);
          setPosition(correctedCoordinates[0]); // Centra el mapa en la primera coordenada del polígono ya corregida
          setPolygon(correctedCoordinates);
        }
      })
      .catch(err => console.error('Error fetching locations:', err));
  };

  return (
    <div>
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <ChangeView center={position} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; Contributors'
        />
        {polygon.length > 0 && <Polygon positions={polygon} />}
      </MapContainer>
      <button onClick={loadLocations} style={{ margin: '20px' }}>
        Cargar Ubicaciones
      </button>
    </div>
  );
};

export default Mapa;
