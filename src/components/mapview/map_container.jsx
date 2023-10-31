import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Sidebar from '../cardview_map/sidebar';
import Controls from '../cardview_map/track_locate';
import '../cardview_map/Mapcomponent.css'; // Import a CSS file for styling (create this file if it doesn't exist)

function MapComponent() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className='flex-1 h-screen w-screen'>
        <Controls/>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapComponent;
