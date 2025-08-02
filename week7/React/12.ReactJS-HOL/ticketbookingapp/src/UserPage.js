import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

export default function UserPage() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Go ahead and book your ticket:</p>
      <Link to="/book">Book Ticket</Link>
    </div>
  );
}
