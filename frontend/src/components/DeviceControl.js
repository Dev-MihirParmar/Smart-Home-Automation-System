import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const DeviceControl = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    socket.on('device-status', (device) => {
      setDevices((prevDevices) => prevDevices.map(d => d.id === device.id ? device : d));
    });

    return () => {
      socket.off('device-status');
    };
  }, []);

  const toggleDevice = (deviceId) => {
    socket.emit('toggle-device', deviceId);
  };

  return (
    <div>
      <h1>Device Control</h1>
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            {device.name} - {device.status ? 'On' : 'Off'}
            <button onClick={() => toggleDevice(device.id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceControl;
