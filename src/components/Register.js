import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'; // Make sure to create this CSS file

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    mobilenumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { username, mobilenumber, email, password, confirmPassword } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/register`, {
        username,
        mobilenumber,
        email,
        password
      });
      toast.success('User registered successfully');
      console.log(res.data);
    } catch (err) {
      toast.error(err.response.data.msg || 'Registration failed');
      console.error(err.response.data);
    }
  };

  return (
    <div className="register-container">
      <ToastContainer />
      <h1>Welcome To Course Vita</h1>
      <p>Structure Your Future</p>
      <div className="register-box">
        <form onSubmit={onSubmit}>
          <h2>Register</h2>
          <input type="text" name="username" placeholder="Username" value={username} onChange={onChange} required />
          <input type="text" name="mobilenumber" placeholder="Mobile Number" value={mobilenumber} onChange={onChange} required />
          <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} required />
          <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={onChange} required />
          <button type="submit">Register</button>
          <p>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;