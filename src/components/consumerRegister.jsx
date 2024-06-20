import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';
import consumerServices from '../services/consumerServices';

const RegisterCustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    try {
      const response = await consumerServices.register(name, email, password);
      toast.addToast('Registration successful', 'success');

      // Clear the form
      setFormData({
        name: '',
        email: '',
        password: ''
      });

      // Redirect to the login page
      setTimeout(() => {
        navigate('/consumerlogin');
      }, 3000);
    } catch (error) {
      toast.addToast(error.response?.data?.message || 'Registration failed', 'danger');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Consumer Register</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name"  
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"  
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control mb-3" 
                    id="password" 
                    name="password"  
                    value={formData.password} 
                    onChange={handleChange}  
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
              <br />
              <p>Already have an account? <Link to="/consumerlogin">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCustomer;


