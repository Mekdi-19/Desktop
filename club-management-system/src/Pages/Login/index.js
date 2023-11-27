import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here, e.g., sending login request to the server

    // Assuming login is successful, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <div className="login-form">
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;