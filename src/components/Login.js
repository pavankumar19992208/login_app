import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure to create this CSS file

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const { username, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, formData);
      console.log(res.data);
      console.log('Login successful');
      navigate('/welcome', { state: { username } });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome Back to Course Vita</h1>
      <p>Structure Your Future</p>
      <div className="login-box">
        <form onSubmit={onSubmit}>
          <h2>Login</h2>
          <input type="text" name="username" placeholder="Username" value={username} onChange={onChange} required />
          <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} required />
          <button type="submit">Login</button>
          <p>
            New user? <Link to="/">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;