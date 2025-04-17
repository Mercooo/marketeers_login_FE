import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', { username, password });
      if (res.data.success) onLogin();
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
