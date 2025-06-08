// frontend/src/components/Map.jsx
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Map.css';

const Map = () => {
  const mapRef = useRef(null);
  const markersRef = useRef({});
  const socketRef = useRef(null);

  useEffect(() => {
    // Initialize map
    const map = L.map('map').setView([0, 0], 16);
    mapRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'StreetMap by Abhinav Tirole'
    }).addTo(map);

    // Initialize socket connection
    socketRef.current = io('https://realtime-device-tracker-ct1a.onrender.com', {
      transports: ['websocket', 'polling'],
    });


    // Watch position and emit location
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("User Location:", latitude, longitude); // Debugging
          socketRef.current.emit("send-location", { latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error.message);
          alert(`Geolocation error: ${error.message}`);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    

    // Handle incoming location updates
    socketRef.current.on('receive-location', (data) => {
      const { id, latitude, longitude } = data;
      map.setView([latitude, longitude]);

      if (markersRef.current[id]) {
        markersRef.current[id].setLatLng([latitude, longitude]);
      } else {
        markersRef.current[id] = L.marker([latitude, longitude]).addTo(map);
      }
    });

    // Handle user disconnection
    socketRef.current.on('user-disconnected', (id) => {
      if (markersRef.current[id]) {
        map.removeLayer(markersRef.current[id]);
        delete markersRef.current[id];
      }
    });

    // Cleanup
    return () => {
      map.remove();
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <div className="map-container">
      
      <div id="map"></div>
      
    </div>
  );
};

export default Map;