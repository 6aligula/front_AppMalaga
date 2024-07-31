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
  const [polygons, setPolygons] = useState([]);
  const [selectedPlot, setSelectedPlot] = useState(null);

  useEffect(() => {
    dispatch(listPlots());
  }, [dispatch]);

  useEffect(() => {
    if (plots && plots.features && plots.features.length > 0) {
      const allPolygons = plots.features.map(feature => {
        const coordinates = feature.geometry.coordinates[0];
        return coordinates.map(coord => [coord[1], coord[0]]);
      });
      setPosition(allPolygons[0][0]);  // Centrar en la primera parcela
      setPolygons(allPolygons);
      setSelectedPlot(plots.features[0]); // Selecciona la primera parcela por defecto
    }
  }, [plots]);

  const handlePlotChange = (event) => {
    const plotId = event.target.value;
    const plot = plots.features.find(feature => feature.id === parseInt(plotId));
    if (plot) {
      const coordinates = plot.geometry.coordinates[0].map(coord => [coord[1], coord[0]]);
      setPosition(coordinates[0]);
      setSelectedPlot(plot);
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        plots && plots.features && (
          <>
            <select onChange={handlePlotChange} value={selectedPlot ? selectedPlot.id : ''}>
              {plots.features.map(plot => (
                <option key={plot.id} value={plot.id}>{plot.properties.name}</option>
              ))}
            </select>
            <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
              <ChangeView center={position} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; Contributors'
              />
              {polygons.map((polygon, index) => (
                <Polygon key={index} positions={polygon} />
              ))}
            </MapContainer>
          </>
        )
      )}
    </div>
  );
};

export default Mapa;
