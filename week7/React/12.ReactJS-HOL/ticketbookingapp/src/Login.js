import React, { useState } from 'react';
import { useAuth } from './AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    login(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
