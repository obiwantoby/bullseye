import React, { useEffect, useState } from 'react';
import api from '../api';

function ShooterList() {
  const [shooters, setShooters] = useState([]);

  useEffect(() => {
    const fetchShooters = async () => {
      try {
        const response = await api.get('/shooters');
        setShooters(response.data);
      } catch (error) {
        console.error('Error fetching shooters:', error);
      }
    };

    fetchShooters();
  }, []);

  return (
    <div>
      <h2>Shooters</h2>
      <ul>
        {shooters.map((shooter) => (
          <li key={shooter.id}>{shooter.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShooterList;