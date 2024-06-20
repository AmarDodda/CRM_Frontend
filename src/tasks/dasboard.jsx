
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '../contexts/ToastContext';

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [editCustomer, setEditCustomer] = useState(null); 
  const {addToast}=useToast();
  const [formData, setFormData] = useState({
    customerId: '',
    name: '',
    email: '',
    purchaseHistory: [],
    preferences: {
      fabricTypes: [], 
      colors: [],     
      designs: []     
    }
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('https://crm-backend-7-cu7u.onrender.com/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  const handleUpdate = (customerId) => {
    const customerToUpdate = customers.find(customer => customer._id === customerId);
    setFormData({
      name: customerToUpdate.name,
      email: customerToUpdate.email,
      purchaseHistory: customerToUpdate.purchaseHistory.map(purchase => ({ ...purchase })),
      preferences: {
        fabricTypes: [...customerToUpdate.preferences.fabricTypes],
        colors: [...customerToUpdate.preferences.colors],
        designs: [...customerToUpdate.preferences.designs]
      }
    });
    setEditCustomer(customerId);
  };

  const handleCancelUpdate = () => {
    setEditCustomer(null);
  };

  const handleSave = async (customerId, updatedCustomerData) => {
    try {
      await axios.put(`https://crm-backend-7-cu7u.onrender.com/customers/${customerId}`, updatedCustomerData);
      const response = await axios.get('https://crm-backend-7-cu7u.onrender.com/customers');
      setCustomers(response.data);
      setEditCustomer(null); 
      console.log('Customer updated successfully');
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  const handleDelete = async (customerId) => {
    try {
      await axios.delete(`https://crm-backend-7-cu7u.onrender.com/customers/${customerId}`);
      setCustomers(customers.filter(customer => customer._id !== customerId));
      console.log('Customer deleted successfully');
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  const handleSendEmail = async (customerId) => {
    try {
      await axios.post(
        `https://crm-backend-7-cu7u.onrender.com/communications/sendEmail/${customerId}`
      );
      addToast("Email sent successfully",'success');
    } catch (error) {
      addToast("Error sending email:", 'danger');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' || name === 'email') {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else if (name.startsWith('preferences.')) {
      const preferenceType = name.split('.')[1];
      setFormData(prevState => ({
        ...prevState,
        preferences: {
          ...prevState.preferences,
          [preferenceType]: value.split(',').map(item => item.trim())
        }
      }));
    } else if (name.startsWith('purchaseHistory.')) {
      const [field, indexStr] = name.split('.');
      const index = parseInt(indexStr, 10);
      const updatedPurchaseHistory = [...formData.purchaseHistory];
      updatedPurchaseHistory[index] = {
        ...updatedPurchaseHistory[index],
        [field]: value
      };
      setFormData(prevState => ({
        ...prevState,
        purchaseHistory: updatedPurchaseHistory
      }));
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4 text-center">Customer Dashboard</h2>
      <div className="table-responsive">
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Purchase History</th>
              <th>Preferences</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <React.Fragment key={customer._id}>
                <tr>
                  <td>{customer.customerId}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>
                    <ul>
                      {customer.purchaseHistory.map((purchase, idx) => (
                        <li key={idx}>
                          {new Date(purchase.date).toLocaleDateString()}: {purchase.product} ({purchase.quantity} at ${purchase.price})
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Fabric Types: {Array.isArray(customer.preferences.fabricTypes) ? customer.preferences.fabricTypes.join(', ') : ''}</li>
                      <li>Colors: {Array.isArray(customer.preferences.colors) ? customer.preferences.colors.join(', ') : ''}</li>
                      <li>Designs: {Array.isArray(customer.preferences.designs) ? customer.preferences.designs.join(', ') : ''}</li>
                    </ul>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm me-2 mb-3"
                      onClick={() => handleUpdate(customer._id)}
                      disabled={editCustomer === customer._id} 
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mb-3"
                      onClick={() => handleDelete(customer._id)}
                      disabled={editCustomer === customer._id} 
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      onClick={() => handleSendEmail(customer.customerId)}
                      disabled={editCustomer === customer.customerId}
                    >
                      Send Email
                    </button>
                  </td>
                </tr>
                {/* Conditional rendering for the edit form */}
                {editCustomer === customer._id && (
                  <tr>
                    <td colSpan="6">
                      <div className="mt-4">
                        <h3>Update Customer</h3>
                        <form onSubmit={(e) => {
                          e.preventDefault();
                          handleSave(customer._id, formData);
                        }}>
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Purchase History (JSON)</label>
                            {formData.purchaseHistory.map((purchase, index) => (
                              <div key={index}>
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                  name={`purchaseHistory.${index}.date`}
                                  value={purchase.date}
                                  onChange={handleChange}
                                />
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                  name={`purchaseHistory.${index}.product`}
                                  value={purchase.product}
                                  onChange={handleChange}
                                />
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                  name={`purchaseHistory.${index}.quantity`}
                                  value={purchase.quantity}
                                  onChange={handleChange}
                                />
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                  name={`purchaseHistory.${index}.price`}
                                  value={purchase.price}
                                  onChange={handleChange}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Fabric Types</label>
                            <input
                              type="text"
                              className="form-control"
                              name="preferences.fabricTypes"
                              value={Array.isArray(formData.preferences.fabricTypes) ? formData.preferences.fabricTypes.join(", ") : ""}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Colors</label>
                            <input
                              type="text"
                              className="form-control"
                              name="preferences.colors"
                              value={Array.isArray(formData.preferences.colors) ? formData.preferences.colors.join(", ") : ""}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Designs</label>
                            <input
                              type="text"
                              className="form-control"
                              name="preferences.designs"
                              value={Array.isArray(formData.preferences.designs) ? formData.preferences.designs.join(", ") : ""}
                              onChange={handleChange}
                            />
                          </div>
                          <button type="submit" className="btn btn-success">Save</button>
                          <button type="button" className="btn btn-secondary ms-2" onClick={handleCancelUpdate}>Cancel</button>
                        </form>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;


