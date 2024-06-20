import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';
import consumerServices from '../services/consumerServices';

const LoginCustomer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await consumerServices.login(email, password);
      const { token } = response;
      
      // Store the token in localStorage
      localStorage.setItem('jwtToken', token);
      
      addToast('Login successful', 'success');

      setEmail("");
      setPassword("");

      navigate('/consumerdashboard');
    } catch (error) {
      addToast('Login failed', 'danger');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Consumer Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <p>Don't have an account? <Link to="/consumerregister">Register</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCustomer;
