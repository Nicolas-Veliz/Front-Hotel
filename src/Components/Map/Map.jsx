import React from 'react';
import { MapContainer, TileLayer } from 'https://cdn.esm.sh/react-leaflet'
import 'leaflet/dist/leaflet.css';

const Map= () => {
  return (
    <MapContainer
      center={[-26.8081, -65.2176]} // Coordenadas de Tucumán
      zoom={14}
      style={{ height: '300px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-26.8081, -65.2176]} />
    </MapContainer>
  );
};

export default Map;