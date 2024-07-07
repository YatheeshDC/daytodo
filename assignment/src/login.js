import React, { useState } from 'react';
import AuthService from './AuthService';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await AuthService.login(email, password);
      Swal.fire({
        title: 'Success!',
        text: 'Login successful',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/todolist'); // Redirect on successful login
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error!',
        text: 'Login failed',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };



  

  return (
    <div style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYTgd2Yf6sKu2ZWwN48mMeqz6wriIc9nPjw&s")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: '#fff',
      textAlign: 'center'}}>

    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '5px' }}>Email:</label><br></br>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '94%', padding: '8px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '3px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '94%', padding: '8px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '3px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Login</button>
      </form>
      <p style={{ marginTop: '10px', textAlign: 'center' }}>Don't have an account? <Link to="/register" style={{ color: '#007bff', textDecoration: 'none' }}>Register</Link></p>
    </div>
    </div>
  );
};

export default Login;
