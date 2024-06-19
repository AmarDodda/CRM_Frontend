import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QueriesList = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get('http://localhost:3001/query');
        setQueries(response.data);
      } catch (error) {
        console.error('Error fetching queries:', error);
      }
    };

    fetchQueries();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="text-center mb-0">Queries List</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Consumer ID</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {queries.map(query => (
                  <tr key={queries._id}>
                    <td>{query.consumerId}</td>
                    <td>{query.name}</td>
                    <td>{query.subject}</td>
                    <td>{query.message}</td>
                    <td>{new Date(query.date).toLocaleDateString()}</td>
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

export default QueriesList;
