import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polygon, useMap } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { listPlots } from '../actions/plotActions';
import Loader from '../components/Loader';
import './styles/Map.css';

const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

const Mapa = () => {
  const dispatch = useDispatch();
  const plotList = useSelector((state) => state.plotList);
  const { loading, error, plots } = plotList;

  const [position, setPosition] = useState([36.7213028, -4.4216366]);
  const [polygon, setPolygon] = useState([]);

  useEffect(() => {
    dispatch(listPlots());
  }, [dispatch]);

  useEffect(() => {
    //console.log('Plots:', plots);
    if (plots.features && plots.features.length > 0) {
      const firstFeature = plots.features[0];
      if (firstFeature.geometry && firstFeature.geometry.coordinates) {
        const coordinates = firstFeature.geometry.coordinates[0];
        const correctedCoordinates = coordinates.map(coord => [coord[1], coord[0]]);
        setPosition(correctedCoordinates[0]);
        setPolygon(correctedCoordinates);
      }
    }
  }, [plots]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
          <ChangeView center={position} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; Contributors'
          />
          {polygon.length > 0 && <Polygon positions={polygon} />}
        </MapContainer>
      )}
    </div>
  );
};

export default Mapa;
