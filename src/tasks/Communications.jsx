import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunicationList = () => {
  const [communications, setCommunications] = useState([]);

  useEffect(() => {
    const fetchCommunications = async () => {
      try {
        const response = await axios.get('https://crm-backend-7-cu7u.onrender.com/communications');
        setCommunications(response.data);
      } catch (error) {
        console.error('Error fetching communications:', error);
      }
    };

    fetchCommunications();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="text-center mb-0">Communications List</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>CustomerID</th>
                  <th>Type</th>
                  <th>Subject</th>
                  <th>Content</th>
                  <th>Date</th>
                  <th>Email Content</th>
                </tr>
              </thead>
              <tbody>
                {communications.map(communication => (
                  <tr key={communication._id}>
                    <td>{communication.customer}</td>
                    <td>{communication.communicationType}</td>
                    <td>{communication.subject}</td>
                    <td>{communication.content}</td>
                    <td>{new Date(communication.communicationDate).toLocaleDateString()}</td>
                    <td>{communication.emailContent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationList;
