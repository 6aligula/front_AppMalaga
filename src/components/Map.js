import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import './styles/Map.css';

// Componente para centrar el mapa
const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

const Mapa = () => {
  const initialPosition = [36.7213028, -4.4216366]; // Por ejemplo, Málaga
  const [position, setPosition] = useState(initialPosition);
  const [locations, setLocations] = useState([]);

  // Función para cargar las ubicaciones desde la API
  const loadLocations = () => {
    fetch('http://192.168.1.165:8000/api/geo/')
      .then(res => res.json())
      .then(data => {
        console.log('Locations:', data);
        const transformedLocations = data.features.map(feature => {
          // Verifica que la geometría y las coordenadas existan
          if (feature.geometry && feature.geometry.coordinates && feature.geometry.coordinates.length >= 2) {
            return {
              id: feature.id,
              type: feature.type,
              position: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
              name: feature.properties.name,
            };
          } else {
            console.warn('Feature sin geometría o con geometría inválida:', feature);
            return null;
          }
        }).filter(loc => loc !== null); // Elimina los posibles valores null del resultado

        // Suponiendo que 'transformedLocations' es tu array de ubicaciones transformadas
        if (transformedLocations.length > 0) {
          // Actualiza el centro del mapa a la primera ubicación
          setPosition(transformedLocations[0].position);
        }
        setLocations(transformedLocations);
      })
      .catch(err => console.error('Error fetching locations:', err));
  };


  return (
    <div>
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <ChangeView center={position} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Itera sobre locations para crear un Marker por cada uno */}
        {locations.map(loc => (
          <Marker key={loc.id} position={loc.position}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* Botón para cargar las ubicaciones */}
      <button onClick={loadLocations} style={{ margin: '20px' }}>
        Cargar Ubicaciones
      </button>
    </div>
  );
};

export default Mapa;
