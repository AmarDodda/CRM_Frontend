import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';

const QueryForm = () => {
  const { consumer } = useOutletContext(); // Accessing consumer from context
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!consumer) {
      toast.addToast('Consumer not logged in', 'danger');
      return;
    }

    try {
      const formData = {
        consumerId: consumer.consumer._id,
        name,
        subject,
        message,
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
      };

      const backendUrl = 'https://crm-backend-7-cu7u.onrender.com/query'; 

      const token = localStorage.getItem('jwtToken');

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit query');
      }

      const data = await response.json();
      console.log('Query submitted successfully:', data);

      toast.addToast('Query submitted successfully', 'success');

      setName('');
      setSubject('');
      setMessage('');
      setDate('');
    } catch (error) {
      console.error('Error submitting query:', error.message);
      toast.addToast(`Error submitting query: ${error.message}`, 'danger');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Query Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject:</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit Query</button>
        </div>
      </form>
    </div>
  );
};

export default QueryForm;
