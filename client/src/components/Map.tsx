import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { Alert } from '../types';

interface MapViewProps {
  alerts: Alert[];
}

const MapView: React.FC<MapViewProps> = ({ alerts }) => {
  const center = { lat: 0, lng: 0 };
  
  return (
    <div className="h-[500px] rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={2}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {alerts.map((alert) => (
          <Marker
            key={alert.id}
            position={[alert.location.latitude, alert.location.longitude]}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg">Alert Details</h3>
                <p>Threat Level: {alert.explosiveLevel}</p>
                <p>Chemical: {alert.chemicalDetected}</p>
                <p>Time: {new Date(alert.timestamp).toLocaleString()}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;