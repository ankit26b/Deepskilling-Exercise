import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { user } = useAuth();
  const flights = [
    { id: 1, from: 'Mumbai', to: 'Delhi', time: '10:00 AM' },
    { id: 2, from: 'Mumbai', to: 'Goa', time: '02:00 PM' },
  ];

  return (
    <div>
      <h1>Available Flights</h1>
      <ul>
        {flights.map((f) => (
          <li key={f.id}>
            {f.from} → {f.to} @ {f.time}
            {user ? (
              <Link to="/book">Book Now</Link>
            ) : (
              <button disabled>Login to Book</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
