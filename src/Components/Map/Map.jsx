import React from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <MapContainer
      center={[-26.836528557041706, -65.20725544877631]} // Coordenadas de Tucumán
      zoom={14}
      style={{ height: '300px', width: '50%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-26.836528557041706, -65.20725544877631]} />
    </MapContainer>
  );
};

export default Map;